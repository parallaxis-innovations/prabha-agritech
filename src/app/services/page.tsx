import Card from '../../components/Card';

export const metadata = {
    title: 'Services — PRABHA Agritech',
    description: 'Farm design, hydroponics, training, consultancy and allied services.'
};

const services = [
    { title: 'Farm Design & Setup', desc: 'Custom greenhouse and protected cultivation systems.' },
    { title: 'Sustainable Farming Systems', desc: 'Mushrooms, exotic vegetables, leafy greens.' },
    { title: 'Allied Services', desc: 'Honeybee farming, vermicompost, nursery management.' },
    { title: 'Training & Consultancy', desc: 'Curriculum, field training, and business advisory.' },
    { title: 'Farm Management', desc: 'End-to-end operations and market support.' },
];

export default function ServicesPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="mt-3 text-slate-600">Practical services to build resilient, productive farms.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s) => (
                    <Card key={s.title} title={s.title}>{s.desc}</Card>
                ))}
            </div>
        </div>
    );
}
