
import Headermain from "./new";
import Form1 from "./form.js";
import Login from "./login.js"
import {Link,BrowserRouter, 
  Routes, Route,
  withRouter} from "react-router-dom";
import Regform from "./registration";

  const App=()=>{
        return(
          <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Headermain/>}></Route>
              <Route exact path="/form" element={<Form1/>}></Route>
              <Route exact path="/log" element={<Login/>}></Route>
              <Route expct path="/regform" element={<Regform/>}></Route>
          </Routes>
        </BrowserRouter>
        );
  }
  export default App;
  

