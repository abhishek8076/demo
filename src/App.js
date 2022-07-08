import Headermain from "./new";
import Home from "./home";
import Form1 from "./form.js";
import {Link,BrowserRouter, 
  Routes, Route,
  withRouter} from "react-router-dom";

  const App=()=>{
        return(
          <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Headermain/>}></Route>
              <Route exact path="/form" element={<Form1/>}></Route>
              <Route exact path="/home" element={<Home/>}>
            </Route>
          </Routes>
        </BrowserRouter>
        );
  }
  export default App;
  
