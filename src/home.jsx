import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'

import Header from './components/Header'
import Hero from './components/Hero'

const home = () => {
  return (
    <div>
      {/*<Button>Sign In</Button>*/}
      {/*<SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign In</Button>
      </SignInButton>*/}
      <Header />
      <Hero />
    </div>
  )
}

export default home