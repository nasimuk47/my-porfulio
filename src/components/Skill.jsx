import React from "react";
import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
    SiExpress,
    SiMongodb,
    SiNetlify,
    SiTailwindcss,
    SiVercel,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

const Skill = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h1 className="text-3xl font-bold text-blue-500 text-center mt-8">
                Technical Skills
            </h1>
            <div className="divider divider-info w-[220px] mx-auto"></div>

            <div className="lg:w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-2 border pt-2 pb-2 rounded-lg transition duration-300 hover:bg-gray-300">
                        <div>{skill.icon}</div>
                        <h1 className="text-lg sm:text-xl font-bold">
                            {skill.name}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

const skills = [
    {
        icon: <IoLogoJavascript className="text-yellow-500 text-xl" />,
        name: "Javascript",
    },
    { icon: <FaReact className="text-blue-500 text-xl" />, name: "React" },
    {
        icon: <SiTailwindcss className="text-blue-300 text-xl" />,
        name: "Tailwind CSS",
    },
    { icon: <FaHtml5 className="text-yellow-500 text-xl" />, name: "HTML" },
    { icon: <FaCss3 className="text-blue-500 text-xl" />, name: "CSS" },
    { icon: <SiMongodb className="text-green-500 text-xl" />, name: "MongoDB" },
    { icon: <SiExpress className="text-black text-xl" />, name: "Express.js" },
    {
        icon: <DiNodejs className="text-blue-300 text-3xl font-bold" />,
        name: "Node.js",
    },
    {
        icon: <IoLogoFirebase className="text-yellow-500 text-xl" />,
        name: "Firebase",
    },
    { icon: <SiVercel className="text-black text-xl" />, name: "Vercel" },
    { icon: <SiNetlify className="text-blue-300 text-xl" />, name: "Netlify" },
    { icon: <FaGithub className="text-xl" />, name: "GitHub" },
    // Add more skills as needed
];

export default Skill;
