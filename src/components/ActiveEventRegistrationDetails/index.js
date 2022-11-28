import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props
  const renderYetToRegisterView = () => (
    <div className="registration-status-container">
      <img
        className="register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )
  const renderRegisteredView = () => (
    <div className="registration-status-container">
      <img
        className="registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="msg">You have already registered for the event</h1>
    </div>
  )
  const renderRegistrationsClosedView = () => (
    <div className="registration-status-container">
      <img
        className="register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="msg">Registrations Are Closed Now!</h1>
      <p className="reopen-text">Stay tuned. We will reopen</p>
    </div>
  )

  const renderInitialView = () => (
    <div className="registration-initial-container">
      <p className="event-status-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (eventStatus) {
    case 'REGISTERED':
      return renderRegisteredView()
    case 'YET_TO_REGISTER':
      return renderYetToRegisterView()
    case 'REGISTRATIONS_CLOSED':
      return renderRegistrationsClosedView()
    default:
      return renderInitialView()
  }
}

export default ActiveEventRegistrationDetails
