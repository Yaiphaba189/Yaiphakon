import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Company Philosophy"
                items={[
                    { label: 'About Us', href: '/about' },
                    { label: 'Company Philosophy' }
                ]}
            />
            <div className='container mx-auto px-6 py-24'>
                <h1 className='text-4xl font-bold mb-8 text-gray-900'>Company Philosophy</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>Our philosophy content will be added here.</p>
                </div>
            </div>
        </>
    );
}
