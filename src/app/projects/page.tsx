import Card from '../../components/Card';

export const metadata = {
    title: 'Projects — PRABHA Agritech',
    description: 'Completed projects and case studies showcasing our work.'
};

const projects = [
    { title: 'Keisha Greens', location: 'Bhilwara', crops: 'Leafy greens', area: '600 m²' },
    { title: 'Urban Sprouts', location: 'Ajmer', crops: 'Microgreens & herbs', area: '120 m²' },
];

export default function ProjectsPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-3 text-slate-600">A selection of completed projects with measurable impact.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <Card key={p.title} title={p.title}>
                        <div className="text-sm">{p.location} • {p.crops} • {p.area}</div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
