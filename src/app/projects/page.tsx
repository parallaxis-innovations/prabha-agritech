import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
    title: 'Current Projects — PRABHA Agritech',
    description: 'Our journey across regions — building sustainable, tech-driven farms and communities.'
};

export default function ProjectsPage() {
    return (
        <main>
            <div className="relative">
                {/* Hero section with background image */}
                <div 
                    className="h-[60vh] min-h-[500px] w-full bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: 'url("/image/background/farmer.jpg")'
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Current Projects (2025)
                            </h1>
                            <p className="text-xl text-gray-100 mb-8">
                                Our journey across regions — building sustainable, tech-driven farms and
                                communities.
                            </p>
                            <p className="text-lg text-white italic">
                                &ldquo;Building India&apos;s next-generation farms — where innovation meets soil, and
                                every project grows purpose with prosperity.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="space-y-8 md:space-y-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Add a map visualization section here later */}
                <div className="mt-16 p-8 bg-gray-50 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Our Project Locations
                    </h2>
                    <div className="h-[400px] bg-gray-200 rounded-lg">
                        {/* Map component to be added later */}
                    </div>
                </div>
            </div>
        </main>
    );
}
