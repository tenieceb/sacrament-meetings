import MeetingCard from "@/components/MeetingCard";
import type {SacramentMeeting} from "@/lib/types";

export default async function MeetingsPage() {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/meetings`);  const meetings: SacramentMeeting[] = await response.json();

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