import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Farm Mechanisation"
                items={[
                    { label: 'Vision & Mission', href: '/vision-mission' },
                    { label: 'Farm Mechanisation' }
                ]}
            />
            <div className='container mx-auto px-6 py-24'>
                <h1 className='text-4xl font-bold mb-8 text-gray-900'>Farm Mechanisation</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>Farm mechanization solutions for hill and valley regions will be detailed here.</p>
                </div>
            </div>
        </>
    );
}
