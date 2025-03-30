import React, { useState } from 'react'
import { Resume, useResume } from '../../../../context/Context'
import { Label } from '../../ui/label'
import { ChevronLeft, Loader2, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form } from 'react-router-dom'
import { updateResume } from '../../../../services/ApiConnection'
export const PersonalDetailForm = ({ resumeInfo, setEnableNextButton }: { resumeInfo: Resume | null, setEnableNextButton: (enable: boolean) => void }) => {

    const [loading, setLoading] = useState(false)
    const { resumeInfo: resInfo, setResumeInfo } = useResume();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        setResumeInfo({ ...resInfo, ...data })
        console.log(resInfo)

        try {
            setLoading(true)
            //await updateResume(resumeInfo?.documentId ?? "", data)

            await new Promise(resolve => setTimeout(resolve, 3000))
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
            <h2 className='text-lg font-bold'>Personal Details</h2>
            <p className='text-sm text-gray-500 mb-4'>Your Basic Information</p>
            <form method='post' onSubmit={handleSubmit}>
                <div className='flex flex-col grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='firstName' className='text-sm font-bold'>Full Name</Label>
                        <Input type='text' id='firstName' name='firstName' placeholder='firstName' defaultValue={resumeInfo?.firstName} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='lastName' className='text-sm font-bold'>Last Name</Label>
                        <Input type='text' id='lastName' name='lastName' placeholder='lastName' defaultValue={resumeInfo?.lastName} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='email' className='text-sm font-bold'>Email</Label>
                        <Input type='email' id='email' name='email' placeholder='Email' defaultValue={resumeInfo?.email} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='phone' className='text-sm font-bold'>Phone</Label>
                        <Input type='tel' id='phone' name='phone' placeholder='Phone' defaultValue={resumeInfo?.phone} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='address' className='text-sm font-bold'>Address</Label>
                        <Input type='text' id='address' name='address' placeholder='Address' defaultValue={resumeInfo?.address} required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='linkedin' className='text-sm font-bold'>LinkedIn</Label>
                        <Input type='text' id='linkedin' name='linkedin' placeholder='LinkedIn' defaultValue={resumeInfo?.linkedin} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='github' className='text-sm font-bold'>GitHub</Label>
                        <Input type='text' id='github' name='github' placeholder='GitHub' defaultValue={resumeInfo?.github} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='portfolio' className='text-sm font-bold'>Portfolio</Label>
                        <Input type='text' id='portfolio' name='portfolio' placeholder='Portfolio' defaultValue={resumeInfo?.portfolio} />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Button type='submit' className='mt-4' disabled={loading}>{loading ? <LoaderCircle className='w-4 h-4 animate-spin' /> : "Save"}</Button>
                </div>
            </form>
        </div>
    )
}
