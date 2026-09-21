import MeetingCard from "@/components/MeetingCard";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";
import { Pagination } from "@/components/Pagination";
import { MeetingSearch } from "@/components/MeetingSearch";

export default async function MeetingsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const params = await searchParams;

  const query = params.query || "";
  const currentPage = Number(params.page) || 1;

  const meetings = await getMeetings(query, currentPage);
  const totalPages = await getMeetingsTotalPages(query);

  return (
    <main className="min-h-screen px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">
          Meetings Archive
        </h1>
        <MeetingSearch />
        <ul className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <MeetingCard meeting={meeting} />
            </li>
          ))}
        </ul>

        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}