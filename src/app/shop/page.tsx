'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ShirtCard3D } from '@/components/ShirtCard3D';
import { OrderModal } from '@/components/OrderModal';

const products = [
  {
    name: 'KMITL-FS Team Tee',
    desc: 'เสื้อยืด official ของทีม ผ้า Cotton 100%',
    price: '—',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Team Edition',
    frontImage: '/shert_1F.jpg',
    backImage: '/shert_1R.jpg',
  },
];

export default function Shop() {
  const [orderProduct, setOrderProduct] = useState<typeof products[0] | null>(null);

  return (
    <>
      <Navigation />

      <section className="pt-24 pb-12 container-section">
        <p className="text-xs uppercase tracking-widest text-primary-500 mb-4">Merchandise</p>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">Shop</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          สินค้า official จากทีม KMITL Formula Student
        </p>
      </section>

      <section className="container-section py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="border border-dark-border rounded-lg overflow-hidden bg-surface/30 group">

              {/* 3D Shirt viewer */}
              <div className="border-b border-dark-border">
                <ShirtCard3D
                  frontImage={product.frontImage}
                  backImage={product.backImage}
                  alt={product.name}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-black uppercase text-sm tracking-wide">{product.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-primary-500/20 text-primary-400 uppercase tracking-wide shrink-0 ml-2">{product.tag}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{product.desc}</p>

                <div className="flex gap-1.5 mb-5 flex-wrap">
                  {product.sizes.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 border border-dark-border rounded text-gray-400">{s}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-black text-white">{product.price} <span className="text-sm text-gray-400 font-normal">THB</span></p>
                  <button
                    onClick={() => setOrderProduct(product)}
                    className="btn-primary text-xs py-2 px-4"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon placeholder */}
          <div className="border border-dashed border-dark-border rounded-lg h-80 flex items-center justify-center text-gray-600">
            <p className="text-sm uppercase tracking-wide">More Coming Soon</p>
          </div>
        </div>
      </section>

      {orderProduct && (
        <OrderModal
          productName={orderProduct.name}
          sizes={orderProduct.sizes}
          onClose={() => setOrderProduct(null)}
        />
      )}

      <Footer />
    </>
  );
}
