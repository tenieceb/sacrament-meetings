import type { SacramentMeeting } from '@/lib/types';

export default function MeetingDetail({
  meeting,
}: {
  meeting: SacramentMeeting;
}) {
  const [year, month, day] = meeting.date.split('-');

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  ).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mx-auto max-w-3xl rounded-lg border bg-white p-8 shadow-sm">
      <h2 className="mb-6 border-b pb-4 text-2xl font-bold">
        {date}
      </h2>

    <div className="mb-8 grid gap-2 border-b pb-6">
      <p>
        <strong>Meeting Type:</strong> {meeting.meetingType}
      </p>
      <p>
        <strong>Presiding:</strong> {meeting.presiding}
      </p>
      <p>
        <strong>Conducting:</strong> {meeting.conducting}
      </p>
    </div>

    <section className="mb-8">
      <h3 className="mb-2 text-lg font-semibold">Opening Hymn</h3>
      <p>
        {meeting.openingHymn.number} - {meeting.openingHymn.title}
      </p>
    </section>

    <section className="mb-8">
      <h3 className="mb-2 text-lg font-semibold">Opening Prayer</h3>
      <p>{meeting.openingPrayer}</p>
    </section>

    {meeting.wardBusiness.length > 0 && (
      <section className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">Ward Business</h3>
        <ul className="list-disc space-y-1 pl-6">
          {meeting.wardBusiness.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </section>
    )}

    {meeting.stakeBusiness && (
      <section className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">Stake Business</h3>
        <p>Yes</p>
      </section>
    )}

    <section className="mb-8">
      <h3 className="mb-2 text-lg font-semibold">Announcements</h3>
      <p>{meeting.announcements?.join(', ') || 'None'}</p>
    </section>

    <section className="mb-8">
      <h3 className="mb-2 text-lg font-semibold">Sacrament Hymn</h3>
      <p>
        {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
      </p>
    </section>

    {meeting.speakers.length > 0 && (
      <section className="mb-8">
        <h3 className="mb-2 text-lg font-semibold">
          Speakers & Musical Numbers
        </h3>

        <ul className="list-disc space-y-1 pl-6">
          {meeting.speakers.map((speaker, index) => (
            <li key={index}>
              <strong>{speaker.name}</strong>
              {speaker.type === 'speaker' && ` — ${speaker.topic}`}
              {speaker.type === 'musical-number' && ' — Musical Number'}
            </li>
          ))}
        </ul>
      </section>
    )}

    <section className="mb-8">
      <h3 className="mb-2 text-lg font-semibold">Closing Hymn</h3>
      <p>
        {meeting.closingHymn.number} - {meeting.closingHymn.title}
      </p>
    </section>

    <section>
      <h3 className="mb-2 text-lg font-semibold">Closing Prayer</h3>
      <p>{meeting.closingPrayer}</p>
    </section>
  </div>
);
}