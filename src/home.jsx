{/*import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'*/}

import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchCar from './components/MostSearchCar'

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
      <MostSearchCar/>
    </div>
  )
}

export default home