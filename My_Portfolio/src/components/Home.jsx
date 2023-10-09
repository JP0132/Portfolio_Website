import React, { useEffect, useRef } from "react";
import { Avatar, ParticlesContainer } from "./index";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { quotes } from "../constants";
import { useState } from "react";
import { useInterval } from "../customHooks";

// Display the Home section
const Home = () => {
  // Used to store a random index
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Using a custom hook it will get a new quote index every 10 seconds
  useInterval(() => {
    setQuoteIndex((quoteIndex + 1) % quotes.length);
  }, 10000);

  // For the title to display the random text animation.
  const [titleText, setTitleText] = useState("");
  
  //Allows the interval be referenced before it is called
  let interval = null;

  //Triggers the animation every 7 seconds
  useInterval(() => { 
    // The variables needed for animation
    const title = "Hi, I'm Jaynik Parsotomo";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;

    clearInterval(interval);

    //This changes the text every 0.3 miliseconds
    interval = setInterval(() => {
      //Sets the text to be displayed. 
      // Display random letters along with the correct letters every
      // iteration
      setTitleText(
        title
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return title[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= title.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  }, 7000);

  //Sets the title at the start
  useEffect(() => {
    setTitleText("Hi, I'm Jaynik Parsotomo.");

  }, [])

  return (
    <div id="home" className=" bg-primary/60 relative w-full h-screen">
      <div
        className="w-full h-full  bg-gradient-to-r from-primary/10
        via-black/30 to-black/10"
      >
        <div
          className="text-center flex flex-col justify-center xl:pt-20 
        xl:text-left h-full container mx-auto"
        >
          {/* For the main title, fades in first and transparant text */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="z-20 overflow-hidden text-center min-h-[120px] bg-white bg-opacity-90 text-black mix-blend-screen xl:mb-[180px]"
          >
            <h1
              className="text-[50px] z-20 
            leading-tight md:text-[60px] xl:text-[80px] md:leading-[1.3] 
             font-bold font-['Poppins'] uppercase "
            >
              {titleText}
            </h1>
          </motion.div>

          {/* For a quote "Orginal quote". */}
          <motion.h1
            variants={fadeIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-20"
          >
            I Code, Therefore I <br /> Transform Ideas Into <br />
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* 
            For the random quotes by famous people.
            Theses fade in and out using the specified interval.
          */}
          <div className="z-20 text-center min-h-[120px]  text-white">
            <motion.p
              variants={fadeIn("down", 1.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              key={quoteIndex}
              className="text-[14px] z-20 leading-tight md:text-[20px] md:leading-[1.3] font-['Poppins'] max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
            >
              <span className="italic">“{quotes[quoteIndex].quote}” </span>
              <span className="font-bold"> — {quotes[quoteIndex].by}</span>
            </motion.p>
          </div>
        </div>
      </div>
      {/* The moving background image. */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* Image from: https://unsplash.com/photos/2tTMSaELarQ by Blade Lustre*/}
        <div
          className="bg-hero bg-repeat mix-blend-hard-light animate-ltr-linear-infinite-small min-[1800px]:animate-ltr-linear-infinite-large 2xl:animate-ltr-linear-infinite-medium bg-center 
         w-full h-full absolute translate-z-0"
        ></div>

        {/* Particles to move about, only shown on large screens */}
        <div className="hidden lg:block">
          <ParticlesContainer />
        </div>

        {/*For the avatar of myself, fades in  */}
        <motion.div
          variants={fadeIn("up", 1.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute
        lg:bottom-0 bottom-60 right-0 xl:right-[8%] overflow-hidden"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
