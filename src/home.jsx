import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'

import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchCar from './components/MostSearchCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

const home = () => {
  return (
    <div>

      <SignInButton mode='modal' forceRedirectUrl='/'>
        <Button >Sign In</Button>
      </SignInButton>
      <Header />
      <Hero />
      <Category />
      <MostSearchCar />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default home