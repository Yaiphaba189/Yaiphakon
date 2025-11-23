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
            name: 'Konjengbam Romisonhi ',
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
            image: '/Yaiphakon Member Photos/Dr.-Robbart-Nongmaithem.jpg' // No photo yet
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
            image: '/Yaiphakon Member Photos/Prof.-Jotish-Nongthombam.jpg' // No photo yet
        }
    ];

    return (
        <>

            <Breadcrumb
                title="Our Team"
                items={[{ label: 'About Us', href: '/about' }, { label: 'Our Team' }]}
            />

            <div className="container mx-auto px-6 py-12">
                {/* Management Team */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold mb-16 text-center text-primary">
                        Management Team
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {managementTeam.map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="relative w-48 h-48 mb-6">
                                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-primary font-medium">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mentors */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-16 text-center text-primary">
                        Mentors
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mentors.map((mentor, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="relative w-40 h-40 mb-4">
                                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                                        <Image
                                            src={mentor.image}
                                            alt={mentor.name}
                                            fill
                                            className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{mentor.name}</h3>
                                <p className="text-primary font-medium mb-2 text-sm">{mentor.position}</p>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{mentor.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
