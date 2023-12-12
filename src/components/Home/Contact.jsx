/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Footer from "./Footer";
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
        <div className="mt-16 w-[80%] mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-5xl text-blue-500 font-bold mt-10">
                    Contact Me.
                </h1>
                <h1 className="text-5xl text-black font-bold mt-5">
                    <IoIosMail className="text-blue-500" />
                </h1>
            </div>
            <hr />

            <div className="bg-gray-600 h-[390px] rounded-lg mt-10 mb-10">
                <h1 className="text-3xl text-white mt-10 font-bold text-center ">
                    LET'S TALK
                </h1>

                <div className="flex gap-7 justify-center w-[60%] mx-auto">
                    <div className="w-[50%]">
                        <div className="label">
                            <span className="label-text text-white">NAME</span>
                        </div>
                        <input
                            type="text"
                            placeholder="name here"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-[50%]">
                        <div className="label">
                            <span className="label-text text-white">GMAIL</span>
                        </div>
                        <input
                            type="text"
                            placeholder="gmail here"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="text-center w-[60%] mx-auto mt-10">
                    <div className="label">
                        <span className="label-text text-white">
                            How can I help You ?
                        </span>
                    </div>
                    <textarea
                        placeholder="How can I Help you ?"
                        className="textarea textarea-bordered textarea-sm w-full"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <button
                    onClick={handleSendMessage}
                    className="btn btn-outline border-white text-white flex justify-center w-[20%] mx-auto mt-5 mb-5">
                    Send Message <FaArrowRight />
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
