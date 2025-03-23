import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'

import Header from './components/header'

const home = () => {
  return (
    <div>
      {/*<SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign In</Button>
      </SignInButton>*/}
      <Header />
    </div>
  )
}

export default home