// import React from 'react'


// export default function Form() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     console.log("hello")
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "07a4766a-07d8-45cc-ba94-ccfec610e24d");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
  // return (
  //   <div className='form'>
  //       <form onSubmit={onSubmit}>
  //           <label>Your Name</label>
  //           <input type='text'/>
  //           <label>Email</label>
  //           <input type='email'/>
  //           <label>Subject</label>
  //           <input type='text'/>  <label>Message</label>
  //           <textarea rows="6" placeholder='Type Your message here..'/>
  //           <button className='btn'>Submit</button>
  //       </form>
      
  //   </div>
  // )
// }
import React from 'react'
import "./Form.css"
export default function Form() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "07a4766a-07d8-45cc-ba94-ccfec610e24d");
 console.log("hello")
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className='form'>
        {/* <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text'/>
            <label>Email</label>
            <input type='email'/>
            <label>Subject</label>
            <input type='text'/>  <label>Message</label>
            <textarea rows="6" placeholder='Type Your message here..'/>
            <button className='btn'>Submit</button>

        </form> */}
         <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name="name"/>
        <label>Email</label>
        <input type="email" name="email"/>
        <label>Message</label>
        <textarea rows="6" name="message"></textarea>
        <button type="submit" className='btn'>Submit</button>
      </form>
        <span>{result}</span>
      
    </div>
  )
}

