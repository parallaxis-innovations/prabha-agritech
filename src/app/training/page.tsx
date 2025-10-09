export const metadata = {
    title: 'Training — PRABHA Agritech',
    description: 'Workshops, training programs and success stories for farmers and entrepreneurs.'
};

export default function TrainingPage() {
    const workshops = [
        { title: 'Hydroponics Basics', date: '2025-11-10', mode: 'On-ground' },
        { title: 'Market Linkages for Farmers', date: '2025-12-05', mode: 'Virtual' },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold">Training & Workshops</h1>
            <p className="mt-3 text-slate-600">Upcoming sessions to upskill farmers and youth.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {workshops.map((w) => (
                    <div key={w.title} className="p-4 border rounded">
                        <div className="font-semibold">{w.title}</div>
                        <div className="text-sm text-slate-600">{w.date} • {w.mode}</div>
                        <div className="mt-2">
                            <a href="/contact" className="text-sm text-primary">Enroll Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
