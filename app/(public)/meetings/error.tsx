'use client';

import Link from 'next/link';

export default function MeetingsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen px-8 py-10">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mb-6">
          We couldn&apos;t load the meetings. Please try again.
        </p>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded bg-black px-4 py-2 font-semibold text-white"
          >
            Try Again
          </button>

          <Link
            href="/meetings"
            className="rounded bg-black px-4 py-2 font-semibold !text-white hover:bg-gray-800">
            Back to Meetings
          </Link>
        </div>
      </div>
    </main>
  );
}