import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// eslint-disable-next-line react/prop-types
const ProjectDescription = ({ projectDescDocument }) => {
  const projectDesc = documentToHtmlString(projectDescDocument);

  return (
    <section className="section">
      {/* Render the project description as HTML */}
      <div
        className="flex flex-col gap-2"
        dangerouslySetInnerHTML={{ __html: projectDesc }}
      />
    </section>
  );
};

export default ProjectDescription;
