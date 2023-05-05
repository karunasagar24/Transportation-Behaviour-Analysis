import React from "react";
import "../styles/About.css";
import img from "./bhulogo.png";

function About() {
  return (
    <>
        <section>
            <div class = "image">
                <img src={img}/>
            </div>

            <div class = "content">
                <h2>Who We Are</h2>

                <p>We are currently Civil Engineering students at Indian Institute Of Technology, Varanasi (BHU)
                We have done this project as our under graduate project under the guidence of Professor Dr. Agnivesh Pani.</p>
                <p>
                    Member 1 : Karuna Sagar (karuna.sagar.civ20@itbhu.ac.in)
                </p>
                <p>
                    Member 2 : Pushpendra Kumar Sonker
                    (pushpendra.krsonker.civ20@itbhu.ac.in)
                </p>
                <p>
                    Member 3 : Palak Agrawal (palak.agrawal.cd.civ20@itbhu.ac.in)
                </p>
                
            </div>
        </section>

    </>
  );
}
export default About;