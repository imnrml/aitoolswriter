import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogPage() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);

  const articles = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        slug: file.replace('.mdx', ''),
        title: data.title || file.replace('.mdx', '').replace(/-/g, ' '),
        description: data.description || 'Klik untuk membaca artikel lengkap.',
      };
    });

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <div className="space-y-5">
        {articles.map(article => (
          <Link 
            key={article.slug} 
            href={`/blog/${article.slug}`}
            className="block border border-gray-800 rounded-2xl p-8 hover:border-blue-500 hover:bg-zinc-900 transition-all"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {article.title}
            </h2>
            <p className="text-gray-400 mb-4">
              {article.description}
            </p>
            <span className="text-blue-400 text-sm">
              Baca artikel →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}