import { RiArrowLeftLine } from "react-icons/ri";
import NavigationButton from "../Utils/NavigationButton";
import { SiGithub } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ProjectNavigation = ({ liveSiteUrl, githubUrl }) => {
  return (
    <section className="section desktop:justify-between desktop:flex-row">
      <div className="hidden desktop:block">
        <NavigationButton
          buttonText="Back to projects"
          href="/projects"
          icon={RiArrowLeftLine}
          iconPosition="before"
          className="px-6"
        />
      </div>

      <div className="flex flex-col gap-4 desktop:flex-row ">
        <NavigationButton
          buttonText="Preview"
          href={liveSiteUrl}
          icon={FaRegEye}
          iconPosition="after"
          className="px-6 desktop:mr-[2px]"
        />
        <NavigationButton
          buttonText="Github"
          href={githubUrl}
          icon={SiGithub}
          iconPosition="after"
          className="px-6 bg-purple-600 text-black-600 hover:bg-purple-400 hover:text-black-600 desktop:scale-105"
        />
      </div>
    </section>
  );
};

export default ProjectNavigation;
