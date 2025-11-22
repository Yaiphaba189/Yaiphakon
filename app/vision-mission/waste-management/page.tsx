import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Waste Management"
                items={[
                    { label: 'Vision & Mission', href: '/vision-mission' },
                    { label: 'Waste Management' }
                ]}
            />
            <div className='container mx-auto px-6 py-24'>
                <h1 className='text-4xl font-bold mb-8 text-gray-900'>Waste Management</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>Sustainable waste management solutions for communities will be detailed here.</p>
                </div>
            </div>
        </>
    );
}
