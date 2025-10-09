import Stats from '../../components/Stats';

export const metadata = {
    title: 'Impact — PRABHA Agritech',
    description: 'Our environmental and socio-economic impact across projects and programs.'
};

export default function ImpactPage() {
    const stats = [
        { label: 'Income Increase', value: '38%' },
        { label: 'Water Saved', value: '45%' },
        { label: 'Farmers Reached', value: '1,200+' },
        { label: 'CO₂ Reduced', value: '2,400 kg' },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold">Impact</h1>
            <p className="mt-3 text-slate-600">Data-driven results that show economic and environmental benefits.</p>

            <div className="mt-6">
                <Stats items={stats} />
            </div>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Community Stories</h2>
                <p className="mt-3 text-slate-600">Stories of resilience, women-led enterprises, and climate adaptation.</p>
            </section>
        </div>
    );
}
