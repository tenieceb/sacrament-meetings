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
    <main className="min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page heading */}
        <section className="mb-12 text-center">
          <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
            Roosevelt 10th Ward Sacrament Meeting Archive
          </h1>

          <Image
            src="/church-house.jpeg"
            alt="Roosevelt 10th Ward building"
            width={500}
            height={300}
            className="mx-auto rounded-lg shadow-sm"
          />
        </section>

        {/* Meeting sections */}
        <section className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          {/* Current / Upcoming */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-2xl font-semibold">
              {dayOfWeek === 0 ? "Current Meeting" : "Upcoming Meeting"}
            </h2>

            <div>
              {currentMeeting ? (
                <MeetingCard meeting={currentMeeting} isCurrent />
              ) : (
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <p>No upcoming meeting found.</p>
                </div>
              )}
            </div>
          </div>

          {/* Last Sunday */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-2xl font-semibold">
              Last Sunday
            </h2>

            <div>
              {lastMeeting ? (
                <MeetingCard meeting={lastMeeting} />
              ) : (
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <p>No previous meeting found.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}