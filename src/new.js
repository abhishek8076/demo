import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Form1 from "./form";
import "./App.css";

// function _ScrollToTop(props) {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return props.children;
// }
//const ScrollToTop = withRouter(_ScrollToTop);
const Headermain=()=>{
  const [isActive, setActive] = useState("false");

const handleToggle =()=>{
  setActive(!isActive);
  document.body.classList.toggle("ovhidden")
};
return(
  <>
  {/* <header className="fixed-top site__header">
    
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
{            
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              
            {!isActive ?' click':'clicking'}
          </button>
         */}
{/*           
</div>
</div>
</header> */} 
{/* <Form1/> */}

  </>
);
}
export default Headermain;