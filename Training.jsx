import React from 'react'
import  img1 from '../assets/image/company-1067978_1920.jpg';
import './Training.css';

const Training = () => {
  return (
    <div>
      <section>
            <div className="container">
                <h1>Training and Development</h1>
                <h3>Home/Training and Development</h3>
            </div>
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

      {/* second section */}
      <div className="questions">
        <h1>Services Provided by Make visions Outsourcing</h1>
        <h2>Customer service training</h2>
           <p> With Workedge's customer service training program, your customer service team will be able to handle customers more responsibly and positively. Our customer interaction training will help your team maintain pleasant customer relationships that will ultimately result in increased customer satisfaction.</p>
        <h2>Sales training</h2>
            <p>Increased sales percentage equals to more profit. However, to accomplish more sales the organization needs an expert sales team. That's why Workedge provides a complete sales training program which covers everything from initial prospect analysis and negotiation skills to selling and account management skills.</p>
        <h2>Learn techniques for successful interview results.</h2>
            <p>With Make Visions interview training program, your chances for getting hired will increase drastically. You can learn key techniques for desired interview results such as preparing for the interview, making positive first impression and developing confident body language.</p>
        <h2>Stress management training</h2>
            <p>With Make Visions customer service training program, your customer service team will be able to handle customers more responsibly and positively. Our customer interaction training will help your team maintain pleasant customer relationships that will ultimately result in increased customer satisfaction.</p>
        <h2>Time management training</h2>
            <p>With make Visions customer service training program, your customer service team will be able to handle customers more responsibly and positively. Our customer interaction training will help your team maintain pleasant customer relationships that will ultimately result in increased customer satisfaction</p>
        <h2>Customer profiling training</h2>
        <p>Make Vision's customer profiling training program can help your business streamline an ideal customer profile, on whom your business should spend
        resources for selling the products or services. In other words, it would help you target the right customers who would bring in the desired revenue.</p>
        <h2>Team building</h2>
            <p>You can take maximum advantage of Make Vision's team building programs that would strengthen the interpersonal relationships of your team. Our highly engaging and interactive team building module will bind your team together while making them more cooperative and supportive of each other.</p>
        <h2>Leadership training</h2>
            <p>Make vision's leadership training programs can in still and improve leadership skills in individuals or a group of employees significantly. With our customized tools and techniques, the program caters to leaders at all levels - from aspiring ones to leaders already holding senior most positions.</p>
        <h2>Customized trainings as per company requirements</h2>
            <p>As every organization's training requirements are different, Make Visions doesn't stick to one-training-module-fits-all method. We understand your requirements and come up with distinct customized training modules to fulfil them efficiently. Our Services Recruitment Training & Development Career Counselling Contract Manpower Attendance & Payroll Management System</p>
      </div>

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

export default Training;
