import ContactForm from '../../components/ContactForm';

export const metadata = {
    title: 'Contact — PRABHA Agritech',
    description: 'Get in touch with PRABHA for projects, training and partnerships.'
};

export default function ContactPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p className="mt-3 text-slate-600">Reach out for enquiries, collaborations or training.</p>

                <div className="mt-6">
                    <h4 className="font-semibold">Our Offices</h4>
                    <p className="text-sm text-slate-600">Ajmer & Bhilwara, Rajasthan</p>
                    <p className="text-sm text-slate-600 mt-2">Phone: +91-XXXXXXXXXX</p>
                </div>

                <div className="mt-6">
                    <h4 className="font-semibold">Map</h4>
                    <div className="mt-2 bg-slate-100 h-48 flex items-center justify-center">Google Map Embed Placeholder</div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Send a Message</h2>
                <div className="mt-4">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
