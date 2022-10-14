import React from "react";
import Links from "./Links"

function About(props) {
 
  function hasBio(){
  if(props.bio === ""){
    return null
  }
  else return <p>props.bio</p>
}

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this</p>
      {hasBio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
