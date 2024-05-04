import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const NavBar = () => {

    const [nav, setNav] = useState(false);
    
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projekte'
        },
        {
            id: 4,
            link: 'kontakt'
        },
       
    ]
    
    return (
      <div
        className="flex fixed justify-between  items-center w-full h-20 z-[100]
    px-4 text-white bg-[#212121] "
      >
        <div>
          <h1 className=" text-4xl font-normal ml-0 font-signature md:ml-2 md:text-4xl lg:text-6xl cursor-pointer ">
            Enriqué Thomsen
          </h1>
        </div>

        <ul  className="hidden md:flex  ">
          {links.map(({ id, link }) => (
            <li 
              key={id}
              className="px-4 cursor-pointer  uppercase font-medium hover:text-blue-600   text-white hover:scale-105 duration-200 "
              
            >
              <Link to={link} offset={-76} spy={true}  smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-20 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className=" z-auto  flex flex-col lg:hidden justify-center items-center fixed left-0 top-0 w-full h-full bg-slate-500 text-[#3c1a8b]">
            {links.map(({ id, link }) => (
              <motion.li
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4}}
                key={id}
                className="px-4 cursor-pointer capitalize z-auto py-5 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default NavBar
