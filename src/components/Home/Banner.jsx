import banner from "../../assets/www.reallygreatsite.com  @reallygreatsite (1).png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <div className="relative">
            <div className="relative">
                <img src={banner} alt="img" className="w-full h-auto" />
                <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white sm:top-[30%] sm:left-[50%] sm:ml-0"
                    data-aos="fade-right">
                    <h1 className="text-3xl font-bold sm:text-3xl">
                        HI, I'M NASIM
                    </h1>
                    <h1 className="text-xl font-bold mt-5 sm:text-5xl ">
                        Frontend Focused MERN Stack{" "}
                        <span className="text-green-500"> Devoloper</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
