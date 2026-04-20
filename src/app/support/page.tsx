import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Support Us | KMITL Formula Student',
  description: 'Support KMITL Formula Student team via PromptPay or bank transfer.',
};

export default function Support() {
  return (
    <>
      <Navigation />

      <section className="pt-24 pb-12 container-section">
        <p className="text-xs uppercase tracking-widest text-primary-500 mb-4">Support Us</p>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">Support the Team</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Every contribution helps us develop our race car and compete at international events.
        </p>
      </section>

      <section className="container-section py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">

          {/* PromptPay */}
          <div className="border border-dark-border rounded-lg p-8 bg-surface/30">
            <p className="text-xs uppercase tracking-widest text-primary-500 mb-4">PromptPay</p>
            <h2 className="text-2xl font-black uppercase mb-6">Scan QR Code</h2>

            <div className="w-48 h-48 bg-dark-border/40 rounded-lg flex items-center justify-center mb-6 mx-auto border border-dashed border-dark-border">
              <p className="text-gray-500 text-xs text-center">QR Code<br />Coming Soon</p>
            </div>

            <div className="border-l-4 border-primary-500 pl-4">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">PromptPay Number</p>
              <p className="text-xl font-bold text-white">XXX-XXX-XXXX</p>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="border border-dark-border rounded-lg p-8 bg-surface/30">
            <p className="text-xs uppercase tracking-widest text-primary-500 mb-4">Bank Transfer</p>
            <h2 className="text-2xl font-black uppercase mb-6">Wire Transfer</h2>

            <div className="space-y-5">
              <div className="border-l-4 border-primary-500 pl-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Bank</p>
                <p className="text-lg font-bold text-white">—</p>
              </div>
              <div className="border-l-4 border-dark-border pl-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Account Number</p>
                <p className="text-lg font-bold text-white">—</p>
              </div>
              <div className="border-l-4 border-dark-border pl-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Account Name</p>
                <p className="text-lg font-bold text-white">—</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-8 max-w-xl">
          After transferring, please send your slip to{' '}
          <a href="mailto:initial.formula@gmail.com" className="text-highlight hover:underline">
            initial.formula@gmail.com
          </a>{' '}
          for confirmation.
        </p>
      </section>

      <Footer />
    </>
  );
}
