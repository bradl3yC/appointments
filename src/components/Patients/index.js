// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map'

class Patients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: [],
    }
  }

  // async fetchAll() {
  //   const response = await fetch('http://localhost:8080/patients');
  //   const status = await response.status;
  //   const patients = await response.json();
  //
  //   if (status === 200) {
  //     this.setState({ patients })
  //   }
  //
  // }

  componentDidMount() {
    // this.fetchAll()

    const options = {
      method: 'GET',
      headers: {
        'X-User-Token': localStorage.token,
        'X-User-Email': localStorage.email,
      }
    }

    fetch('http://localhost:8080/patients', options)
    .then(response => response.json())
    .then(patients => this.setState({ patients }))
  }

  render() {
    return (
      <div>
        {map(this.state.patients, (patient) => (
          <div key={patient.id} className="row">
            <div className="col s12 m3">
              <div className="card blue darken-2">
                <div className="card-content white-text">
                  <span className="card-title">{patient.name}</span>
                  <p>{patient.phone_number}</p>
                  <p>{patient.address}</p>
                </div>
                <div className="card-action">
                  <Link to={`/patients/${patient.id}`}>View</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Patients;
