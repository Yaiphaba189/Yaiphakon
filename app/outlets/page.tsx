import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Outlets"
                items={[
                    { label: 'Outlets' }
                ]}
            />
            <div className='container mx-auto px-6 py-24'>
                <h1 className='text-4xl font-bold mb-8 text-gray-900'>Our Outlets</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>Find Yaiphakon products and services at our outlets across Manipur.</p>
                    <p>Outlet locations and contact information will be listed here.</p>
                </div>
            </div>
        </>
    );
}
