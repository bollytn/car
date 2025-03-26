{/*import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'*/}

import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'

const home = () => {
  return (
    <div>
      {/*<Button>Sign In</Button>*/}
      {/*<SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign In</Button>
      </SignInButton>*/}
      <Header />
      <Hero />
      <Category/>
    </div>
  )
}

export default home