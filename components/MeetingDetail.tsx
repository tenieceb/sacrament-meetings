import type { SacramentMeeting } from '@/data/types';


export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div>
        <h2>Date: {meeting.date}</h2>
        <div>
            <p><strong>Meeting Type:</strong> {meeting.meetingType}</p>
            <p><strong>Presiding:</strong> {meeting.presiding}</p>
            <p><strong>Conducting:</strong> {meeting.conducting}</p>
        </div>
        <h3>Opening Hymn:</h3>
            <p>{meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
        <h3>Opening Prayer:</h3>
            <p>{meeting.openingPrayer}</p>
        {meeting.wardBusiness.length > 0 && (
            <div>
                <h3>Ward Business:</h3>
                <ul>
                    {meeting.wardBusiness.map((item, index) => (
                        <li key={index}>{item.description}</li>
                    ))}
                </ul>
            </div>
        )}
        {meeting.stakeBusiness && (
            <div>
                <h3>Stake Business:</h3>
                <p>Yes</p>
            </div>
        )}
        <h3>Announcements:</h3>
        <p>{meeting.announcements?.join(', ') || 'None'}</p>
        <h3>Sacrament Hymn:</h3>
        <p>{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>

        {meeting.speakers.length > 0 && (
        <div>
            <h3>Speakers & Musical Numbers:</h3>
            <ul>
            {meeting.speakers.map((speaker, index) => (
                <li key={index}>
                <strong>{speaker.name}</strong>
                {speaker.type === 'speaker' && ` — ${speaker.topic}`}
                {speaker.type === 'musical-number' && ' — Musical Number'}
                </li>
            ))}
            </ul>
        </div>
        )}
        <h3>Closing Hymn:</h3>
        <p>{meeting.closingHymn.number} - {meeting.closingHymn.title}</p>
        <h3>Closing Prayer:</h3>
        <p>{meeting.closingPrayer}</p>
    </div>
  );
}