import './index.css'

const EventItem = props => {
  const {event, onSelectEvent} = props
  const {imageUrl, name, location, registrationStatus} = event

  const onClickEvent = () => {
    onSelectEvent(registrationStatus)
  }

  return (
    <li className="event-item">
      <button
        onClick={onClickEvent}
        className="select-event-button"
        type="button"
      >
        <img className="event-image" src={imageUrl} alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
