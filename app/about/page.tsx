export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tentang AI Tools Writer</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Kami membantu kamu memilih AI Writing Tools terbaik melalui review, 
          perbandingan, dan panduan yang jujur serta up-to-date.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
          <p className="text-gray-400 leading-relaxed">
            Memberikan informasi yang akurat dan tidak bias tentang berbagai AI Writing Tools 
            agar kamu bisa membuat keputusan yang tepat sesuai kebutuhanmu.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Apa yang Kami Lakukan</h2>
          <ul className="text-gray-400 space-y-2">
            <li>• Review mendalam berbagai AI Writing Tools</li>
            <li>• Perbandingan fitur, harga, dan performa</li>
            <li>• Panduan praktis menggunakan AI untuk menulis</li>
            <li>• Update informasi terbaru tahun 2026</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ingin Berkontribusi?</h2>
        <p className="text-gray-400 mb-6">
          Kami selalu terbuka untuk masukan dan saran. 
          Jika kamu punya pengalaman dengan AI Writing Tools tertentu, 
          silakan hubungi kami.
        </p>
        <a 
          href="/blog" 
          className="inline-block px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Jelajahi Artikel Kami
        </a>
      </div>
    </div>
  );
}