import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import CVCard from '@/components/CVCard'

const Dashboard = () => {
    const { user } = useUser()
    const [cvs, setCvs] = useState<any[]>([])
    return (
        <div className='p-10 md:px-20 lg:px-32'>
            <h1 className='text-3xl font-bold'>Welcome {user?.fullName}</h1>
            <div className='flex flex-col gap-4'>
                <p className='text-lg'>You can check your CVs and create new ones below</p>

                <p className='text-lg'>Currently you have {cvs.length} CVs</p>
                <p className='text-lg'>PS: Rembember - this CVs are AI generated for performance purposes, so please be as specific as possible when creating your CV!</p>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg font-bold'>Your CVs</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>

                        <CVCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
