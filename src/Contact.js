
import {useState} from 'react';
import {Firebase} from "./firebase"
// import firestore from "firebase/compat/firestore"

function Contact(){
 
    const [name , setName] = useState();
    const [phone , setPhone] = useState();
        
    // Push Function
  

    const pushData = (e) => {
      e.preventDefault();
      console.log(name, phone)
      Firebase.firestore().collection("xyz").add({
        name:name,
        phone:phone
        
      })
    }
    return(
    <>
          <div className="bg-green-200 py-32 px-10 min-h-screen ">

<div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">

  <form onSubmit={pushData}>
    <div className="flex items-center mb-5">
      <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold text-gray-600">Name</label>
      <input type="text" 
      id="name" 
      name="name" 
      placeholder="Name"
      value={name} 
      onChange={(e) => setName(e.target.value)}
      className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
              text-gray-600 placeholder-gray-400
              outline-none"/>
    </div>
    <div className="flex items-center mb-10">
      <label htmlFor="twitter" className="inline-block w-20 mr-6 text-right font-bold text-gray-600">Phone</label>
      <input type="text" 
        id="twitter"
        name="twitter" 
        placeholder="Phone No."
        value={phone} 
      onChange={(e) => setPhone(e.target.value)}
        className="flex-1 py-2 border-b-2 border-gray-400  
              text-gray-600
              placeholder-gray-400"/>
    </div>
    <div className="text-right">
      <button className="py-3 px-8 bg-green-400 text-white font-bold">Submit</button>
    </div>

  </form>
</div>
</div>
    </>
    );
}
export default Contact;
