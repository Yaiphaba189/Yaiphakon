import { fetchGraphQL } from '@/lib/keystone';
import Breadcrumb from '@/components/Breadcrumb';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import Link from 'next/link';

async function getNews() {
    try {
        const data = await fetchGraphQL(`
      query {
        posts {
          id
          title
          content {
            document
          }
          publishDate
          image {
            url
          }
        }
      }
    `);
        return data.posts;
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return [];
    }
}

export default async function NewsPage() {
    const news = await getNews();

    return (
        <>
            <Breadcrumb
                title="News & Updates"
                items={[
                    { label: 'News & Updates' }
                ]}
            />

            <div className="container mx-auto px-6 py-24">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-12 text-gray-900 text-center">Latest News</h1>
                    {news.length === 0 ? (
                        <p className="text-gray-600 text-center">No news updates available at the moment.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map((item: any) => (
                                <Link
                                    href={`/news/${item.id}`}
                                    key={item.id}
                                    className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                        {item.image?.url ? (
                                            <img
                                                src={item.image.url}
                                                alt={item.title}
                                                className="w-400 h-400 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-400 h-400 flex items-center justify-center text-primary/20">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <span className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3 block">
                                            {new Date(item.publishDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <div className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1 prose prose-sm">
                                            <DocumentRenderer document={item.content.document} />
                                        </div>
                                        <div className="mt-auto pt-4">
                                            <span className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300">
                                                Read more
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
