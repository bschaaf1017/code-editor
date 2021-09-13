import React from 'react'
import SignIn from '../../../auth/SignIn'

const UnauthenticatedButtons = (): React.ReactElement => {
  return (
    <div>
      <SignIn />
    </div>
  )
}

export default UnauthenticatedButtons
