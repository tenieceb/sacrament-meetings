import Link from 'next/link';

export default function MeetingNotFound() {
  return (
    <main className="min-h-screen px-8 py-10">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Meeting not found
        </h1>

        <p className="mb-6">
          The meeting you are looking for does not exist.
        </p>

        <Link
          href="/meetings"
          className="rounded bg-black px-4 py-2 font-semibold !text-white hover:bg-gray-800">
          Back to Meetings
        </Link>
      </div>
    </main>
  );
}