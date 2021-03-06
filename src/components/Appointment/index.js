// Dependencies
import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from "react-router-dom";


class Appointment extends Component {

    async deleteAppointment(event) {
      event.preventDefault()

      const headers = new Headers()
      headers.append('Content-type', 'application/json');

      const options = {
        method: 'DELETE',
        headers
      }

      const response = await fetch(`https://apptly-api.herokuapp.com/appointments/${this.props.appointment.id}`, options)
      if (response.status === 200) {
        window.location.href=`/patients/${this.props.appointment.patient_id}`
      }

    }

  render() {
    return (
      <li className="collection-item dismissable">
        <div>{moment(this.props.appointment.date_time).format('MMMM Do YYYY, h:mm a')}
          <a href={`/patients/${this.props.appointment.patient_id}/appointments/${this.props.appointment.id}/edit`} className="secondary-content">
            <i className="material-icons">create</i>
          </a>
          <a href="#deleteNote" onClick={ event => this.deleteAppointment(event) } className="secondary-content">
            <i className="material-icons">cancel</i>
          </a>
        </div>
      </li>
    )
  }
}

export default withRouter(Appointment);
