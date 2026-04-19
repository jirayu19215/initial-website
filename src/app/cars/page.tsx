import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CarTimeline } from '@/components/CarTimeline';
import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string; alt?: string; 'auto-rotate'?: boolean; 'camera-controls'?: boolean;
        'shadow-intensity'?: string; exposure?: string; 'environment-image'?: string; style?: React.CSSProperties;
      }, HTMLElement>;
    }
  }
}

export const metadata = {
  title: 'Cars | KMITL Formula Student',
  description: 'Explore KMITL Formula Student racing vehicles - specifications, gallery, and history.',
};

export default function Cars() {
  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
      />

      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 container-section">
        <h1 className="text-5xl md:text-6xl uppercase mb-6">Our Vehicles</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Engineering innovation meets performance. Explore the cutting-edge technology behind every KMITL Formula Student car.
        </p>
      </section>

      {/* Current Car - Detailed */}
      <section className="container-section py-24 bg-surface/30">
        <h2 className="section-title mb-12">KMITL-FS01 (Current)</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Car Showcase */}
          <div>
            <div className="relative h-96 rounded-lg border border-dark-border overflow-hidden mb-6 bg-surface/30">
              <model-viewer
                src="/model_car/Body Design 2-4.glb"
                alt="KMITL-FS01 Race Car 3D Model"
                auto-rotate
                camera-controls
                shadow-intensity="2"
                exposure="1.5"
                environment-image="neutral"
                style={{ width: '100%', height: '100%', backgroundColor: '#111' }}
              />
            </div>
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 h-24 rounded overflow-hidden border border-dark-border hover:border-highlight transition-colors cursor-pointer">
                  <img src={`/car_${i}.jpg`} alt={`Car view ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-gray-400 uppercase mb-2">Powertrain</h3>
                <p className="text-lg font-semibold">85 kW Electric Motor</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 uppercase mb-2">Battery</h3>
                <p className="text-lg font-semibold">14.4 kWh LiPo Pack</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 uppercase mb-2">0-100 km/h</h3>
                <p className="text-lg font-semibold">3.2 seconds</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 uppercase mb-2">Curb Weight</h3>
                <p className="text-lg font-semibold">280 kg</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 uppercase mb-2">Chassis</h3>
                <p className="text-lg font-semibold">Carbon Fiber Monocoque</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 uppercase mb-2">Aerodynamics</h3>
                <p className="text-lg font-semibold">CL = 1.2 at 100 km/h</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary-500/10 border border-primary-500/30 rounded-lg">
              <h4 className="font-bold text-highlight uppercase mb-3">Key Features</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Advanced regenerative braking</li>
                <li>✓ Real-time telemetry system</li>
                <li>✓ Aerodynamic optimization</li>
                <li>✓ Lightweight carbon fiber construction</li>
                <li>✓ Responsive suspension system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: 'Power-to-Weight', value: '303 W/kg' },
            { label: 'Max Speed', value: '180 km/h' },
            { label: 'Efficiency', value: '18 km/kWh' },
            { label: 'Range', value: '260 km' },
          ].map((metric, idx) => (
            <div key={idx} className="card-dark p-6 text-center">
              <p className="text-highlight font-bold text-2xl mb-2">{metric.value}</p>
              <p className="text-sm text-gray-400 uppercase">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-section py-24">
        <h2 className="section-title mb-12">Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden border border-dark-border hover:border-highlight transition-all cursor-pointer group">
              <img src={`/gallery/gallery_${i}.jpg`} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Subsystems Overview */}
      <section className="container-section py-24 bg-surface/30">
        <h2 className="section-title mb-12">Core Subsystems</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Propulsion',
              specs: ['Motor: 85 kW AC Induction', 'Inverter: 3-phase', 'Gearbox: 9:1 reduction']
            },
            {
              title: 'Energy Management',
              specs: ['Battery: 14.4 kWh LiPo', 'BMS: Cell-level monitoring', 'Charging: 6.6 kW onboard']
            },
            {
              title: 'Chassis & Suspension',
              specs: ['Monocoque: Carbon fiber', 'Front: Double wishbone', 'Rear: Double wishbone']
            },
            {
              title: 'Braking & Steering',
              specs: ['Hydraulic disc brakes', 'Electronic power steering', 'Regenerative braking']
            },
          ].map((system, idx) => (
            <div key={idx} className="card-dark p-8">
              <h3 className="font-bold uppercase text-lg mb-6 text-highlight">{system.title}</h3>
              <ul className="space-y-3">
                {system.specs.map((spec, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-primary-500 mt-1">▸</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="container-section py-24">
        <h2 className="section-title mb-12">Car Evolution</h2>
        <CarTimeline />
      </section>

      {/* Video Section */}
      <section className="container-section py-24 bg-surface/30">
        <h2 className="section-title mb-12">Videos</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="relative aspect-video bg-gradient-to-br from-primary-500/20 to-highlight/20 rounded-lg border border-dark-border flex items-center justify-center group cursor-pointer">
              <p className="text-6xl group-hover:scale-110 transition-transform">▶️</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
