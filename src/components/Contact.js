// import React, { useState, useRef } from "react";
// import { Button } from "react-bootstrap";

// function Contact() {
//     const [name, setName] = useState("");
//     const [submitted, setHeading] = useState("");

//     function changeName(event) {
//         setName(event.target.value);
//     }

//     function submitForm(event) {
//         setHeading("Thanks for your message :)");
//         event.preventDefault();
//     }

//     return (
//         <div id="contact-form">
//             <form onSubmit={submitForm}>
//                 <h1>Hello {name}</h1>
//                 <input
//                     onChange={changeName}
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     required
//                 />
//                 <input type="email" placeholder="Email" required />
//                 <textarea rows="4" name="comment" placeholder="Your Message" required />
//                 {/* <input className="input-msg" type="text" placeholder="Your Message" /> */}
//                 <p>{submitted}</p>
//                 <Button variant="outline-light" id="action-btn" type="submit">
//                     Get In Touch
//                 </Button>
//             </form>
//         </div>
//     );
// }

// export default Contact;


import React from 'react'

const Contact = () => {
    return (
        <aside>
            <form id="contact-form" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </aside>
    )
}

export default Contact
