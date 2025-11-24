import { fetchGraphQL } from '@/lib/keystone';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { MapPin, Clock, Calendar } from 'lucide-react';

async function getJob(id: string) {
    try {
        const data = await fetchGraphQL(`
      query {
        job(where: { id: "${id}" }) {
          id
          title
          description {
            document
          }
          location
          type
          department
          postedDate
        }
      }
    `);
        return data.job;
    } catch (error) {
        console.error('Failed to fetch job:', error);
        return null;
    }
}

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const job = await getJob(id);

    if (!job) {
        notFound();
    }

    return (
        <>
            <Breadcrumb
                title={job.title}
                items={[
                    { label: 'Careers', href: '/careers' },
                    { label: 'Job Openings', href: '/careers/openings' },
                    { label: job.title }
                ]}
            />

            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{job.title}</h1>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-bold">
                                <MapPin size={16} />
                                {job.location}
                            </div>
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm font-bold">
                                <Clock size={16} />
                                <span className="capitalize">{job.type.replace('_', ' ')}</span>
                            </div>
                            {job.department && (
                                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm font-bold">
                                    {job.department}
                                </div>
                            )}
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm font-bold">
                                <Calendar size={16} />
                                Posted {new Date(job.postedDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
                        <DocumentRenderer document={job.description.document} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                        <a
                            href={`mailto:careers@company.com?subject=Application for ${job.title}`}
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                        >
                            Apply Now
                        </a>
                        <Link
                            href="/careers/openings"
                            className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6" /></svg>
                            Back to Openings
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
