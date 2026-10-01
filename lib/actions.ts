'use server';


import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import {
  addMeeting,
  updateMeeting as updateMeetingDb,
  deleteMeeting as deleteMeetingDb,
} from '@/lib/meetings-db';

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];
    openingHymn?: string[];
    openingPrayer?: string[];
    wardBusiness?: string[];
    stakeBusiness?: string[];
    sacramentHymn?: string[];
    speakers?: string[];
    closingHymn?: string[];
    closingPrayer?: string[];
  };
  message?: string | null;
};

const HymnSchema = z.object({
  number: z.coerce.number().int().min(0),
  title: z.string().trim().min(1),
});

const SpeakerItemSchema = z.object({
  name: z.string().trim().min(1),
  topic: z.string().trim(),
  type: z.enum(['speaker', 'musical-number']),
});

const WardBusinessItemSchema = z.object({
  description: z.string().trim().min(1),
});

const MeetingFormSchema = z.object({
  date: z.string().min(1),
  meetingType: z.enum([
    'testimony',
    'regular',
    'stake',
    'general',
  ]),
  presiding: z.string().trim().min(1),
  conducting: z.string().trim().min(1),
  announcements: z.array(z.string().trim()),
  openingHymn: HymnSchema,
  openingPrayer: z.string().trim().min(1),
  wardBusiness: z.array(WardBusinessItemSchema),
  stakeBusiness: z.boolean(),
  sacramentHymn: HymnSchema,
  speakers: z.array(SpeakerItemSchema),
  closingHymn: HymnSchema,
  closingPrayer: z.string().trim().min(1),
});

function parseFormData(formData: FormData) {
  const announcements = String(
    formData.get('announcements') ?? ''
  )
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

  const wardBusiness = String(
    formData.get('wardBusiness') ?? ''
  )
    .split('\n')
    .map((description) => description.trim())
    .filter(Boolean)
    .map((description) => ({ description }));

  const speakers = String(
    formData.get('speakers') ?? ''
  )
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name = '', topic = '', type = 'speaker'] =
        line.split('|').map((value) => value.trim());

      return {
        name,
        topic,
        type,
      };
    });

  const raw = {
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),

    announcements,

    openingHymn: {
      number: formData.get('openingHymnNumber'),
      title: formData.get('openingHymnTitle'),
    },

    openingPrayer: formData.get('openingPrayer'),

    wardBusiness,

    stakeBusiness: formData.get('stakeBusiness') === 'true',

    sacramentHymn: {
      number: formData.get('sacramentHymnNumber'),
      title: formData.get('sacramentHymnTitle'),
    },

    speakers,

    closingHymn: {
      number: formData.get('closingHymnNumber'),
      title: formData.get('closingHymnTitle'),
    },

    closingPrayer: formData.get('closingPrayer'),
  };

  return MeetingFormSchema.safeParse(raw);
}

export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {
  const result = parseFormData(formData);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create meeting.',
    };
  }

  try {
    await addMeeting(result.data);
  } catch (error) {
    console.error('Failed to create meeting:', error);

    return {
      message: 'Database Error: Failed to create meeting.',
    };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData
): Promise<State> {
  const result = parseFormData(formData);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to update meeting.',
    };
  }

  try {
    await updateMeetingDb(id, result.data);
  } catch (error) {
    console.error(`Failed to update meeting ${id}:`, error);

    return {
      message: 'Database Error: Failed to update meeting.',
    };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function deleteMeeting(id: number) {
  try {
    await deleteMeetingDb(id);
  } catch (error) {
    console.error(`Failed to delete meeting ${id}:`, error);
    throw new Error('Unable to delete the meeting. Please try again.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}