import React, { useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Notebook, PlusSquare } from 'lucide-react'
import { DialogDemo } from './Dialog'
import { useNavigate } from 'react-router-dom'

const CVCard = ({ title, resumeId }: { title?: string, resumeId?: string }) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    if (title == null) {
        return (
            <DialogDemo open={open} setOpen={setOpen}>
                <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md duration-300 cursor-pointer border-dashed border-2 border-gray-300'>



                    <PlusSquare />



                </div>
            </DialogDemo>
        )
    }
    return (
        <div className='flex flex-col gap-2'>
            <Card onClick={() => navigate(`/dashboard/resume/${resumeId}/edit`)}
                className='p-14 bg-secondary flex items-center justify-center h-[280px] hover:scale-105 transition-all hover:shadow-md duration-300 cursor-pointer border-primary border rounder-lg shadow-pink-500'>
                <CardHeader>
                    <CardTitle>
                        <Notebook className='ml-2' />
                    </CardTitle>
                </CardHeader>
            </Card>
            <h2 className='text-center my-1 text-lg font-bold'>{title}</h2>
        </div>
    )
}

export default CVCard
