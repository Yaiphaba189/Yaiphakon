import { fetchGraphQL } from '@/lib/keystone';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocumentRenderer } from '@keystone-6/document-renderer';

async function getPost(id: string) {
    try {
        const data = await fetchGraphQL(`
      query {
        post(where: { id: "${id}" }) {
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
        return data.post;
    } catch (error) {
        console.error('Failed to fetch post:', error);
        return null;
    }
}

export default async function NewsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Breadcrumb
                title={post.title}
                items={[
                    { label: 'News & Updates', href: '/news' },
                    { label: post.title }
                ]}
            />

            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    {post.image?.url && (
                        <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden mb-10">
                            <img
                                src={post.image.url}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="mb-8">
                        <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-bold tracking-wide uppercase mb-4">
                            {new Date(post.publishDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{post.title}</h1>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
                        <DocumentRenderer document={post.content.document} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                        <Link
                            href="/news"
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
