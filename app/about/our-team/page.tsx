import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';

export default function OurTeamPage() {
    const managementTeam = [
        {
            name: 'Surbala Yurembam',
            position: 'Managing Director',
            image: '/Yaiphakon Member Photos/Surbala-Yurembam.jpg'
        },
        {
            name: 'Konjengbam Romison Singh',
            position: 'Director',
            image: '/Yaiphakon Member Photos/Konjengbam-Romison-Singh.jpg'
        },
        {
            name: 'Dr. Nongmaithem Leindah',
            position: 'Soil Scientist and Project Director',
            image: '/Yaiphakon Member Photos/Dr.-Nongmaithem-Leindah.jpg'
        },
        {
            name: 'Dr. Robbart Nongmaithem',
            position: 'Food Engineering',
            image: '/Yaiphakon Member Photos/placeholder.jpg' // No photo yet
        },
        {
            name: 'Dayandhi Huidrom',
            position: 'Scientific Advisor and Product Developer',
            image: '/Yaiphakon Member Photos/Dayandhi-Huidrom.png'
        }
    ];

    const mentors = [
        {
            name: 'Prof. Nongmaithem Rajmuhon Singh',
            position: 'Biochemist and Product Analyst',
            description: 'Former Vice Chancellor, DM University',
            image: '/Yaiphakon Member Photos/Prof.-Nongmaithem-Rajmuhon-Singh.jpg'
        },
        {
            name: 'Prof. Ch. Ibohal Singh',
            position: 'Director',
            description: 'Manipur Institute of Management Studies, Imphal',
            image: '/Yaiphakon Member Photos/Prof.Ch.-Ibohal-Singh.jpg'
        },
        {
            name: 'Prof. Thanjam Robert Singh',
            position: 'Biotechnology',
            description: 'Associate Professor in Biology and Life Science Department at Manipur University',
            image: '/Yaiphakon Member Photos/Prof.-Thanjam-Robert-Singh.jpg'
        },
        {
            name: 'Prof. Jotish Nongthombam',
            position: 'Agri Engineering',
            description: 'Mizoram University',
            image: '/Yaiphakon Member Photos/placeholder.jpg' // No photo yet
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-primary to-secondary py-24 mb-12">
                <div className="container mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Meet the passionate people behind Yaiphakon – our leadership, experts, and mentors driving sustainable agriculture and innovation.
                    </p>
                </div>
            </section>

            <Breadcrumb
                title="Our Team"
                items={[{ label: 'About Us', href: '/about' }, { label: 'Our Team' }]}
            />

            <div className="container mx-auto px-6 py-12">
                {/* Management Team */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center text-primary">Management Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {managementTeam.map((member, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                                <div className="h-64 bg-gray-100 flex items-center justify-center">
                                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
                                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mentors */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center text-primary">Mentors</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {mentors.map((mentor, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col md:flex-row items-center p-6">
                                    <div className="w-48 h-48 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary">
                                            <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                                        <p className="text-primary font-semibold mb-2">{mentor.position}</p>
                                        <p className="text-gray-600">{mentor.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
