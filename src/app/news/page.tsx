import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'News | KMITL Formula Student',
  description: 'Latest news, updates, and announcements from KMITL Formula Student team.',
};

const newsArticles = [
  {
    id: 1,
    title: 'INITIAL Formula Student Heading to Formula Student China 2026',
    date: 'April 2026',
    category: 'Competition',
    excerpt: 'We are proud to announce our participation in Formula Student China 2026 (Oct 13–18), competing in the EV & AV Class. This marks a major milestone for INITIAL as we take our electric race car to an international stage.',
    image: '/fsc-competition.jpg',
  },
  {
    id: 2,
    title: 'TARANTULA EV3 Takes 1st in EV Class at TSAE Auto Challenge 2025',
    date: '2025',
    category: 'Competition Result',
    excerpt: 'Our TARANTULA EV3 achieved an outstanding performance at TSAE Auto Challenge 2025 — 7th Overall, 1st place in the EV Class, and Winner of the Best Presentation Award.',
    image: '/TSAE.avif',
  },
  {
    id: 3,
    title: 'Winner of Ansys Simulation Award at Formula Student Thailand 2025',
    date: '2025',
    category: 'Award',
    excerpt: 'INITIAL Formula Student received the Ansys Simulation Award presented by CADFEM Thailand, along with 1st Runner-Up in the Efficiency Event and 1st Runner-Up in the EV Category — finishing 6th overall.',
    image: '/TSAE.avif',
  },
  {
    id: 4,
    title: 'Introducing INIXII — Our 2025 Electric Race Car',
    date: '2025',
    category: 'Vehicle',
    excerpt: 'Meet INIXII, our latest electric formula car developed for the 2026 season. Built by over 30 engineers across mechanical, electrical, and software disciplines, INIXII represents the next chapter of INITIAL.',
    image: '/DSC05116.jpg',
  },
  {
    id: 5,
    title: 'INITIAL Formula Student Joins Formula Student Thailand 2025',
    date: '2025',
    category: 'Competition',
    excerpt: 'INITIAL Formula Student will compete at Formula Student Thailand 2025, continuing our journey in domestic electric formula racing and pushing further toward international competition.',
    image: '/TSAE.avif',
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
            <div className="relative h-80 md:h-full overflow-hidden">
              <img src={newsArticles[0].image} alt={newsArticles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30" />
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
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30" />
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
