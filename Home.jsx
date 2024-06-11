import React from 'react'
import './Home.css';
import img1 from '../assets/image/company-1067978_1920.jpg';
const Home = () => {
  return (
    <div>
    <section>
        <div className='container'>
            <h1>IT Staffing</h1>
            <h3>Home/IT Staffing</h3>
        </div><hr />
        <div className="head-container">
        <div className="main-container">
          <h4>The community of professional recruiters.</h4>
          <h1>We give the best service</h1>
          <p>We are diversifying outside of traditional staffing solutions, particularly into outsourcing Organizations with intensive manual labour in multiple industry sectors are looking for an efficiently managed flexible workforce through well-defined KPIs. We cover flexible workforce planning, talent attraction, recruitment process, talent development, and productivity management.<br />
          Understanding what drives our outsourcing clients is key. Our outsourcing "managed staffing" program engage in client KPIs that are critical for them. We design unique solutions to help our clients become more competitive by sizing adequately and helping them make the most from a productive and efficient flexible workforce.</p>
          <button className='btn'>Contact Us</button>
          </div>
          <div className="image-container">
            <img src={img1} alt="not found" />
          </div>

        </div>
    </section>
        
      {/* contact section */}
      <div className="head">
        <h1>Got <span>Questions?</span></h1>
      </div>
      <div className="form-container">
        <form action="">
            <input type="text" name="name" id="name" placeholder='Your name*' />
            <input type="email" name="email" id="email" placeholder='Your e-mail*' /><br />
            <textarea name="message" id="message" placeholder='Your message*'></textarea><br />
            <button className="btn">Submit</button>
        </form>
      </div>

    
    </div>
  )
}

export default Home;
