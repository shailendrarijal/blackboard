export default function About() {

    return (
      <div>
        <div className="container">
          <h3>About Us</h3>
          <div className="container-fluid">
            <p>Blackboard Nepal was created with the vision of providing free information to Nepalese community. We want to contribute to the society by increasing the access of information to Nepalese public. Currently, we have information for NAATI test, which is a crucial test for Nepalese living in Australia and are thinking to apply for Permanent Residency. Slowly, we will expand our services and provide more and more information regarding various places, food and culture and different traditions of Nepal. Keep supporting us! If you want to leave us a message, please fill in the form below.</p>
          </div>
        </div>
        <div className="container">
          <h3>You can use this form to send us a feedback or a message</h3>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message Type: <select name="messageType">
                <option value="feedback">Feedback</option>
                <option value="Message">Message</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit" className="btn-primary btn-md button my-1">Send</button>
            </p>
          </form>
        </div>
         
  
        <style jsx>{`
           .container-fluid{
               background-color: rgb(0, 128, 128, 0.5);
               box-shadow: 0.5rem 0.5rem #ccc;
               margin: 1rem 0.5rem 2rem;
               padding: 2rem 1rem;
           }
           h1{
               color: #000000;
           }
        `}</style>
  
      </div>
  
    )
  }
  