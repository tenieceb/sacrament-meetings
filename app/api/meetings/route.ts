import { getMeetings } from '@/lib/meetings-db';

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get('date') ?? undefined;
  const meetings = await getMeetings(date);

  return new Response(JSON.stringify(meetings), {
    headers: { 'Content-Type': 'application/json' },
  });
}