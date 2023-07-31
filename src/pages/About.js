import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className='aboutspace'>
      <div className="first"><h1>About Us</h1>
      <p className='top-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas odio atque in, quae accusamus suscipit facilis quod necessitatibus sunt quam tempore, numquam consequuntur ad voluptas? Aperiam quibusdam alias nostrum, excepturi ut consequuntur iusto perspiciatis provident corrupti cum illo iste aspernatur officiis saepe incidunt aut.</p>
      </div>
      <div className="starting">
        <p style={{maxWidth : '50%'}}>Twitter's origins lie in a "daylong brainstorming session" held by board members of the podcasting company Odeo. Jack Dorsey, then an undergraduate student, introduced the idea of an individual using an SMS service to communicate with a small group.[38][39] The original project code name for the service was twttr, an idea that Williams later ascribed to Noah Glass,[40] inspired by Flickr and the five-character length of American SMS short codes. The decision was also partly due to the fact that the domain twitter.com was already in use, and it was six months after the launch of twttr that the crew purchased the domain and changed the name.</p>
        <img style={{maxWidth : '50%' , display : 'block' , margin : 'auto' , borderRadius : '13px'}} src="https://ichef.bbci.co.uk/news/976/cpsprodpb/DC6B/production/_130272465_gettyimages-1240294770.jpg" alt="" width={350} height={200} />
      </div>
    </div>
  )
}

export default About
