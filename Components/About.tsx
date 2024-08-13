"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="relative mb-48 max-w-[63rem] text-center leading-8 sm:mb-44 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="flex flex-col md:flex-row w-full gap-6 p-3 sm:p-6">
        <div className="rounded-3xl w-full p-6 text-2xl leading-10 bg-primary md:w-1/2 dark:bg-tertiary">
          🌟 Hi there! I&#8217;m{" "}
          <span  style={{ fontFamily: "Satoshi" }} >
            {" "}
            Deepak Bagati , A passionate 4th-year IT student focused on leveraging technology 
            for real-world impact. Skilled in coding, problem-solving, and constantly innovating in the dynamic field of Information Technology
            .I’m committed to continuous learning, staying updated on emerging trends, and excelling through dedication and a 
            strong drive for excellence. Let's create something meaningful together!
          </span>
          {/* , a <span className="font-semibold">Full-stack developer</span> with
          expertise in <span className="font-medium">MERN Stack</span>,{" "} */}
          {/* <span className="font-medium">JavaScript</span> and the{" "}
          <span className="font-medium">Python</span>{" "}
          <span className="font-medium">DSA</span>{" "}
          <span className="font-medium">OS</span>{" "}
          <span className="font-medium">OS</span>{" "}
          <span className="font-medium">MySQL</span>{" "}
          <span className="font-medium">MongoDB</span>{" "}
          <br /> */}
          {/* <br />I am currently pursuing B.E in {" "}
                    <span className="italic">Information & Technology</span>, and my
                    Department{" "}
                    <span className="font-medium">love for technology</span>.
                    <br /> */}
          <br />
        </div>
        <div className="flex flex-col gap-6 md:w-1/2 rounded-3xl ">
          <div className="max-md:h-[33rem] h-[33rem]">
            <Image
              src="/about.jpg"
              alt="about image"
              fill
              quality={95}
              className="!relative object-cover rounded-3xl"
            />
          </div>
          <div className="rounded-3xl p-6 text-2xl leading-10 bg-primary dark:bg-tertiary">
            Let&#8217;s connect and weave some magic together! ✨
          </div>
        </div>
      </div>

      <Image
        src="/down-arrow.png"
        alt="down arrow"
        width={200}
        height={200}
        className="absolute -bottom-56 left-[35%] h-72"
      />
    </motion.section>
  );
}
