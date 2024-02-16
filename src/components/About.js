import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Technical Writer and Something-of-a Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        I'm Luna, a student in the full stack to allow me to work
        as a web developer in the tech fields.
      </p>
      <p className="content">
        I always create and maintain websites, I also take care of the site's technical aspects, such as its 
        performance and capacity, which are measures of a website's speed and how much traffic the site can handle.
      </p>
    </div>
  );
}

export default About;