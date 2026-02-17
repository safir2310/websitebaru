'use client';

import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h1 className="text-xl font-bold">Ayam Geprekku</h1>
            </div>
            <nav className="flex gap-6 items-center">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Locations
              </a>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Order Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🎉 Best Fried Chicken in Town
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Sambal Geprek yang{' '}
                <span className="text-primary">Pedas Mantap!</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Nikmati sensasi ayam geprek dengan sambal bawang otentik yang bikin
                nagih. Tersedia berbagai level kepedasan sesuai selera Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105">
                  Pesan Sekarang
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all">
                  Lihat Menu
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">5K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold">4.9</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Menu Variants</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🍗</div>
                  <div className="text-2xl font-bold mb-2">Ayam Geprek Special</div>
                  <div className="text-muted-foreground">Sambal Bawang Level 5</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <div>
                    <div className="font-semibold">Level 1-10</div>
                    <div className="text-sm text-muted-foreground">Choose your spice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Kenapa Pilih Kami?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami berkomitmen memberikan pengalaman makan terbaik dengan
                kualitas dan rasa yang tidak bisa ditandingi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Rasa Otentik</h4>
                <p className="text-muted-foreground text-sm">
                  Resep sambal bawang warisan keluarga dengan rasa yang otentik
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Cepat & Fresh</h4>
                <p className="text-muted-foreground text-sm">
                  Ayam digoreng segar saat order, dijamin selalu hangat
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Harga Terjangkau</h4>
                <p className="text-muted-foreground text-sm">
                  Harga bersahabat dengan porsi yang mengenyangkan
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Delivery Cepat</h4>
                <p className="text-muted-foreground text-sm">
                  Pesanan diantar cepat ke lokasi Anda
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Menu Populer</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilihan menu favorit pelanggan kami
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 flex items-center justify-center">
                  <span className="text-7xl">🍗</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">Geprek Original</h4>
                    <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                      Rp 15.000
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ayam geprek dengan sambal bawang level 1-5
                  </p>
                  <button className="w-full bg-primary/10 text-primary py-2 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 flex items-center justify-center">
                  <span className="text-7xl">🌶️</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">Geprek Pedas</h4>
                    <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                      Rp 17.000
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Extra sambal dengan level kepedasan 6-10
                  </p>
                  <button className="w-full bg-primary/10 text-primary py-2 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 flex items-center justify-center">
                  <span className="text-7xl">🧀</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">Geprek Keju</h4>
                    <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                      Rp 18.000
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Topping keju mozzarella melimpah
                  </p>
                  <button className="w-full bg-primary/10 text-primary py-2 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Dapatkan Promo Terbaru!</h3>
              <p className="text-primary-foreground/80 mb-8">
                Daftar newsletter kami untuk mendapatkan info promo dan menu baru
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                />
                <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h4 className="font-bold text-lg">Ayam Geprekku</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Ayam geprek terenak di kota dengan sambal bawang otentik
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📍 Jl. Fried Chicken No. 123</li>
                <li>📞 +62 812 3456 7890</li>
                <li>✉️ hello@ayamgeprekku.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mon - Fri: 10:00 - 22:00</li>
                <li>Saturday: 10:00 - 23:00</li>
                <li>Sunday: 11:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Ayam Geprekku. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
