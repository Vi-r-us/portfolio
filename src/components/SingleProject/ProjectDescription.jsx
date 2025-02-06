/* eslint-disable react/prop-types */
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import ProjectTags from "../Utils/ProjectTags";
import ProjectSlider from "../Utils/ProjectSlider";

// eslint-disable-next-line react/prop-types
const ProjectDescription = ({
  projectDescDocument,
  projectTags,
  projectImages,
}) => {
  const projectDesc = documentToHtmlString(projectDescDocument);
  
  const images = projectImages.map((image) => {
    return {
      id: image.sys.id,
      title: image.fields.title,
      src: image.fields.file.url
    };
  });

  return (
    <section className="section">
      {/* Project Tags */}
      <ProjectTags tags={projectTags} />

      {/* Project Images */}
      <ProjectSlider images={images} />

      {/* Render the project description as HTML */}
      <div
        className="flex flex-col gap-2"
        dangerouslySetInnerHTML={{ __html: projectDesc }}
      />
    </section>
  );
};

export default ProjectDescription;
