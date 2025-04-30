import React from 'react';
import {data} from '../restApi.json';

const Team = () => {
  return (
   
    <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>OUR TEAM</h1>
                <p>
                At AlleyReserve, our team is the heart of everything we do. We're a group of passionate professionals dedicated to delivering seamless reservations, quality food, and fast service. From our tech experts and designers to our customer support and delivery crew — 
                each member plays a vital role in bringing you the best experience possible.
                </p>
            </div>
                <div className="team_container">
                    {
                        data[0].team.map((element) => {
                            return(
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.name} />
                                    <h3>{element.name}</h3>
                                    <p>{element.designation}</p>
                                </div>
                            )
                        })}
                </div>    
        </div>
    </section>
  )
}

export default Team;

