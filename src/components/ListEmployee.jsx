import React, { Component } from "react";
import EmployeeService from "../service/EmployeeService";

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  //best place to call a rest api, so whenever you want to make ajax calls or http calls
  //always use componentDidMount because this method will get immediately called after a component
  //is mounted
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      //set a response to the employees array
      //CORS policy: http://8080 from origin 3000 has been blocked by CORS

      this.setState({ employees: res.data });
    });
  }
  addEmployee = () => {
    this.props.history.push("/add-employee");
  };

  editEmployee = (id) =>{
    this.props.history.push(`update-employee/${id}`);
  }

  viewEmployee = (id) =>{
    this.props.history.push(`view-employee/${id}`);
  }

  deleteEmployee = (id) =>{
    EmployeeService.deleteEmployee(id).then( res => {
      this.setState({employees: this.state.employees.filter(employee=> employee.id !== id)})
  });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Employee List</h2>
        
          <button className="btn btn-primary m-2" onClick={this.addEmployee}>
            Add Employee
          </button>
        
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Emaild Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td className="col-3">
                    <button className="ms-2 btn btn-warning btn-sm btn-block" onClick = {()=> this.editEmployee(employee.id)}>Update</button>
                    <button className="ms-2 btn btn-info btn-sm btn-block" onClick = {()=> this.viewEmployee(employee.id)}>View</button>
                    <button className="ms-2 btn btn-danger btn-sm btn-block" onClick = {()=> this.deleteEmployee(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployee;
