import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResumes, ResumeData } from 'services/ApiConnection'
import { useUser } from '@clerk/clerk-react'

const EditResume = () => {
    const { resumeId } = useParams()
    const [resume, setResume] = useState<ResumeData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { user } = useUser()
    useEffect(() => {
        const fetchResume = async () => {
            setLoading(true)
            try {
                const response = {
                    userId: "1",
                    title: "CV 1",
                    userEmail: "test@test.com",
                    userName: "Test User",
                    resumeId: "1"
                } //await getResumes(user?.primaryEmailAddress?.emailAddress ?? "", resumeId)
                setResume(response as ResumeData)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchResume()
    }, [resumeId])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }


    return (
        <div>EditResume {resume?.title}</div>
    )
}

export default EditResume
