import { notFound } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { cars, getCarBySlug } from '@/lib/cars-data';

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return {};
  return { title: `${car.model} (${car.year}) | KMITL Formula Student` };
}

export default async function CarDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const photos = Array.from({ length: car.photoCount }, (_, i) => i + 1);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 container-section">
        <a href="/cars" className="text-xs text-gray-500 uppercase tracking-widest hover:text-highlight transition-colors">
          ← Back to Cars
        </a>
        <div className="flex items-end gap-6 mt-6 mb-2 flex-wrap">
          <h1 className="text-5xl md:text-6xl font-black uppercase">{car.model}</h1>
          <span className={`mb-2 px-4 py-1 rounded-full text-sm font-bold uppercase ${
            car.type === 'EV'
              ? 'bg-primary-500/20 text-primary-400'
              : 'bg-highlight/20 text-highlight'
          }`}>
            {car.type}
          </span>
        </div>
        <p className="text-gray-400 text-lg">{car.year}</p>
      </section>

      {/* Photos */}
      {photos.length > 0 ? (
        <section className="container-section pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((n) => (
              <div key={n} className="aspect-video rounded-lg overflow-hidden border border-dark-border bg-surface/30">
                <img
                  src={`/cars/${car.slug}/${n}.jpg`}
                  alt={`${car.model} photo ${n}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="container-section pb-12">
          <div className="h-48 rounded-lg border border-dashed border-dark-border flex items-center justify-center text-gray-600">
            <p className="text-sm uppercase tracking-wide">Photos Coming Soon</p>
          </div>
        </section>
      )}

      {/* Technical Specs */}
      {car.specs && car.specs.length > 0 && (
        <section className="container-section py-24 border-t border-dark-border">
          <h2 className="section-title mb-10">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl text-sm">
              <thead>
                <tr className="border-b border-primary-500">
                  <th className="text-left py-3 pr-6 text-xs uppercase tracking-widest text-primary-500 w-48">System</th>
                  <th className="text-left py-3 pr-6 text-xs uppercase tracking-widest text-gray-400">Key Numbers</th>
                  <th className="text-left py-3 text-xs uppercase tracking-widest text-gray-400">Highlights</th>
                </tr>
              </thead>
              <tbody>
                {car.specs.map((spec, i) => (
                  <tr key={i} className="border-b border-dark-border hover:bg-surface/50 transition-colors">
                    <td className="py-4 pr-6 font-bold uppercase text-white text-xs tracking-wide">{spec.system}</td>
                    <td className="py-4 pr-6 text-gray-300 font-mono text-xs">{spec.value}</td>
                    <td className="py-4 text-gray-400 text-xs">{spec.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Competition Results */}
      <section className="container-section py-24 border-t border-dark-border">
        <h2 className="section-title mb-10">Competition Results</h2>

        <div className="space-y-8 max-w-2xl">
          {car.competitions.map((comp, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg" style={{ backgroundImage: "url('/DSCF5192.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/75" />
              <div className="relative z-10 p-8">
                <h3 className="font-bold uppercase text-highlight mb-5">{comp.name}</h3>
                <ul className="space-y-3">
                  {comp.awards.map((award, j) => (
                    <li key={j} className="flex gap-3 text-gray-300">
                      <span className="text-primary-500 shrink-0 mt-0.5">▸</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
