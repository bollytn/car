import { UserButton, useUser } from '@clerk/clerk-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom';

const Header = () => {

    const { user, isSignedIn } = useUser()
    console.log(user);

    return (
        <div className="flex justify-between items-center p-5 shadow-sm">
            <img src="/car.svg" alt="car" width={100} height={100} className='object-contain' />

            <ul className='hidden md:flex  gap-16'>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
            </ul>

            {isSignedIn ?
                <div className='flex items-center gap-4'>
                    <UserButton />
                    <Link to='/profile'>
                        <Button className="linear">Submit Listing</Button>
                    </Link>

                </div>
                :
                <Button className="linear"> Sign in </Button>
            }
        </div>
    )
}

export default Header