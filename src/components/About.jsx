import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import {fadeIn} from '../variants';
import Image from "../assets/about4.png";

const About = () => {
  const {ref, inView } = useInView();

 
  
  return (
    <section className=" section lg:h-[80vh]"   id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col  gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 lg:h-screen ">
          {/* {img} */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 z-200  w-fit h-[500px] relative mix-blend-lighten  "
          ><img src={Image} alt="" /></motion.div>
          {/* {text} */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-[40px] text-acc lg:text-[50px] font-secondary text-blue-600 ">Über mich</h2>
            <h3 className="h3 mb-4 text-black">
              Hey! Ich bin Enriqué, 
            </h3>
            <p className="mb-6 text-black font-secondary text-[26px]">
              Technische Probleme und schwierige Herausforderungen sind mein Ding.
              Schon seit meiner Kindheit haben mich Komplexe Probleme, insbesondere IM software-technischen 
              Bereich fasziniert.
            </p>
            <p className="mb-6 text-black font-secondary text-[26px] "> Meine Freizeit verbringe Ich gerne mit Lesen, da es mir große Freude bereitet Komplexe 
            Sachverhältnisse zu verstehen und mir hilft meinen Verstandt Fit zu halten und mir die möglichkeit gibt neue Sprachen und Kulturen kennenzulernen.
            </p>
          
          
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;