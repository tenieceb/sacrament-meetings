import type { SacramentMeeting } from '@/lib/types';
import { deleteMeeting } from '@/lib/actions';
import Link from 'next/link';

interface MeetingCardProps {
  meeting: SacramentMeeting;
  isCurrent?: boolean;
}

export default function MeetingCard({
  meeting,
  isCurrent = false,
}: MeetingCardProps) {
  const [year, month, day] = meeting.date.split('-');

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  ).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="h-full rounded-lg border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link
        href={isCurrent ? '/meetings/current' : `/meetings/${meeting.id}`}
        className="block"
      >
        <h2 className="mb-4 text-xl font-bold">
          {date}
        </h2>

        <p className="mb-2">
          <span className="font-semibold">Type:</span>{' '}
          {meeting.meetingType}
        </p>

        <p>
          <span className="font-semibold">Presiding:</span>{' '}
          {meeting.presiding}
        </p>
      </Link>

      <div className="mt-4 flex gap-3">
        {!isCurrent && (
          <Link
            href={`/meetings/${meeting.id}/edit`}
            className="rounded border px-3 py-2 text-sm font-semibold"
          >
            Edit
          </Link>
        )}

        <form action={deleteMeeting.bind(null, meeting.id)}>
          <button
            type="submit"
            className="rounded border px-3 py-2 text-sm font-semibold"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}