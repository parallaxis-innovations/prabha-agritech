export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="p-6 bg-white shadow-sm rounded-lg border">
            <h3 className="font-semibold mb-2">{title}</h3>
            <div className="text-sm text-slate-600">{children}</div>
        </div>
    );
}
