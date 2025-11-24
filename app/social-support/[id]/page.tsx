import { fetchGraphQL } from '@/lib/keystone';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getSocialSupport(id: string) {
    try {
        const data = await fetchGraphQL(`
      query {
        socialSupport(where: { id: "${id}" }) {
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
        return data.socialSupport;
    } catch (error) {
        console.error('Failed to fetch social support initiative:', error);
        return null;
    }
}

export default async function SocialSupportDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const initiative = await getSocialSupport(id);

    if (!initiative) {
        notFound();
    }

    return (
        <>
            <Breadcrumb
                title={initiative.title}
                items={[
                    { label: 'Social Support', href: '/social-support' },
                    { label: initiative.title }
                ]}
            />

            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    {initiative.image?.url && (
                        <div className="w-full h-[400px] md:h-[00px] relative overflow-hidden mb-10">
                            <img
                                src={initiative.image.url}
                                alt={initiative.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="mb-8">
                        {initiative.impact && (
                            <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-bold tracking-wide uppercase mb-4">
                                {initiative.impact}
                            </div>
                        )}
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{initiative.title}</h1>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
                        <p className="whitespace-pre-wrap">{initiative.description}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                        {initiative.link && (
                            <a
                                href={initiative.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                            >
                                Visit Website
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                            </a>
                        )}
                        <Link
                            href="/social-support"
                            className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6" /></svg>
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
