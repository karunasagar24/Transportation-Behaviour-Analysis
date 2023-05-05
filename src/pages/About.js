import React from "react";
import "../styles/About.css";
import img from "./Logo.png";

function About() {
  return (
    <>
         <section id="about-section">
            <div class="about-left">
                <img src={img} alt="About Img"/>
            </div>
            <div class="about-right">
                <h1>Who We Are</h1>
                <p>We are currently Civil Engineering students at Indian Institute Of Technology, Varanasi (BHU)
                We have done this project as our under graduate project under the guidence of Professor Dr. Agnivesh Pani.

                </p>
                <div class="address">
                    <ul>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-paper-plane"></i>
                            </span>
                            <p>Member 1</p>
                            <span class="saprater">:</span>
                            <p>Karuna Sagar</p> 
                            <p>(karuna.sagar.civ20@itbhu.ac.in)</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-phone-alt"></i>
                            </span>
                            <p>Member 2</p>
                            <span class="saprater">:</span>
                            <p>Pushpendra Kumar</p> 
                            <p>(pushpendra.krsonker.civ20@itbhu.ac.in)</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="far fa-envelope"></i>
                            </span>
                            <p>Member 3</p>
                            <span class="saprater">:</span>
                            <p>Palak Agrawal</p> 
                            <p>(palak.agrawal.cd.civ20@itbhu.ac.in)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    </>
  );
}
export default About;