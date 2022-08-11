import React, { Component } from 'react';
import data from './pages/data.json';
import Addmodel from './Addmodel.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: data,

      loading: true,
    };
  }
  passEmployee(e) {
    this.state.users.push(e);
    this.setState({ users: this.state.users });
  }
  DeleteRow = (index, name) => {
    this.state.users.splice(index, 1);
    this.setState({ users: this.state.users });
    console.log(this.state.users.employee_name);
    alert('Do you want to delete EmployeeName : ' + name);
  };

  Details = (users) => {
    // console.log(index);
    alert(
      'EmployeeID : ' + users.employee_name
      // "EmployeeName :"+users.employee_name,
      // "EmployeeSalary :"+users.employee_salary,
      // "EmployeeAge :"+users.employee_age,
      // "Email ID :"+users.email,
      // "Designation :"+users.designation,
      // "ProfileImage :"+users.file
    );
  };

  render() {
    let DisplayData = this.state.users.map((users, index) => {
      return (
        <tr key={index} style={{ textAlign: 'center' }}>
          <td>{users.id}</td>
          <td>{users.employee_name}</td>
          <td>{users.employee_salary}</td>
          <td>{users.employee_age}</td>
          <td>{users.email}</td>
          <td>{users.designation}</td>
          <td>{users.file}</td>

          <td>
            <button
              className="btn btn-danger m-1"
              onClick={() => this.DeleteRow(index, users.employee_name)}
            >
              Delete
            </button>
            <button
              className="btn btn-info m-1"
              onClick={() => this.Update(index)}
            >
              Update
            </button>
            <button
              className="btn btn-info m-1"
              onClick={() => this.Details(users)}
            >
              Details
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <Addmodel passEmployee={(e) => this.passEmployee(e)} />

        <table className="table table-striped ">
          <thead style={{ textAlign: 'center' }}>
            <tr>
              <th>EmployeeId</th>
              <th>EmployeeName</th>
              <th>EmployeeSalary</th>
              <th>EmployeeAge</th>
              <th>Email ID</th>
              <th>Designation</th>
              <th>ProfileImage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
