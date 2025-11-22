import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Food Tech"
                items={[
                    { label: 'Vision & Mission', href: '/vision-mission' },
                    { label: 'Food Tech' }
                ]}
            />
            <div className='container mx-auto px-6 py-24'>
                <h1 className='text-4xl font-bold mb-8 text-gray-900'>Food Tech</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>Food technology and value-added products information will be detailed here.</p>
                </div>
            </div>
        </>
    );
}
