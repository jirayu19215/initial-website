import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'News | KMITL Formula Student',
  description: 'Latest news, updates, and announcements from KMITL Formula Student team.',
};

const newsArticles = [
  {
    id: 1,
    title: 'KMITL-FS03: Engineering Excellence Unveiled',
    date: 'March 15, 2024',
    category: 'Vehicle Release',
    excerpt: 'After months of intensive development, we proudly present KMITL-FS03 - our most advanced electric race car yet. Featuring revolutionary aerodynamics and optimized powertrain.',
    image: '🏎️',
  },
  {
    id: 2,
    title: 'Formula Student Malaysia 2024: New Partnerships Announced',
    date: 'March 10, 2024',
    category: 'Partnership',
    excerpt: 'We are excited to announce new strategic partnerships with leading technology companies for the upcoming Formula Student Malaysia competition.',
    image: '🤝',
  },
  {
    id: 3,
    title: 'Battery Technology Breakthrough: 18% Efficiency Gain',
    date: 'March 5, 2024',
    category: 'Technology',
    excerpt: 'Our electronics team achieved a significant breakthrough in battery management systems, improving overall efficiency by 18% through innovative circuit design.',
    image: '🔋',
  },
  {
    id: 4,
    title: 'Team Expands: Welcoming 12 New Engineers',
    date: 'February 28, 2024',
    category: 'Team',
    excerpt: 'This recruitment season, we welcomed 12 talented new members to our team, bringing diverse skills and fresh perspectives to our engineering mission.',
    image: '👥',
  },
  {
    id: 5,
    title: 'Sustainability Report 2024: Our Green Goals',
    date: 'February 20, 2024',
    category: 'Sustainability',
    excerpt: 'KMITL Formula Student commits to net-zero emissions in operations and carbon-neutral vehicle manufacturing by 2026. Learn more about our sustainability roadmap.',
    image: '🌱',
  },
  {
    id: 6,
    title: 'Formula Student East Europe: Competition Highlights',
    date: 'February 15, 2024',
    category: 'Competition',
    excerpt: 'Our team showcased excellence at Formula Student East Europe, securing top positions in design and efficiency competitions against international competitors.',
    image: '🏆',
  },
];

export default function News() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 container-section">
        <h1 className="text-5xl md:text-6xl uppercase mb-6">News & Updates</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Stay informed on the latest developments, achievements, and announcements from KMITL Formula Student.
        </p>
      </section>

      {/* Featured Article */}
      <section className="container-section py-12">
        <article className="card-dark overflow-hidden group">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-full bg-gradient-to-br from-primary-500/30 to-highlight/30 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
              {newsArticles[0].image}
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 bg-primary-500 text-accent text-xs font-bold uppercase rounded-full mb-4">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 group-hover:text-highlight transition-colors">
                {newsArticles[0].title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{newsArticles[0].date}</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {newsArticles[0].excerpt}
              </p>
              <a href="#" className="btn-primary w-fit">Read Full Article</a>
            </div>
          </div>
        </article>
      </section>

      {/* News Grid */}
      <section className="container-section py-24">
        <h2 className="section-title mb-12">Recent Articles</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {newsArticles.slice(1).map((article) => (
            <article key={article.id} className="card-dark group h-full flex flex-col">
              <div className="relative h-48 bg-gradient-to-br from-surface to-secondary flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-300">
                {article.image}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block w-fit px-3 py-1 bg-surface border border-dark-border text-highlight text-xs font-bold uppercase rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-highlight transition-colors flex-1">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-xs mb-4">{article.date}</p>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {article.excerpt}
                </p>
                <a href="#" className="text-highlight text-sm font-semibold hover:gap-2 flex items-center gap-1 transition-all">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container-section py-24 bg-surface/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for the latest news, technical articles, and team updates.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-secondary border border-dark-border rounded-sm focus:outline-none focus:border-highlight transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
