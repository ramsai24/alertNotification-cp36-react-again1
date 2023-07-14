// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)

  return (
    <div className="heading-description-container">
      {children}

      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
