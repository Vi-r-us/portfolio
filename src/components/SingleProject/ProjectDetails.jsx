/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiBuildingsBold, PiStackSimpleBold } from "react-icons/pi";
import { TbStopwatch } from "react-icons/tb";
import { Link } from "react-router-dom";

/**
 * ProjectDetails component displays the duration and stack information of a project.
 *
 * @param {Object} props - The component props.
 * @param {string} props.duration - The duration of the project.
 * @param {Array} props.stacks - The stack information of the project.
 * @returns {JSX.Element} The rendered component.
 */
// eslint-disable-next-line react/prop-types
const ProjectDetails = ({ duration, stacks }) => {
  /* Display only the first 6 stacks if there are more than 6 */
  const stacksToDisplay = stacks.length > 6 ? stacks.slice(0, 6) : stacks;

  return (
    <section className="hidden tablet:flex flex-col desktop:flex-row gap-6 text-[14px] leading-5 desktop:text-[16px] desktop:leading-[22px]">
      {/* Duration Section */}
      <div className="section flex-row items-center gap-2 flex-1">
        <TbStopwatch className="text-purple-600 w-[18px] h-[18px]" />
        <p className="font-light text-white-400">Duration:</p>
        <span className="ml-2">{duration}</span>
      </div>

      {/* Stack Section */}
      <div className="section flex-row items-center gap-2 flex-1">
        <PiStackSimpleBold className="text-purple-600 w-4 h-4" />
        <p className="font-light text-white-400">Stack:</p>

        <div className="flex gap-[0px] ml-2">
          {stacksToDisplay.map((stack) => {
            const id = stack.sys.id;
            const { website, title } = stack.fields;
            const icon = stack.fields.icon.fields.file.url;
            return (
              <Link
                to={website}
                key={id}
                className={`flex items-center bg-[#292929] rounded-full p-[10px] overflow-hidden card-animation relative`}
              >
                <img
                  decoding="async"
                  className="w-[24px]"
                  sizes="max(min(100vw - 48px, 800px) - 48px, 200px)"
                  src={icon}
                  alt={title}
                ></img>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
