/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import contactimg from "../../assets/contact-img.avif";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSendMessage = async () => {
        try {
            const templateParams = {
                from_name: name,
                to_email: email,
                message,
            };

            await emailjs.send(
                "service_8qnw5vt",
                "template_sl5tf58",
                templateParams,
                "m9UKBqKV7kxZVvyO5"
            );

            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Email sent successfully!",
            });
        } catch (error) {
            console.error("Error sending email:", error);

            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to send email. Please try again later.",
            });
        }
    };

    return (
        <div className="mt-16 w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-blue-500 text-center mt-8">
                Contact Me
            </h1>
            <div className="divider divider-info w-[190px] mx-auto"></div>

            <div className="flex items-center flex-col sm:flex-row gap-6 mt-8">
                <div className="sm:w-1/2">
                    <img
                        src={contactimg}
                        alt="Contact"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                <div className="sm:w-1/2 mt-6 sm:mt-2">
                    <h1 className="text-3xl text-blue-900 font-bold text-center mb-4">
                        LET'S TALK
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 sm:w-[60%] mx-auto">
                        <div className="w-full sm:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">
                                    NAME
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">
                                    GMAIL
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="text-center mt-3 sm:w-[60%] mx-auto">
                        <label className="label">
                            <span className="label-text text-white">
                                How can I help You ?
                            </span>
                        </label>
                        <textarea
                            placeholder="How can I Help you ?"
                            className="textarea textarea-bordered w-full"
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }></textarea>
                    </div>

                    <button
                        onClick={handleSendMessage}
                        className="btn border border-white text-blue-500 w-full sm:w-[40%] mx-auto mt-5 flex justify-center">
                        Send Message <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
