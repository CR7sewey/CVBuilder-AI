import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.svg'
import { Button } from './ui/button'

const Header = () => {
    const { isSignedIn } = useUser()
    return (
        <div className='flex justify-between items-center p-3 px-5 shadow-md bg-background'>
            <Link to="/">
                <img src={logo} alt="logo" width={50} height={50} />
            </Link>
            {isSignedIn ? <div className='flex items-center gap-2'>

                <Button variant="outline" className='bg-primary text-primary-foreground' asChild>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </Button>
                <UserButton />
            </div> :
                <Button asChild>
                    <Link to="/auth/sign-in">
                        Login
                    </Link>
                </Button>}
        </div>
    )
}

export default Header
