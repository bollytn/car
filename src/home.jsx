import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'

import Header from './components/Header'

const home = () => {
  return (
    <div>
      {/*<Button>Sign In</Button>*/}
      {/*<SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign In</Button>
      </SignInButton>*/}
      <Header />
    </div>
  )
}

export default home