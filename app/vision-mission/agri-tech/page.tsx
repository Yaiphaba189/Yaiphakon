import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Agri Tech"
                items={[
                    { label: 'Vision & Mission', href: '/vision-mission' },
                    { label: 'Agri Tech' }
                ]}
            />
            <div className='container mx-auto px-6 py-24'>
                <h1 className='text-4xl font-bold mb-8 text-gray-900'>Agri Tech</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>Agricultural technology solutions and innovations will be detailed here.</p>
                </div>
            </div>
        </>
    );
}
