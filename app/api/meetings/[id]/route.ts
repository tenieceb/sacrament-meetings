import { getMeetingById } from '@/lib/meetings-db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const meetingId = Number(id);
    if (Number.isNaN(meetingId)) {
    return new Response(JSON.stringify({ error: 'Invalid meeting ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
    });
}
    const meeting = await getMeetingById(meetingId);

    if (!meeting) {
        return new Response(JSON.stringify({ error: 'Meeting not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(meeting), {
        headers: { 'Content-Type': 'application/json' },
    });

}