'use client';

import { useState } from 'react';

interface OrderModalProps {
  productName: string;
  sizes: string[];
  onClose: () => void;
}

export function OrderModal({ productName, sizes, onClose }: OrderModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    size: sizes[0] ?? 'M',
    quantity: '1',
    address: '',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: productName, ...form, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full max-w-lg bg-surface border border-dark-border rounded-xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-dark-border">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-500 mb-0.5">Merchandise Order</p>
            <h2 className="font-black uppercase text-sm">{productName}</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-xl leading-none">✕</button>
        </div>

        {status === 'success' ? (
          <div className="p-10 text-center">
            <p className="text-4xl mb-4">✓</p>
            <h3 className="font-black uppercase text-lg mb-2">Order Received!</h3>
            <p className="text-gray-400 text-sm">ทีมงานจะติดต่อกลับหาคุณเร็วๆ นี้ครับ</p>
            <button onClick={onClose} className="btn-primary mt-6 text-xs py-2 px-6">ปิด</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">ชื่อ-นามสกุล *</label>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  className="w-full bg-secondary border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500"
                  placeholder="กรอกชื่อ-นามสกุล"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">เบอร์โทร *</label>
                <input
                  name="phone" value={form.phone} onChange={handleChange} required type="tel"
                  className="w-full bg-secondary border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500"
                  placeholder="0812345678"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">Email *</label>
                <input
                  name="email" value={form.email} onChange={handleChange} required type="email"
                  className="w-full bg-secondary border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">ไซส์ *</label>
                <select
                  name="size" value={form.size} onChange={handleChange}
                  className="w-full bg-secondary border border-dark-border rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500"
                >
                  {sizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">จำนวน *</label>
                <input
                  name="quantity" value={form.quantity} onChange={handleChange} required type="number" min="1" max="10"
                  className="w-full bg-secondary border border-dark-border rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">ที่อยู่จัดส่ง *</label>
                <textarea
                  name="address" value={form.address} onChange={handleChange} required rows={3}
                  className="w-full bg-secondary border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 resize-none"
                  placeholder="บ้านเลขที่ ถนน ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-xs uppercase tracking-wide text-gray-400 mb-1">หมายเหตุ</label>
                <input
                  name="notes" value={form.notes} onChange={handleChange}
                  className="w-full bg-secondary border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500"
                  placeholder="ข้อมูลเพิ่มเติม (ถ้ามี)"
                />
              </div>
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-xs">เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</p>
            )}

            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose} className="flex-1 py-2 text-sm border border-dark-border rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
                ยกเลิก
              </button>
              <button type="submit" disabled={status === 'sending'} className="flex-1 btn-primary py-2 text-sm">
                {status === 'sending' ? 'กำลังส่ง...' : 'ยืนยันคำสั่งซื้อ'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
