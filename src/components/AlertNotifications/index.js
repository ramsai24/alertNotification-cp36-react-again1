// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const notificationsList = [
  {
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const renderListItem = each => {
  //   console.log(each)
  switch (each.heading) {
    case 'Success':
      return (
        <Notification key={each.heading} className="notification-item">
          <>
            <AiFillCheckCircle />
            <div className="heading-description-container">
              <h1 className="heading">{each.heading}</h1>
              <p className="description">{each.description}</p>
            </div>
          </>
        </Notification>
      )
    case 'Error':
      return (
        <Notification key={each.heading} className="notification-item">
          <>
            <RiErrorWarningFill />
            <div className="heading-description-container">
              <h1 className="heading">{each.heading}</h1>
              <p className="description">{each.description}</p>
            </div>
          </>
        </Notification>
      )
    case 'Warning':
      return (
        <Notification key={each.heading} className="notification-item">
          <>
            <MdWarning />
            <div className="heading-description-container">
              <h1 className="heading">{each.heading}</h1>
              <p className="description">{each.description}</p>
            </div>
          </>
        </Notification>
      )
    case 'Info':
      return (
        <Notification key={each.heading} className="notification-item">
          <>
            <MdInfo />
            <div className="heading-description-container">
              <h1 className="heading">{each.heading}</h1>
              <p className="description">{each.description}</p>
            </div>
          </>
        </Notification>
      )
    default:
      return null
  }
}

const AlertNotifications = () => (
  <div className="app-container">
    <h1>Alert Notifications</h1>

    <ul>{notificationsList.map(each => renderListItem(each))}</ul>
  </div>
)

export default AlertNotifications
