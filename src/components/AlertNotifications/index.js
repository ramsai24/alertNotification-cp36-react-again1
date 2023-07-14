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
  console.log(each)
  switch (each.heading) {
    case 'Success':
      return (
        <li key={each.heading} className="notification-item">
          <div className="heading-description-container">
            <Notification>
              {each}
              <AiFillCheckCircle />
            </Notification>
          </div>
        </li>
      )
    case 'Error':
      return (
        <li key={each.heading} className="notification-item">
          <div className="heading-description-container">
            <Notification>
              {each}
              <RiErrorWarningFill />
            </Notification>
          </div>
        </li>
      )
    case 'Warning':
      return (
        <li key={each.heading} className="notification-item">
          <div className="heading-description-container">
            <Notification>
              {each}
              <MdWarning />
            </Notification>
          </div>
        </li>
      )
    case 'Info':
      return (
        <li className="notification-item" key={each.heading}>
          <div className="heading-description-container">
            <Notification>
              {each}
              <MdInfo />
            </Notification>
          </div>
        </li>
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
