/* eslint-disable react/prop-types */

const ProjectTags = ({ tags }) => {
  return (
    <ul className="flex flex-row gap-2 flex-wrap">
      {tags.map((tag, index) => (
        // Render each tag
        <li
          className=" text-center rounded-lg px-2 py-1 bg-black-200 
        text-xs font-light leading-[14.4px] capitalize text-purple-600
        flex flex-row text-nowrap"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default ProjectTags;
