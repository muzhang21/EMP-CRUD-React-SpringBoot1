import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployee from "./components/ListEmployee";
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import ViewEmployeeById from "./components/ViewEmployeeById";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListEmployee}></Route> 
              <Route path = "/employees" component = {ListEmployee}></Route> 
              <Route path = "/add-employee" component = {CreateEmployee}></Route> 
              <Route path = "/update-employee/:id" component = {UpdateEmployee}></Route> 
              <Route path = "/view-employee/:id" component = {ViewEmployeeById}></Route> 
            </Switch>
          </div>
          <FooterComponent />
        
      </Router>
    </div>
  );
}

export default App;
