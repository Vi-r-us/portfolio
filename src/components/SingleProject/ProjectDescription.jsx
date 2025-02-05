import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import ProjectTags from "../Utils/ProjectTags";

// eslint-disable-next-line react/prop-types
const ProjectDescription = ({ projectDescDocument, projectTags }) => {
  const projectDesc = documentToHtmlString(projectDescDocument);

  return (
    <section className="section">
      {/* Project Tags */}
      <ProjectTags tags={projectTags} />

      {/* Render the project description as HTML */}
      <div
        className="flex flex-col gap-2"
        dangerouslySetInnerHTML={{ __html: projectDesc }}
      />
    </section>
  );
};

export default ProjectDescription;
