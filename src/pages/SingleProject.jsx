import ProjectNavigation from "../components/SingleProject/ProjectNavigation";
import ProjectTitle from "../components/SingleProject/ProjectTitle";
import ContactMe from "../components/Utils/ContactMe";
import Project from "../components/Utils/Project";

const SingleProject = () => {
  return (
    <>
      <ProjectNavigation />
      <ProjectTitle />
      <Project isFeaturedProjects={true} />
      <ContactMe />
    </>
  );
};

export default SingleProject;
