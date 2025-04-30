import React from 'react';
import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export const About = () => {
  return (
    <section className='about' id='about'>
        <div className='container'>
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>Food the Savior</p>
                </div>
                    <p className='mid'>
                    Welcome to AlleyReserve — your go-to platform for seamless and hassle-free reservations. Whether you're booking a table, scheduling an appointment, or reserving a service, we make the process quick, easy, and reliable.

                    At AlleyReserve, our mission is to simplify the way people reserve time and space. We connect users with businesses through a user-friendly interface and real-time availability, ensuring a smooth experience every time.
                    
                    We believe in saving your time, eliminating the wait, and helping you plan better. Backed by a dedicated team and smart technology, AlleyReserve is built for convenience, reliability, and satisfaction.
                    
                    Thank you for choosing us — let’s reserve your spot today!
                    </p>

                    <Link to={"/"}>Explore Menu <span>
                        <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>  
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
   
  )
}
