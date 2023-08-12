import { useState } from "react";
import { motion } from "framer-motion";

export default function Links() {
   const [activeLink, setActiveLink] = useState(0);
   const handleMouseEnter = (id: number) => () => setActiveLink(id);
   const handleMouseLeave = () => setActiveLink(0);
   return (
      <ul className="navbar__links">
         {links.map((link) => (
            <li key={link.id}>
               <button
                  onMouseEnter={handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                  className={link.id === activeLink ? "active" : ""}
               >
                  {link.text}
                  {link.id === activeLink && (
                     <motion.span
                        transition={{
                           duration: 0.2,
                        }}
                        layoutId="underline"
                        className="underline"
                     ></motion.span>
                  )}
               </button>
            </li>
         ))}
      </ul>
   );
}

const links = [
   {
      id: 0,
      text: "Home",
   },
   {
      id: 1,
      text: "About Us",
   },
   {
      id: 2,
      text: "Features",
   },
   {
      id: 3,
      text: "How it works",
   },
];
