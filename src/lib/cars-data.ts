export type Competition = {
  name: string;
  awards: string[];
};

export type CarData = {
  slug: string;
  year: string;
  model: string;
  type: 'ICE' | 'EV';
  competitions: Competition[];
  photoCount: number; // อัปเดตตัวเลขนี้เมื่อใส่รูปใน public/cars/[slug]/
};

export const cars: CarData[] = [
  {
    slug: 'inixii', year: '2025', model: 'INIXII', type: 'EV', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2026', awards: ['Preparing for competition'] },
    ],
  },
  {
    slug: 'tarantula-ev3', year: '2024', model: 'TARANTULA EV3', type: 'EV', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2025', awards: [
        'Overall Ranking: 7th place',
        '1st place in EV Class',
        '1st place — Best Presentation Award',
      ]},
    ],
  },
  {
    slug: 'raubtier-ii', year: '2023', model: 'RAUBTIER II', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2024', awards: ['Overall Ranking: 11th place'] },
    ],
  },
  {
    slug: 'raubtier-i', year: '2022', model: 'RAUBTIER I', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2023', awards: ['Overall Ranking: 15th place'] },
    ],
  },
  {
    slug: 'kf2020', year: '2019', model: 'KF2020', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2019', awards: [
        'Overall Ranking: 8th place',
        '2nd Runner-Up — Auto Cross',
      ]},
    ],
  },
  {
    slug: 'kf2018-2018', year: '2018', model: 'KF2018', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2018', awards: [
        'Overall Ranking: 10th place',
        '1st place — Auto Cross',
        '1st Runner-Up — Improvement Score',
      ]},
    ],
  },
  {
    slug: 'kf2018-2017', year: '2017', model: 'KF2018', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2017', awards: [
        'Overall Ranking: 19th place',
        '1st Runner-Up — Cost Event',
        '1st Runner-Up — Design Event',
      ]},
    ],
  },
  {
    slug: 'king-scorpio', year: '2016', model: 'King Scorpio', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2016', awards: [
        'Overall Ranking: 3rd place',
        '1st place — Best Cost Report',
      ]},
    ],
  },
  {
    slug: 'scorpio', year: '2015', model: 'Scorpio', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2015', awards: [
        'Overall Ranking: 3rd place',
        '1st place — Best Skid Pad',
        '1st place — Best Fuel Efficiency',
      ]},
    ],
  },
  {
    slug: 'brutax-mk2', year: '2014', model: 'Brutax MK2', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'Formula Student Germany 2014', awards: ['Overall Ranking: 52nd place'] },
    ],
  },
  {
    slug: 'brutax', year: '2013', model: 'Brutax', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2013', awards: [
        'Overall Ranking: 3rd place',
        '1st place — Cost Report',
        '1st place — Design',
      ]},
    ],
  },
  {
    slug: 'king-python', year: '2012', model: 'King Python', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2012', awards: [
        'Overall Ranking: 6th place',
        '1st place — Presentation',
        '1st place — Acceleration',
        '1st place — Design',
        '1st place — Auto Cross',
      ]},
    ],
  },
  {
    slug: 'mobius', year: '2011', model: 'Mobius', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'Formula Student UK', awards: ['Overall Ranking: 73rd place'] },
    ],
  },
  {
    slug: 'python', year: '2010', model: 'Python', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2010', awards: ['1st place — Overall'] },
      { name: 'Formula Student UK', awards: ['Overall Ranking: 24th place'] },
    ],
  },
  {
    slug: 'kf2009', year: '2009', model: 'KF2009', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2009', awards: [
        'Overall Ranking: 6th place',
        '1st place — Presentation Award',
        '1st place — Handling Award',
        '1st Runner-Up — Design Award',
      ]},
      { name: 'SAE-A Australia 2009', awards: ['Participated'] },
    ],
  },
  {
    slug: 'kabuto', year: '2008', model: 'Kabuto', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2008', awards: ['1st place — Overall'] },
      { name: 'SFJ Student Formula Japan 2008', awards: [
        'Best Rookie Award',
        'Best Design Award',
        'Sportsmanship Award',
      ]},
    ],
  },
  {
    slug: 'quinto', year: '2007', model: 'Quinto', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2007', awards: ['Overall Ranking: 4th place'] },
    ],
  },
  {
    slug: 'mantisa', year: '2006', model: 'Mantisa', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2006', awards: [
        '1st place — Alternative Fuel Class',
        '2nd place — Electric Car Class (Froggy)',
      ]},
    ],
  },
  {
    slug: 'blackcat', year: '2005', model: 'Blackcat', type: 'ICE', photoCount: 0,
    competitions: [
      { name: 'TSAE Auto Challenge 2005', awards: ['Overall Ranking: 2nd place'] },
    ],
  },
];

export function getCarBySlug(slug: string) {
  return cars.find((c) => c.slug === slug);
}
