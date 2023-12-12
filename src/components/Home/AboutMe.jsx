/* eslint-disable react/no-unescaped-entities */
import { LuContact } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import Services from "./Services";

const AboutMe = () => {
    // Add the shareable link to your Google Drive PDF file
    const resumePdfUrl =
        "https://drive.google.com/file/d/1aJEciCkCdgzWxC9JcYcU72eLaF1eU2Ec/view?usp=sharing";

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = resumePdfUrl;
        link.target = "_blank";
        link.download = "Nasim_Khan_Resume.pdf";
        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-5xl text-blue-500 font-bold mt-10">
                    About Me.
                </h1>
                <h1 className="text-5xl text-black font-bold mt-5">
                    <LuContact className="text-blue-500" />
                </h1>
            </div>
            <div className="divider"></div>

            <div className="lg:flex">
                <div className="lg:w-[60%] sm:w-full">
                    <h1 className="text-3xl font-bold">
                        UI/UX Designer & Developer
                    </h1>

                    <p className="mt-3 text-xl font-semibold text-gray-700">
                        Hi, I'm Nasim, a passionate UI/UX Designer & Developer.
                        My journey in the digital realm revolves around creating
                        exceptional user experiences that seamlessly blend form
                        and function. With a unique blend of creativity and
                        technical expertise, I specialize in crafting
                        user-centric solutions. <br />
                        My goal is to design intuitive and visually appealing
                        interfaces that not only meet but exceed user
                        expectations, ultimately elevating the overall digital
                        experience. I thrive on the challenge of turning
                        abstract ideas into engaging digital realities. Whether
                        it's designing an interactive website or developing a
                        user-friendly application, I bring a holistic approach
                        to every project. Let's collaborate and bring your
                        digital vision to life!
                    </p>
                </div>

                <div className="lg:w-[40%] sm:w-full space-y-2 mt-6 lg:ml-10 sm:ml-0">
                    <p className="text-2xl font-bold">Personal Information</p>
                    <h1 className="text-xl font-semibold">Name : Nasim Khan</h1>
                    <h1 className="text-xl font-semibold">Age : 16 Years</h1>
                    <h1 className="text-xl font-semibold">
                        Education level : Secondary
                    </h1>
                    <h1 className="text-xl font-semibold">
                        Institution Name : Mymensingh polytechnic institutes
                    </h1>
                    <h1 className="text-xl font-semibold">
                        Residence : Netrokona, Bangladesh
                    </h1>
                    <h1 className="text-xl font-semibold">
                        Address : 2410 purbadhala, Netrokona
                    </h1>
                    <h1 className="text-xl font-semibold">
                        Email : nasim.uk47@gmail.com
                    </h1>
                    <h1 className="text-xl font-semibold">
                        Phone : +01854763654
                    </h1>
                    <h2 className="mt-5 ml-2">
                        <button
                            className="btn btn-outline text-blue-500 border-blue-500 border-x-4 border-y-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
                            onClick={handleDownloadResume}>
                            Download Resume <IoMdDownload className="text-xl" />
                        </button>
                    </h2>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default AboutMe;
