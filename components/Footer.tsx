export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-zinc-950 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="font-semibold text-white mb-1">AI Tools Writer</p>
            <p>Artikel seputar AI Writing Tools terbaik tahun 2026.</p>
          </div>

          <div className="flex gap-8">
            <div>
              <p className="font-medium text-white mb-2">Explore</p>
              <ul className="space-y-1">
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white mb-2">Legal</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-xs">
          © {new Date().getFullYear()} AI Tools Writer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}