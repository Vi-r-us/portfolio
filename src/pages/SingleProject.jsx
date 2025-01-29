import ProjectNavigation from "../components/SingleProject/ProjectNavigation";
import ContactMe from "../components/Utils/ContactMe";
import Project from "../components/Utils/Project";

const SingleProject = () => {
  return (
    <>
      <ProjectNavigation />
      <Project isFeaturedProjects={true} />
      <ContactMe />
    </>
  );
};

export default SingleProject;
