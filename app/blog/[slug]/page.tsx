import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header Artikel */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold leading-tight mb-4">
          {data.title || slug.replace(/-/g, ' ')}
        </h1>
        
        {data.description && (
          <p className="text-xl text-gray-400">
            {data.description}
          </p>
        )}
      </div>

      {/* Isi Artikel */}
      <article className="prose prose-invert prose-lg max-w-none">
        <div 
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} 
        />
      </article>

      {/* Footer Artikel */}
      <div className="mt-16 pt-8 border-t border-gray-800">
        <p className="text-sm text-gray-500">
          Terima kasih sudah membaca. Semoga bermanfaat!
        </p>
      </div>
    </div>
  );
}