import Image from "next/image";
import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export default async function Home() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);

  if (dayOfWeek !== 0) {
    sunday.setDate(today.getDate() + (7 - dayOfWeek));
  }

  const sundayString = sunday.toLocaleDateString("en-CA");
  const meetings = await getMeetings();



  const currentMeeting =
    meetings.find((meeting) => meeting.date === sundayString) ?? null;

  const lastSunday = new Date(sunday);
  lastSunday.setDate(sunday.getDate() - 7);

  const lastSundayString = lastSunday.toLocaleDateString("en-CA"); 
  const lastMeeting =
    meetings.find((meeting) => meeting.date === lastSundayString) ?? null;

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-5xl">
        <section className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-bold">
            Roosevelt 10th Ward Sacrament Meeting Archive
          </h1>

          <Image
            src="/church-house.jpeg"
            alt="Roosevelt 10th Ward building"
            width={500}
            height={300}
            className="mx-auto rounded-lg"
          />
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {dayOfWeek === 0 ? "Current Meeting" : "Upcoming Meeting"}
            </h2>

            {currentMeeting ? (
              <MeetingCard meeting={currentMeeting} isCurrent />
            ) : (
              <p>No upcoming meeting found.</p>
            )}
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Last Sunday
            </h2>

            {lastMeeting ? (
              <MeetingCard meeting={lastMeeting} />
            ) : (
              <p>No previous meeting found.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}