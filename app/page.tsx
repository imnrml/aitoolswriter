import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 pt-12 pb-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Writing Tools<br />untuk Konten yang Lebih Baik
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Review, perbandingan, dan panduan lengkap seputar AI Writing Tools terbaik tahun 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-200 transition"
            >
              Jelajahi Artikel
            </Link>
            <Link 
              href="/blog" 
              className="px-8 py-4 border border-gray-700 rounded-xl font-semibold text-lg hover:bg-zinc-900 transition"
            >
              Lihat Semua Review
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Review Mendalam</h3>
            <p className="text-gray-400">
              Kami menguji dan membandingkan berbagai AI Writing Tools secara objektif.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Update 2026</h3>
            <p className="text-gray-400">
              Informasi terbaru tentang fitur, harga, dan performa tools AI terkini.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Panduan Praktis</h3>
            <p className="text-gray-400">
              Tips dan strategi menggunakan AI untuk menulis konten yang lebih efektif.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}