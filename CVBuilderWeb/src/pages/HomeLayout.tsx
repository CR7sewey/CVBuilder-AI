import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"
import Header from "../components/Header"
const HomeLayout = () => {
    const { isSignedIn, isLoaded } = useUser()
    const signIn = !isSignedIn && isLoaded;
    return (
        <div>
            <Header />
            <div className='p-10 md:px-20 lg:px-32'>
                {!signIn ? <Outlet /> : <Navigate to="/auth/sign-in" />}
            </div>
        </div>
    )
}

export default HomeLayout
