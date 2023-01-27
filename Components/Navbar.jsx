import React from 'react'
import img from "../public/newImages.jpg"
import Image from 'next/image'
import { AiOutlineMail, AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
import { motion } from "framer-motion"
const Navbar = () => {
    return (
        <header className=" grid sm:grid-cols-1 md:grid-cols-2 p-2 overflow-hidden">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0.5
                }}
                transition={{
                    duration: 1.1
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                className="left-section flex justify-center items-center">
                <Image src={img} className="w-20 h-20 rounded-full" />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0.5
                }}
                transition={{
                    duration: 1.1
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                className="right-section  flex justify-evenly items-center">
                <span><AiOutlineMail size={30} /></span>
                <span><AiFillGithub size={30} /></span>
                <span><AiOutlineInstagram size={30} /></span>
                <span><AiOutlineLinkedin size={30} /></span>
            </motion.div>
        </header>
    )
}

export default Navbar