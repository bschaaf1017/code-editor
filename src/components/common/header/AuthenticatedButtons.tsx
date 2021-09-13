import React from 'react'
import SignOut from '../../../auth/SignOut'

const AuthenticatedButtons = (): React.ReactElement => {
  return (
    <div>
      <SignOut />
    </div>
  )
}

export default AuthenticatedButtons
