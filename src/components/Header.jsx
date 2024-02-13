import React from 'react'

const Header = () => {
  return (
   <nav>
    <NavContent/>
   </nav>
  );
};

const NavContent = () =>(
     <>
     <h2>Vipul.</h2>
     <div>
      <a href="#home">Home</a>
      <a href="#word">Word</a>
      <a href="#timeline">Experince</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
     </div>
   
    <a href="mailto:cse.20201027@gmail.com">
     <button>Email</button>
    </a>

     </>
)

export default Header