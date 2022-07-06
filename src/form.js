import React,{useState} from "react";
import "./App.css";
const Form = () => {
    const [name,setname]=useState({});
  const  handlechange=(e)=>{
  
setname(values=>({...values,[e.target.name]:e.target.value}));
//const [name,setname]=useState("");
console.log(name)
    }
    return (
        <>
        <div>
             <input  id="fname" name="FirstName" value={name.FirstName||""} type="text" placeholder="FirstName" onChange={(e)=>handlechange(e)}></input>
             <br/>
             <input class="Lbtn" name="LastName"  value={name.LastName|| ""} type="text" placeholder="LastName" onChange={(e)=>handlechange(e)}></input>
             <br/>
             <button>Submit</button>
             
        </div>
        </>
    );
  
}
// function Form() {
//     const [inputs, setInputs] = useState({});
  
//     const handleChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setInputs(values => ({...values, [name]: value}))
//       console.log(inputs)
//     }
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(inputs);
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//         <input 
//           type="text" 
//           name="username" 
//           value={inputs.username || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <label>Enter your age:
//           <input 
//             type="number" 
//             name="age" 
//             value={inputs.age || ""} 
//             onChange={handleChange}
//           />
//           </label>
//           <input type="submit" />
//       </form>
//     )
//   }
  

export default Form;