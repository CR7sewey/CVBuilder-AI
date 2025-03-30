import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResumes, ResumeData } from 'services/ApiConnection'
import { useUser } from '@clerk/clerk-react'
import { ResumePreview } from '@/components/EditResume/ResumePreview'
import { ResumeForm } from '@/components/EditResume/ResumeForm'
import { Resume, useResume } from '../../../context/Context';

const EditResume = () => {
    const { resumeId } = useParams()
    const [resume, setResume] = useState<ResumeData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { resumeInfo, setResumeInfo } = useResume();

    const { user } = useUser()
    useEffect(() => {
        const fetchResume = async () => {
            setLoading(true)
            try {
                const response: ResumeData = {
                    firstName: "John",
                    lastName: "Doe",
                    jobTitle: "Software Engineer",
                    github: "https://github.com/john-doe",
                    linkedin: "https://linkedin.com/in/john-doe",
                    portfolio: "https://portfolio.com/john-doe",
                    email: "john.doe@example.com",
                    phone: "1234567890",
                    address: "123 Main St, Anytown, USA",
                    summary: "I am a software engineer with a passion for building scalable and efficient systems.",
                    themeColor: "#b91717",
                    experience: [
                        {
                            id: "1",
                            position: "Software Engineer",
                            companyName: "Google",
                            city: "Anytown",
                            state: "USA",
                            startDate: "2020-01-01",
                            currentlyWorking: true,
                            workSummery: "I worked on the Google Cloud Platform."
                        },
                        {
                            id: "2",
                            position: "Software Engineer",
                            companyName: "Google",
                            city: "Anytown",
                            state: "USA",
                            startDate: "2020-01-01",
                            endDate: "2021-01-01",
                            currentlyWorking: false,
                            workSummery: "I worked on the Google Cloud Platform."
                        }
                    ],
                    education: [
                        {
                            id: "1",
                            schoolName: "University of Anytown",
                            degree: "Bachelor's Degree",
                            startDate: "2020-01-01",
                            endDate: "2021-01-01",
                            currentlyWorking: false,
                            major: "Computer Science",
                            description: "I graduated from the University of Anytown with a Bachelor's Degree in Computer Science."
                        },
                        {
                            id: "2",
                            schoolName: "University of Anytown",
                            degree: "Bachelor's Degree",
                            startDate: "2020-01-01",
                            endDate: "2021-01-01",
                            currentlyWorking: false,
                            major: "Computer Science",
                            description: "I graduated from the University of Anytown with a Bachelor's Degree in Computer Science."
                        }
                    ],
                    skills: [
                        {
                            id: "1",
                            name: "React",
                            rating: "5"
                        },
                        {
                            id: "2",
                            name: "React",
                            rating: "5"
                        },
                        {
                            id: "3",
                            name: "React",
                            rating: "5"
                        },


                    ]
                } //await getResumes(user?.primaryEmailAddress?.emailAddress ?? "", resumeId)
                setResume(response as ResumeData)
                setResumeInfo(response as Resume)
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
        <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            {/** Form Section */}
            <ResumeForm />
            {/** Preview Section */}
            <ResumePreview />



        </div>
    )
}

export default EditResume
