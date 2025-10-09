export default function Stats({ items }: { items: { label: string; value: string }[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((it) => (
                <div key={it.label} className="p-4 bg-accent rounded-lg text-center">
                    <div className="text-2xl font-bold">{it.value}</div>
                    <div className="text-sm text-slate-600">{it.label}</div>
                </div>
            ))}
        </div>
    );
}
