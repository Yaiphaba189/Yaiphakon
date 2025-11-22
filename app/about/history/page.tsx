import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
    return (
        <>
            <Breadcrumb
                title="History"
                items={[
                    { label: 'About Us', href: '/about' },
                    { label: 'History' }
                ]}
            />
            <div className='container mx-auto px-6 py-24'>
                <h1 className='text-4xl font-bold'>Page Under Construction</h1>
            </div>
        </>
    );
}
