/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

// Import Swiper styles
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";

const Project = () => {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("../../../public/projects.json");
                const data = await response.json();
                setProjectsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold text-blue-500 text-center mt-8">
                Awesome projects
            </h1>
            <div className="divider divider-info w-[250px] mx-auto"></div>

            <Swiper
                modules={[FreeMode]}
                freeMode={true}
                slidesPerView={3}
                spaceBetween={30}
                className="mySwiper">
                {projectsData.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="w-[370px] bg-base-100 shadow-xl h-[500px]">
                            <figure className="w-full h-[200px]">
                                <img
                                    className="w-full h-full object-cover"
                                    src={project.img}
                                    alt={project.name}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.name}</h2>

                                <p className="h-[110px] mt-5">
                                    {project.description}
                                </p>

                                <div className="flex gap-2 mt-3">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm hover:bg-fuchsia-500">
                                        Live Link
                                    </a>
                                    <a
                                        href={project.frontendCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm hover:bg-pink-500">
                                        Frontend Code
                                    </a>
                                    <a
                                        href={project.backendCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm hover:bg-blue-500">
                                        Backend Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Project;
