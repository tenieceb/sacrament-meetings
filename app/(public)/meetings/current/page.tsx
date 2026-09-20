import MeetingDetail from '@/components/MeetingDetail';
import { getMeetings } from '@/lib/meetings-db';

export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);

  if (dayOfWeek !== 0) {
    sunday.setDate(today.getDate() + (7 - dayOfWeek));
  }

  const isSunday = dayOfWeek === 0;
  const sundayString = sunday.toLocaleDateString('en-CA');

  const meetings = await getMeetings();

  const currentMeeting =
    meetings.find((meeting) => meeting.date === sundayString) ?? null;

  return (
    <main className="min-h-screen px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">
          {isSunday ? 'Current Meeting' : 'Upcoming Meeting'}
        </h1>

        {currentMeeting ? (
          <MeetingDetail meeting={currentMeeting} />
        ) : (
          <p>No meeting found for {sundayString}.</p>
        )}
      </div>
    </main>
  );
}