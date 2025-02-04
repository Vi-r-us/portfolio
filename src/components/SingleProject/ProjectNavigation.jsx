import { RiArrowLeftLine } from "react-icons/ri";
import NavigationButton from "../Utils/NavigationButton";
import { SiGithub } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";

/**
 * ProjectNavigation component renders navigation buttons for a single project page.
 * It includes a button to go back to the projects list, a button to preview the live site,
 * and a button to view the project's GitHub repository.
 *
 * @param {string} liveSiteUrl - The URL of the live site to preview.
 * @param {string} githubUrl - The URL of the GitHub repository.
 */
// eslint-disable-next-line react/prop-types
const ProjectNavigation = ({ liveSiteUrl, githubUrl }) => {
  return (
    <section className="section desktop:justify-between desktop:flex-row">
      {/* Back to projects button, visible only on desktop */}
      <div className="hidden desktop:block">
        <NavigationButton
          buttonText="Back to projects"
          href="/projects"
          icon={RiArrowLeftLine}
          iconPosition="before"
          className="px-6"
        />
      </div>

      {/* Buttons for previewing the live site and viewing the GitHub repository */}
      <div className="flex flex-col gap-4 desktop:flex-row">
        <NavigationButton
          buttonText="Preview"
          href={liveSiteUrl}
          icon={FaRegEye}
          isBlank={true}
          iconPosition="after"
          className="px-6 desktop:mr-[2px] target:_blank"
        />
        <NavigationButton
          buttonText="Github"
          href={githubUrl}
          icon={SiGithub}
          isBlank={true}
          iconPosition="after"
          className="px-6 bg-purple-600 text-black-400 hover:bg-purple-400 hover:text-black-400 desktop:scale-105"
        />
      </div>
    </section>
  );
};

export default ProjectNavigation;
