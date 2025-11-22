import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Company Profile"
                items={[
                    { label: 'About Us', href: '/about' },
                    { label: 'Company' }
                ]}
            />

            <div className="container mx-auto px-6 py-24">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Company Profile</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                        Yaiphakon is a Manipur-based agri, bio, and food tech organisation committed to transforming local farming practices with modern, eco-friendly solutions.
                    </p>
                    <p>
                        Driving sustainable agriculture and rural development in Manipur through innovation and technology. We work to uplift farmers, improve productivity, and protect the natural ecosystem of the region.
                    </p>
                </div>
            </div>
        </>
    );
}
