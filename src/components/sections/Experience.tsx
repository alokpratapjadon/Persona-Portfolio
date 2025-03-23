import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = ({
  title,
  companyName,
  date,
  icon,
  iconBg,
  points,
  link,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        cursor: link ? "pointer" : "default", // Change cursor if link exists
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img src={icon} alt={companyName} className="h-[60%] w-[60%] object-contain" />
        </div>
      }
    >
      {/* Clickable Wrapper for Full Card */}
      <div
        className={`p-4 rounded-lg transition-all ${
          link ? "hover:scale-[1.03] hover:shadow-lg" : ""
        }`}
        onClick={() => link && window.open(link, "_blank")}
        onKeyDown={(e) => link && e.key === "Enter" && window.open(link, "_blank")}
        role={link ? "button" : "presentation"}
        tabIndex={link ? 0 : -1}
      >
        <h3 className="text-[24px] font-bold text-white">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {companyName}
        </p>

        <ul className="ml-5 mt-5 list-disc space-y-2">
          {points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-white-100 pl-1 text-[14px] tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
