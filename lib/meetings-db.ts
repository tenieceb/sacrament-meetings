import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
{
  id: 2,
  date: '2026-05-10',
  meetingType: 'regular',
  presiding: 'Bishop Smith',
  conducting: 'Sister Anderson',
  openingHymn: { number: 85, title: 'How Firm a Foundation' },
  openingPrayer: 'Brother Miller',
  wardBusiness: [],
  stakeBusiness: false,
  sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
  speakers: [
    { name: 'Brother Taylor', topic: 'Serving Others', type: 'speaker' },
    { name: 'Sister Johnson', topic: 'Finding Peace Through Christ', type: 'speaker' }
  ],
  closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
  closingPrayer: 'Sister Davis',
  announcements: ['Youth activity: May 13']
},
{
  id: 3,
  date: '2026-05-17',
  meetingType: 'stake',
  presiding: 'President Wilson',
  conducting: 'Brother Clark',
  openingHymn: { number: 66, title: 'Rejoice, the Lord Is King!' },
  openingPrayer: 'Sister Martinez',
  wardBusiness: [],
  stakeBusiness: true,
  sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
  speakers: [
    { name: 'President Wilson', topic: 'Following the Savior', type: 'speaker' },
    { name: 'Sister Garcia', topic: 'Strengthening Our Families', type: 'speaker' }
  ],
  closingHymn: { number: 85, title: 'How Firm a Foundation' },
  closingPrayer: 'Brother Thompson',
  announcements: ['Stake conference reminder']
},
{
  id: 4,
  date: '2026-05-24',
  meetingType: 'regular',
  presiding: 'Bishop Smith',
  conducting: 'Brother Jones',
  openingHymn: { number: 227, title: 'There Is Sunshine in My Soul Today' },
  openingPrayer: 'Brother Wilson',
  wardBusiness: [
    { description: 'Sustaining of new Young Women presidency' }
  ],
  stakeBusiness: false,
  sacramentHymn: { number: 194, title: 'There Is a Green Hill Far Away' },
  speakers: [
    { name: 'Sister Miller', topic: 'The Power of Prayer', type: 'speaker' },
    { name: 'Brother Anderson', topic: 'Covenants and Discipleship', type: 'speaker' }
  ],
  closingHymn: { number: 301, title: 'I Am a Child of God' },
  closingPrayer: 'Sister Clark',
  announcements: ['Ward picnic: May 30']
},
{
  id: 5,
  date: '2026-05-31',
  meetingType: 'testimony',
  presiding: 'Bishop Smith',
  conducting: 'Sister Anderson',
  openingHymn: { number: 6, title: 'Redeemer of Israel' },
  openingPrayer: 'Brother Brown',
  wardBusiness: [],
  stakeBusiness: false,
  sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
  speakers: [],
  closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
  closingPrayer: 'Brother Davis',
  announcements: ['Fast Sunday reminder']
},
{
  id: 6,
  date: '2026-06-07',
  meetingType: 'general',
  presiding: 'President Johnson',
  conducting: 'Brother Davis',
  openingHymn: { number: 2, title: 'The Spirit of God' },
  openingPrayer: 'Sister Williams',
  wardBusiness: [],
  stakeBusiness: true,
  sacramentHymn: { number: 190, title: 'In Memory of the Crucified' },
  speakers: [
    { name: 'President Johnson', topic: 'Faith in Jesus Christ', type: 'speaker' },
    { name: 'Youth Choir', topic: '', type: 'musical-number' }
  ],
  closingHymn: { number: 304, title: 'Teach Me to Walk in the Light' },
  closingPrayer: 'Brother Miller',
  announcements: ['General conference viewing information']
}
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}