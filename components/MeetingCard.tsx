import type { SacramentMeeting } from '@/lib/types';
import Link from 'next/link';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
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
  <Link href={`/meetings/${meeting.id}`} className="block h-full">
    <article className="h-full rounded-lg border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
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
    </article>
  </Link>
);
}