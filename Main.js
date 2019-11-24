import React from 'react';
import './Main.css';
import blog1 from './ELES.jpg'
import blog2 from './ENT.jpg'
import blog3 from './Apple.jpg'


const Main = () =>{
    return(
    <div className="Main"> 
    <table className="Tab">
     <td>
    <div className="Blog">
        <a href="https://www.miss-thrifty.co.uk/the-mythbusters-guide-to-saving-money-on-energy-bills"> Energy Saving </a>
        <br/>
        <img src={blog1} className="AL" alt="logo" />
        <br/>
        <h5>Date:22/11/2019</h5>
        <br/>
        <p>Once you get past the beginner-level energy-saving stuff, a whole new world of thrifty nerdery opens up.
             Here are some secrets to copping a load of money off your utilities bills.</p>
    </div>
    </td>

    <td>
    <div className="Blog">
        <a href="https://solopreneurhour.com/podcast/795-how-to-create-your-own-mobile-app-with-sean-casto-of-preapps-com"> Enterprenuer </a>
        <img src={blog2} className="AL" alt="logo" />
        <h5>Date:22/11/2019</h5>
        <p>Have you ever thought “Man, I wish there was an app for that!”. 
            Today’s guest, Sean Casto of http://preapps.com, has helped hundreds of people create apps.
             Today we chat about how he got into the app game, and the steps necessary to create your own app!</p>
        <h5> </h5>
        
    </div>
    </td>

    <td>
    <div className="Blog">
        <a href="https://knowtechie.com/expect-to-see-a-a-lot-more-people-wearing-apple-airpods-soon"> Techology </a>
        <img src={blog3} className="AL" alt="logo" />
        <h5>Date:22/11/2019</h5>
        <p>If you go for a walk around your city, chances are you are going to see at least a few people wearing AirPods. It’s not like the AirPods are just a trendy piece of tech, it is a good product. Now, expect that number to increase thanks to this huge influx in demand.</p>
    </div>
</td>
</table>
    </div>
    );
}
 export default Main;

