import { getMeetings, getMeetingByDate } from '@/lib/meetings-db';

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get('date');

  if (date) {
    const meeting = await getMeetingByDate(date);

    if (!meeting) {
      return new Response(
        JSON.stringify({ error: 'Meeting not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(JSON.stringify(meeting), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const meetings = await getMeetings();

  return new Response(JSON.stringify(meetings), {
    headers: { 'Content-Type': 'application/json' },
  });
}