import ContactForm from '../../components/ContactForm';

export const metadata = {
    title: 'Contact - PRABHA Agritech',
    description: 'Get in touch with PRABHA for projects, training and partnerships.'
};

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <div className="bg-earth-green flex items-center justify-center h-96 md:h-[28rem] px-6">
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl text-white font-bold  mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-base md:text-lg text-white leading-relaxed">
                        Have questions or want to collaborate? We're here to help you with your agricultural technology needs.
                    </p>
                </div>
            </div>


            <div className="bg-gradient-to-br from-earth-green/5 via-white to-sunrise-gold/5 px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Contact Form Section */}
                        <div className="lg:col-span-6">
                            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-earth-green/10 hover:shadow-earth-green/10 transition-shadow">
                                <h2 className="text-2xl font-bold text-earth-green mb-6">Send us a Message</h2>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info and Map Section */}
                        <div className="lg:col-span-6 space-y-8">
                            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-earth-green/10">
                                <h2 className="text-2xl font-bold text-earth-green mb-6">Contact Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Contact details */}
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-earth-green/10 rounded-lg">
                                                <svg className="w-6 h-6 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-dark">Our Locations</h3>
                                                <p className="text-slate-600 mt-1">Ajmer & Bhilwara, Rajasthan</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-earth-green/10 rounded-lg">
                                                <svg className="w-6 h-6 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-dark">Phone</h3>
                                                <p className="text-slate-600 mt-1">+91-9079954131</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-earth-green/10 rounded-lg">
                                                <svg className="w-6 h-6 text-earth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-dark">Email</h3>
                                                <p className="text-slate-600 mt-1">bharatswarnkar@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Section */}
                            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-earth-green/10">
                                <h2 className="text-2xl font-bold text-earth-green mb-6">Find Us</h2>
                                <div className="aspect-video w-full rounded-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228778.61645498377!2d74.45081754326167!3d26.44999033930712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6d8fcb7cd01%3A0xcbaf8f12eb8100ee!2sAjmer%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1637309150601!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}