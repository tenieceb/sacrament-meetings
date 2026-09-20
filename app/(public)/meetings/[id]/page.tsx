import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meeting = await getMeetingById(Number(id));
  console.log("MEETING:", meeting);
  
  return (
    <main className="min-h-screen px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">
          Meeting Details
        </h1>

        {meeting ? (
          <MeetingDetail meeting={meeting} />
        ) : (
          <p>Meeting not found.</p>
        )}
      </div>
    </main>
  );
}
