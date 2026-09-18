import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export default function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  if (dayOfWeek !== 0) {
    sunday.setDate(today.getDate() + (7 - dayOfWeek));
  }
  const isSunday = dayOfWeek === 0;

  const sundayString = sunday.toLocaleDateString('en-CA');
  const currentMeetings = getMeetings(sundayString);
  const currentMeeting = currentMeetings.length > 0 ? currentMeetings[0] : null;

    if (currentMeeting) {
        redirect(`/meetings/${currentMeeting.id}`);

    } else {
        return (
            <main>
                <h1>{isSunday ? 'Current Meeting' : 'Upcoming Meeting'}</h1>
                <p>No meeting found for {sundayString}.</p>
            </main>
        );
    }
}