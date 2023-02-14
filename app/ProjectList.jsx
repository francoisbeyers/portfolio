import Image from "next/image";
import Link from "next/link";

import resumeCYM from "../public/Resume-cym.jpg";

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full md:p-10">
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`mb-0 pb-0 block ${
              index > 0 ? "border-t border-dark-grey" : ""
            }`}
          >
            <Link
              className="pt-[10px] pb-[40px] flex opacity-[0.25] transition-opacity ease-in-out duration-[350ms] hover:opacity-[1]"
              href="/utility"
            >
              <div className="w-full md:w-[45%] lg:w-[60%]">
                <div className="block font-clash text-[28px] lg:text-[32px] leading-none">
                  <div className="relative overflow-hidden">
                    <div
                      style={{
                        opacity: 1,
                        transform: "translateY(0%) translateZ(0px)",
                      }}
                    >
                      <span className="block">{project.title}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto w-auto hidden lg:flex lg:w-[40%]">
                <div className="w-1/2 mr-auto">
                  <div className="block font-normal text-xl leading-[1.15]">
                    <div className="relative overflow-hidden">
                      <div
                        className="w-1/2 mr-auto"
                        style={{
                          opacity: 1,
                          transform: "translateY(0%) translateZ(0px)",
                        }}
                      >
                        <span className="block">{project.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/2 ml-auto">
                  <div className="mr-auto">
                    <div className="block font-normal text-xl leading-[1.15]">
                      <div className="relative overflow-hidden">
                        <div
                          style={{
                            opacity: 1,
                            transform: "translateY(0%) translateZ(0px)",
                          }}
                        >
                          <span className="block">{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="block font-normal text-xl leading-[1.15]">
                      <div className="relative overflow-hidden">
                        <div
                          style={{
                            opacity: 1,
                            transform: "translateY(0%) translateZ(0px)",
                          }}
                        >
                          <span className="block underline">View Case</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
