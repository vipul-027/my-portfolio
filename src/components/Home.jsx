import React from 'react'
import {motion} from "framer-motion";
import  TypewriterClass  from 'typewriter-effect';
import {BsArrowUpRight} from "react-icons/bs";
import me from "../assets/logo.png"
// initial={{
//   x:"-100%",
//   opacity:0,
// }}
// whileInView={{
//   x:0, 
//   opacity:1,  
// }}

const Home = () => {

const animation={
  h1:{
    initial :{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    }
  },

  button:{
    initial :{
      y:"-100%",
      opacity:0,
    },
    whileInView:{
      y:0,
      opacity:1,
    }
  },

};

  return (
    <div id="home" > 
    <section>
    <div>
      <motion.h1 {...animation.h1}>
        Hi, I Am <br/> Vipul Kumar
      </motion.h1>

    <TypewriterClass 
       options={{
        strings:["A Developer", "A Designer", "A Creator"],
        autoStart:true,
        loop:true,
        cursor:"",
        wrapperClassName:"typewriterpara",
       }}
    />
    
    <div>
      <a href="mailto:cse.20201027@gmail.com">Hire me</a>
      <a href="#work">
        Projects <BsArrowUpRight/>
         </a>
    </div>

   <article>
    <p>
      +<span>100</span>
    </p>
    <span>clients across the globe</span>
   </article>

   <aside>
   <article>
    <p>
      +<span>500</span>
    </p>
    <span>projects completed</span>
   </article>

   <article data-special>
    <p>Contact</p>
    <span>cse.20201027@gmail.com</span>
   </article>

   </aside>

    </div>
    </section>
    <section>
    <img src={me} alt="Vipul" />
    </section>
    </div>
  )
}

export default Home