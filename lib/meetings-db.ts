import type { SacramentMeeting } from '@/lib/types.ts';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-03-29',
    meetingType: 'stake',
    presiding: 'President Johnson',
    conducting: 'Brother Clark',
    openingHymn: { number: 66, title: 'Rejoice, the Lord Is King!' },
    openingPrayer: 'Sister Martinez',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      {
        name: 'President Johnson',
        topic: 'Strengthening Our Faith in Jesus Christ',
        type: 'speaker'
      },
      {
        name: 'Sister Garcia',
        topic: 'Serving in the Kingdom',
        type: 'speaker'
      }
    ],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'Brother Thompson',
    announcements: ['Stake Conference']
  },

  {
    id: 2,
    date: '2026-04-05',
    meetingType: 'general',
    presiding: 'President Dallin H. Oaks',
    conducting: 'President Henry B. Eyring',
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'President Henry B. Eyring',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      {
        name: 'President Dallin H. Oaks',
        topic: 'Faith in Jesus Christ',
        type: 'speaker'
      },
      {
        name: 'Elder Patrick Kearon',
        topic: 'Following the Savior',
        type: 'speaker'
      }
    ],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'President Dallin H. Oaks',
    announcements: ['April 2026 General Conference']
  },

  {
    id: 3,
    date: '2026-08-23',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 227, title: 'There Is Sunshine in My Soul Today' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [
      { description: 'Sustaining of new Primary presidency' }
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [
      {
        name: 'Sister Brown',
        topic: 'Following Jesus Christ',
        type: 'speaker'
      },
      {
        name: 'Brother Miller',
        topic: 'Serving in the Lord',
        type: 'speaker'
      }
    ],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward activity: August 29']
  },

  {
    id: 4,
    date: '2026-08-30',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Sister Anderson',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Brother Taylor',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      {
        name: 'Brother Johnson',
        topic: 'Faith During Difficult Times',
        type: 'speaker'
      },
      {
        name: 'Sister Garcia',
        topic: 'Finding Joy in the Gospel',
        type: 'speaker'
      }
    ],
    closingHymn: { number: 301, title: 'I Am a Child of God' },
    closingPrayer: 'Sister Clark',
    announcements: ['Stake youth activity: September 5']
  },

  {
    id: 5,
    date: '2026-09-06',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Sister Miller',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Brother Wilson',
    announcements: ['Fast Sunday']
  },

  {
    id: 6,
    date: '2026-09-13',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Davis',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Sister Johnson',
    wardBusiness: [
      { description: 'Sustaining of new Young Women secretary' }
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 190, title: 'In Memory of the Crucified' },
    speakers: [
      {
        name: 'Sister Anderson',
        topic: 'Covenants and Discipleship',
        type: 'speaker'
      },
      {
        name: 'Youth Choir',
        topic: '',
        type: 'musical-number'
      }
    ],
    closingHymn: { number: 304, title: 'Teach Me to Walk in the Light' },
    closingPrayer: 'Brother Thompson',
    announcements: ['Ward temple day: September 26']
  },

  {
    id: 7,
    date: '2026-09-20',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Sister Anderson',
    openingHymn: { number: 227, title: 'There Is Sunshine in My Soul Today' },
    openingPrayer: 'Brother Miller',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [
      {
        name: 'Brother Taylor',
        topic: 'The Savior’s Love',
        type: 'speaker'
      },
      {
        name: 'Sister Johnson',
        topic: 'Strengthening Our Families',
        type: 'speaker'
      }
    ],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Sister Davis',
    announcements: ['Ward activity: September 26']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}
