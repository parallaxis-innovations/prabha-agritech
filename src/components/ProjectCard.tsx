import { Project } from '@/data/projects';
import { MapPin } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 py-12 ${
      index % 2 === 0 ? '' : 'md:flex-row-reverse'
    }`}>
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <MapPin className="w-5 h-5" />
          <h3 className="text-xl font-semibold">
            {project.location}, {project.state}
          </h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium mb-2">Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {project.focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Highlights</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          {project.description.map((desc) => (
            <p key={desc} className="text-gray-600">
              {desc}
            </p>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-gray-100 rounded-lg min-h-[300px]">
        {/* Image placeholder - to be added later */}
      </div>
    </div>
  );
}
