import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"
const HomeLayout = () => {
    const { isSignedIn, isLoaded } = useUser()
    const signIn = !isSignedIn && isLoaded;
    return (
        <div>
            {!signIn ? <Outlet /> : <Navigate to="/auth/sign-in" />}
        </div>
    )
}

export default HomeLayout
