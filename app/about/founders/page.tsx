import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Founders Profile"
                items={[
                    { label: 'About Us', href: '/about' },
                    { label: 'Founders Profile' }
                ]}
            />
            <div className='container mx-auto px-6 py-24'>
                <h1 className='text-4xl font-bold mb-8 text-gray-900'>Founders Profile</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>Founders profile content will be added here.</p>
                </div>
            </div>
        </>
    );
}
