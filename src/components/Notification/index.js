// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  const {heading, description} = children[0]

  return (
    <div className="heading-description-container">
      {children[1]}
      <h1 className="heading">{heading}</h1>
      <p className="description">{description}</p>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
