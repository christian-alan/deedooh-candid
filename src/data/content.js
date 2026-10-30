// Copy and data for the deedooh landing page (Candid).

export const VISITOR_CITY = 'Stockholm';

// [name, logo, logo height in px]
export const PUBLISHERS = [["JCDecaux", "/assets/publishers/jcdecaux.svg", 20.0], ["Clear Channel", "/assets/publishers/clear-channel.svg", 19.7], ["Bauer Media Outdoor", "/assets/publishers/bauer-media-outdoor.svg", 16.1], ["Ocean Outdoor", "/assets/publishers/ocean-outdoor.svg", 14.4], ["Ströer", "/assets/publishers/stroer.svg", 24.0], ["Outfront", "/assets/publishers/outfront.svg", 21.1], ["Lamar", "/assets/publishers/lamar.svg", 23.6], ["Global", "/assets/publishers/global.svg", 24.0], ["oOh!media", "/assets/publishers/oohmedia.svg", 21.9], ["Pattison Outdoor", "/assets/publishers/pattison-outdoor.svg", 12.2], ["Focus Media", "/assets/publishers/focus-media.svg", 20.3], ["Wildstone", "/assets/publishers/wildstone.svg", 23.5], ["Primedia Outdoor", "/assets/publishers/primedia-outdoor.svg", 17.4], ["Intersection", "/assets/publishers/intersection.svg", 21.5], ["Vector Media", "/assets/publishers/vector-media.svg", 16.2], ["Limited Space", "/assets/publishers/limited-space.svg", 20.0], ["Blowup Media", "/assets/publishers/blowup-media.svg", 21.6], ["WallDecaux", "/assets/publishers/walldecaux.svg", 20.6]];

export const WHAT_WE_DO = [
  { time: '18:40 · Kungsgatan', ring: '#7CFFCB', title: 'Large format', body: 'Big digital screens on buildings, squares and arenas. Made to be seen from across the street.', video: '/assets/video/large-format.mp4', poster: '/assets/video/large-format.jpg' },
  { time: '12:15 · Odenplan', ring: '#00D1FF', title: 'Street level', body: 'Screens at eye height where people walk, wait and cross. Close to the moment they decide.', video: '/assets/video/street-level.mp4', poster: '/assets/video/street-level.jpg' },
  { time: '07:50 · T-Centralen', ring: '#C4B5FD', title: 'Transit and rush hour', body: 'Stations, platforms and commuter routes, timed to the hours your audience is on the move.', video: '/assets/video/transit.mp4', poster: '/assets/video/transit.jpg' },
  { time: '08:05 · Södermalm', ring: '#7CFFCB', title: 'Your neighbourhood', body: 'Book every screen around your store, so the people nearby see you first.', video: '/assets/video/neighbourhood.mp4', poster: '/assets/video/neighbourhood.jpg' },
];

export const STEPS = [
  { n: '01', time: '08:12', title: 'Select your screens', body: 'Choose exactly which screens your campaign should appear on, across cities, retail and transport environments.' },
  { n: '02', time: '08:20', title: 'Set budget and schedule', body: 'Set your budget, pick your dates and the moments of the day that matter, all in one simple workflow.' },
  { n: '03', time: '09:00', title: 'We activate and deliver', body: 'Once submitted, we get approvals from publishers, activate your campaign and run it across your selected screens.' },
];

// Step scenes: selected screens, budget bars per day (14 days), activation log.
export const HIW_SCREENS = [
  ['Odenplan', 'Street · Digital 6-sheet · 4 screens'],
  ['T-Centralen', 'Metro · Escalator panels · 8 screens'],
  ['Mall of Scandinavia', 'Retail · Portrait 75" · 4 screens'],
  ['Slussen', 'Street · Large format · 2 screens'],
];
export const HIW_BARS = [38, 52, 61, 70, 66, 48, 35, 44, 58, 72, 80, 74, 50, 40];
// [title, detail, dot background, dot colour]
export const HIW_LOG = [
  ['Creative checked', '1080×1920 and 1920×1080 · ready for every screen', '#EEEBFF', '#2E25B8'],
  ['Sent to publishers', '3 publishers notified for approval', '#EEEBFF', '#2E25B8'],
  ['Approved', 'All 18 screens confirmed', '#7CFFCB', '#0B1F3B'],
  ['Scheduled', 'Mon 3 Mar → Sun 16 Mar · rush hours', '#7CFFCB', '#0B1F3B'],
];

export const PERSONAS = [
  {
    label: 'Local marketers',
    photo: '/assets/proof-kvarter-coffee.jpg',
    photoPosition: '50% 20%',
    pill: 'Booked · Södermalm · 6 screens',
    ring: '#7CFFCB',
    head: 'Own your\nneighbourhood.',
    body: 'No team and no outdoor specialists? You know where your visitors come from. Pick those areas, like Bromma or the streets around your store, and fill them with every available screen.',
    stats: [['Book by area, not by publisher', 'Stockholm City · Bromma · near your store'], ['Live in under five minutes', 'Two or three campaigns a year, done yourself']],
  },
  {
    label: 'Global brands',
    photo: '/assets/proof-nordic-oat.webp',
    photoPosition: '50% 14%',
    pill: 'Live · 4 markets · one plan',
    ring: '#00D1FF',
    head: 'One launch.\nEvery market.',
    body: 'Launch in as many markets as you need, planned from one office, without another tool to manage. A team that can handle global scale, even if we look small.',
    stats: [['Every market in one plan', 'Run from HQ, live worldwide'], ['Self-serve or fully managed', 'Our team can set it up with you']],
  },
  {
    label: 'Agencies',
    photo: '/assets/proof-studio-nord.jpg',
    photoPosition: '45% 40%',
    pill: 'Planning · 3 clients this week',
    ring: '#C4B5FD',
    head: 'Every client.\nOne platform.',
    body: 'Local retail, national B2B and Nordic bursts all need a different process today. In deedooh you plan, buy and analyse for all of them in one place.',
    stats: [['Local, national and multi-market', 'From two stores to four countries'], ['Do it yourself or hand it to us', 'Self-serve for planners, managed for everyone else']],
  },
];

// [city, country, lon, lat]
export const NETWORK_CITIES = [
  ['Stockholm', 'Sweden', 18.07, 59.33],
  ['Oslo', 'Norway', 10.75, 59.91],
  ['Copenhagen', 'Denmark', 12.57, 55.68],
  ['Helsinki', 'Finland', 24.94, 60.17],
  ['London', 'United Kingdom', -0.13, 51.51],
  ['Berlin', 'Germany', 13.4, 52.52],
  ['New York', 'United States', -74.0, 40.71],
  ['Singapore', 'Singapore', 103.82, 1.35],
];
