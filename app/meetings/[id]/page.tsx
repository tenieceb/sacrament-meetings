import MeetingDetail from '@/components/MeetingDetail';

export const dynamic = 'force-dynamic';

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

    const response = await fetch(`/api/meetings/${id}`);
  const meeting = await response.json();

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
