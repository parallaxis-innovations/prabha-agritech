import Image from "next/image";
import Link from "next/link";

export default function Envestment() {
    return (
        <section className=" flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
            {/* Header */}
            <p className="text-sunrise-gold text-xs sm:text-sm uppercase tracking-widest mb-3">
                Our Business
            </p>
            <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight">
                    Prabha Business
                </h2>
            </div>
            <div>
                <Link href="/services" className="block w-full md:w-auto" >
                    <Image
                        src="/image/prabha-tree.png"
                        alt="Envestment"
                        width={1200}
                        height={800}
                        className="rounded-xl"
                    />
                </Link>
            </div>
        </section>
    );
}
