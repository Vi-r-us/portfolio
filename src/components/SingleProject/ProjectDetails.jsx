/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PiBuildingsBold, PiStackSimpleBold } from "react-icons/pi";
import { TbStopwatch } from "react-icons/tb";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectDetails = ({ duration, stacks }) => {
  console.log(stacks);

  return (
    <section className="hidden tablet:flex flex-col desktop:flex-row gap-6 text-[14px] leading-5 desktop:text-[16px] desktop:leading-[22px]">
      {/* <div className="section flex-row items-center gap-2">
        <PiBuildingsBold className="text-purple-600 w-4 h-4" />
        <p className="font-light text-white-400">Client:</p>
        <span>Some Client</span>
      </div> */}

      <div className="section flex-row items-center gap-2 flex-1">
        <TbStopwatch className="text-purple-600 w-[18px] h-[18px]" />
        <p className="font-light text-white-400">Duration:</p>
        <span>{duration}</span>
      </div>

      <div className="section flex-row items-center gap-2 flex-1">
        <PiStackSimpleBold className="text-purple-600 w-4 h-4" />
        <p className="font-light text-white-400">Stack:</p>
        <div className="flex gap-2">
          {stacks.map((stack) => {
            const id = stack.sys.id;
            const { website, title } = stack.fields;
            const icon = stack.fields.icon.fields.file.url;
            return (
              <Link to={website} key={id}>
                <img
                  decoding="async"
                  className="w-[32px]"
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
