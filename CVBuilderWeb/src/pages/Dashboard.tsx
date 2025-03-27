import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import CVCard from '@/components/CVCard'
import { getResumes } from '../../services/ApiConnection'
import { type ResumeData } from '../../services/ApiConnection'
const Dashboard = () => {
    const { user } = useUser()
    const [cvs, setCvs] = useState<ResumeData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCvs = async () => {
            try {
                const mockResponse = [
                    {
                        userId: "1",
                        title: "CV 1",
                        userEmail: "test@test.com",
                        userName: "Test User",
                        resumeId: "1"
                    },
                    {
                        userId: "2",
                        title: "CV 2",
                        userEmail: "test2@test.com",
                        userName: "Test User 2",
                        resumeId: "2"
                    }
                ]
                const response = mockResponse
                //await getResumes(user?.primaryEmailAddress?.emailAddress ?? "")
                setCvs(response as ResumeData[])
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchCvs()
    }, [user])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h1 className='text-3xl font-bold'>Welcome {user?.fullName}</h1>
            <div className='flex flex-col gap-4'>
                <p className='text-lg'>You can check your CVs and create new ones below</p>

                <p className='text-lg'>Currently you have {cvs.length} CVs</p>
                <p className='text-lg'>PS: Rembember - this CVs are AI generated for performance purposes, so please be as specific as possible when creating your CV!</p>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg font-bold'>Your CVs</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        <CVCard />
                        {cvs.map((cv) => (
                            <CVCard key={cv.userId} title={cv.title} resumeId={cv.resumeId} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
