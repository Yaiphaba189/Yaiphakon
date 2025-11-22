import { fetchGraphQL } from '@/lib/keystone';
import Breadcrumb from '@/components/Breadcrumb';

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
                <h1 className="text-4xl font-bold mb-12 text-gray-900">Social Support Initiatives</h1>
                {initiatives.length === 0 ? (
                    <p className="text-gray-600">No social support initiatives found.</p>
                ) : (
                    <div className="grid gap-8">
                        {initiatives.map((item: any) => (
                            <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-lg">{item.description}</p>
                                    {item.link && (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block">
                                            Learn More
                                        </a>
                                    )}
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    {item.image?.url && (
                                        <div className="w-32 h-32 relative rounded-lg overflow-hidden">
                                            <img
                                                src={item.image.url}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    {item.impact && (
                                        <div className="bg-primary/10 px-6 py-3 rounded-full text-primary font-bold whitespace-nowrap">
                                            {item.impact}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
