import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import ProjectNavigation from "../components/SingleProject/ProjectNavigation";
import ProjectTitle from "../components/SingleProject/ProjectTitle";
import ContactMe from "../components/Utils/ContactMe";
import Project from "../components/Utils/Project";
import ProjectDescription from "../components/SingleProject/ProjectDescription";

const SingleProject = () => {
  const { portfolio } = useGlobalContext();
  const params = useParams();

  const project = portfolio.projects.filter(
    (project) =>
      project.fields.title.split(" ").join("-").toLowerCase() ===
      params.projectId
  )[0];

  const {
    projectImages,
    githubUrl,
    liveUrl,
    title,
    tags,
    projectDescription: projectDescDocument,
  } = project.fields;
  

  return (
    <>
      <ProjectNavigation githubUrl={githubUrl} liveSiteUrl={liveUrl} />
      <ProjectTitle title={title} />
      <ProjectDescription
        projectDescDocument={projectDescDocument}
        projectTags={tags}
        projectImages={projectImages}
      />
      <Project isFeaturedProjects={true} />
      <ContactMe />
    </>
  );
};

export default SingleProject;
