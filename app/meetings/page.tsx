import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export default async function MeetingsPage() {
  const meetings = getMeetings();

  return (
    <main className="min-h-screen px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">
          Meetings Archive
        </h1>

        <ul className="grid gap-6 md:grid-cols-2">
          {meetings
            .filter((meeting) => new Date(meeting.date) <= new Date())
            .sort(
              (a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((meeting) => (
              <li key={meeting.id}>
                <MeetingCard meeting={meeting} />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
