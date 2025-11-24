import { fetchGraphQL } from '@/lib/keystone';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

async function getSocialSupport() {
    try {
        const data = await fetchGraphQL(`
      query {
        socialSupports {
          id
          title
          description
          impact
          link
          image {
            url
          }
        }
      }
    `);
        return data.socialSupports;
    } catch (error) {
        console.error('Failed to fetch social support initiatives:', error);
        return [];
    }
}

export default async function SocialSupportPage() {
    const initiatives = await getSocialSupport();

    return (
        <>
            <Breadcrumb
                title="Social Support Initiatives"
                items={[
                    { label: 'Social Support' }
                ]}
            />

            <div className="container mx-auto px-6 py-24">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-12 text-gray-900 text-center">Our Initiatives</h1>
                    {initiatives.length === 0 ? (
                        <p className="text-gray-600 text-center">No social support initiatives found.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {initiatives.map((item: any) => (
                                <Link
                                    href={`/social-support/${item.id}`}
                                    key={item.id}
                                    className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                        {item.image?.url ? (
                                            <img
                                                src={item.image.url}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-primary/20">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        {item.impact && (
                                            <span className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3 block">
                                                {item.impact}
                                            </span>
                                        )}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                                            {item.description}
                                        </p>
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
