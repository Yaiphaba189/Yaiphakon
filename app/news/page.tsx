import { fetchGraphQL } from '@/lib/keystone';
import Breadcrumb from '@/components/Breadcrumb';
import { DocumentRenderer } from '@keystone-6/document-renderer';

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
                <h1 className="text-4xl font-bold mb-12 text-gray-900">News & Updates</h1>
                {news.length === 0 ? (
                    <p className="text-gray-600">No news updates available at the moment.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item: any) => (
                            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    {item.image?.url ? (
                                        <img
                                            src={item.image.url}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-primary font-medium mb-2">
                                        {new Date(item.publishDate).toLocaleDateString()}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                    <div className="text-gray-600 prose prose-sm line-clamp-3 flex-grow overflow-hidden">
                                        <DocumentRenderer document={item.content.document} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
