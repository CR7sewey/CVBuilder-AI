import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { Resume, useResume } from '../../../../context/Context'
import { Button } from '@/components/ui/button'
import { updateResume } from '../../../../services/ApiConnection'
import { Loader2, LoaderCircle } from 'lucide-react'
export const SummaryPreviewForm = ({ resumeInfo, setEnableNextButton }: { resumeInfo: Resume | null, setEnableNextButton: (enable: boolean) => void }) => {
    const { resumeInfo: resInfo, setResumeInfo } = useResume();
    const [loading, setLoading] = useState(false)
    console.log(resInfo)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        setResumeInfo({ ...resInfo, ...data })
        console.log(resInfo)

        try {
            setLoading(true)
            await updateResume(resumeInfo?.documentId ?? "", data)
        } catch (error) {
            console.error("Error updating resume:", error);
            throw error;
        } finally {
            setLoading(false)
            setEnableNextButton(true)

        }

    }
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <Loader2 className='w-10 h-10 animate-spin' />
        </div>
    }
    return (
        <div >
            <h2 className='text-lg font-bold'>Summary</h2>
            <p className='text-sm text-gray-500 mb-4'>Insert a summary of your career goals and achievements</p>
            <form method='post' onSubmit={handleSubmit} className='flex flex-col gap-4'>

                <Textarea id='summary' defaultValue={resumeInfo?.summary} placeholder='Summary' maxLength={100} className='resize-none' />

                <div className='flex justify-end'>
                    <Button type='submit' className='mt-4'>Save</Button>
                </div>
            </form>
        </div>
    )
}
