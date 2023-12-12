/* eslint-disable react/prop-types */
import { FaCamera, FaEye, FaLaptop } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { useSpring, animated } from "react-spring";

const ServiceCard = ({ icon, title, description }) => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={props} className="text-center mb-8 sm:mb-0">
            {icon}
            <h1 className="text-3xl font-serif">{title}</h1>
            <p className="text-xl mt-3">{description}</p>
        </animated.div>
    );
};

const Services = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-500 text-center mt-24">
                SERVICES
            </h1>
            <div className="divider divider-info w-[150px] mx-auto"></div>

            <div className="flex flex-col sm:flex-row sm:justify-around mt-8">
                <ServiceCard
                    icon={
                        <FaLaptop className="text-7xl text-blue-500 mx-auto mb-4" />
                    }
                    title="Web Development"
                    description="Elevate your digital presence with dynamic web solutions and cutting-edge technologies."
                />
                <ServiceCard
                    icon={
                        <FaEye className="text-7xl  text-blue-500 mx-auto mb-4" />
                    }
                    title="Web Design"
                    description="Craft user-friendly interfaces with captivating designs for a seamless and engaging online experience."
                />
                <ServiceCard
                    icon={
                        <FaMobileScreen className="text-7xl  text-blue-500 mx-auto mb-4" />
                    }
                    title="Responsive Design"
                    description="Optimize websites for various devices, ensuring easy navigation and readability on any screen size."
                />
                <ServiceCard
                    icon={
                        <FaCamera className="text-7xl  text-blue-500 mx-auto mb-4" />
                    }
                    title="Photography"
                    description="Capture meaningful stories through compelling visuals, specializing in portraits and landscapes."
                />
            </div>
        </div>
    );
};

export default Services;
