import type { SacramentMeeting } from '@/lib/types';
import Link from 'next/link';


interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <Link href={`/meetings/${meeting.id}`}>
        <article>
            <h2>{meeting.date}</h2>
            <p>{meeting.meetingType}</p>
            <p>Presiding: {meeting.presiding}</p>
        </article>
    </Link>
  );
}