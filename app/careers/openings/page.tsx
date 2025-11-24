import Breadcrumb from '@/components/Breadcrumb';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { fetchGraphQL } from '@/lib/keystone';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import Link from 'next/link';

async function getJobs() {
    try {
        const data = await fetchGraphQL(`
      query {
        jobs {
          id
          title
          description {
            document
          }
          location
          type
          postedDate
        }
      }
    `);
        return data.jobs;
    } catch (error) {
        console.error('Failed to fetch jobs:', error);
        return [];
    }
}

export default async function JobOpeningsPage() {
    const jobs = await getJobs();

    return (
        <>
            <Breadcrumb
                title="Job Openings"
                items={[
                    { label: 'Careers', href: '/careers' },
                    { label: 'Job Openings' }
                ]}
            />

            <div className='container mx-auto px-6 py-24'>
                {jobs.length === 0 ? (
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="w-20 h-20 mx-auto mb-6 text-gray-300">
                            <Briefcase size={80} strokeWidth={1.5} />
                        </div>
                        <h1 className='text-3xl font-bold mb-4 text-gray-900'>No Job Openings Available</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            We currently don't have any open positions. Please check back later or submit your profile to our talent database for future opportunities.
                        </p>
                        <a
                            href="/careers"
                            className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Back to Careers
                        </a>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job: any) => (
                            <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span className="capitalize">{job.type.replace('_', ' ')}</span>
                                    </div>
                                </div>
                                <div className="prose prose-sm text-gray-600 mb-4 flex-grow overflow-hidden relative max-h-24">
                                    <DocumentRenderer document={job.description.document} />
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                                </div>
                                <Link
                                    href={`/careers/openings/${job.id}`}
                                    className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors mt-auto text-center"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
