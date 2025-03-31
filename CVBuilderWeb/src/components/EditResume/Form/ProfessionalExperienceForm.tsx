import { Experience, Resume, useResume } from '../../../../context/Context'
import React, { useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { v4 as uuidv4 } from 'uuid'
import { RichTextEditor } from './RichTextEditor'
import { toast } from 'react-toastify'


const ProfessionalExperienceForm = ({ resumeInfo, setEnableNextButton }: { resumeInfo: Resume | null, setEnableNextButton: (enable: boolean) => void }) => {
    const { resumeInfo: resInfo, setResumeInfo } = useResume();
    const [loading, setLoading] = useState(false)

    /* useEffect(() => {
         setEnableNextButton(false)
     }, [resumeInfo])*/

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        console.log(data)
        let experience = resInfo?.experience.sort((a: Experience, b: Experience) => new Date(b?.endDate ?? "").getTime() - new Date(a?.endDate ?? "").getTime()) ?? []
        const experienceIndex = experience.findIndex((exp: Experience) => exp.id === data.id)
        console.log(experienceIndex)
        if (experienceIndex !== -1) {
            experience = experience.map((exp: Experience) => {
                if (exp.id === data.id) {
                    exp = data
                }
                exp.currentlyWorking = data.currentlyWorking === "true" ? true : false;
                return exp
            })
        } else {
            experience.push(data)
        }
        console.log(experience)
        setResumeInfo({ ...resInfo, experience: experience })
        console.log(resInfo)

        try {
            setLoading(true)
            toast.success("Experience updated successfully")
            //await updateResume(resumeInfo?.documentId ?? "", data: {experience: experience})

            await new Promise(resolve => setTimeout(resolve, 3000))
        } catch (error) {
            console.error("Error updating resume:", error);
            toast.error("Error updating resume, please try again later")
            throw error;
        } finally {

            setLoading(false)
            setEnableNextButton(true)
        }

    }

    const handleAddExperience = () => {
        const id = uuidv4()
        setResumeInfo({ ...resInfo, experience: [...(resInfo?.experience ?? []), { id: id, position: "", companyName: "", city: "", state: "", startDate: "", endDate: "", workSummery: "" }] })
    }

    const handleDeleteExperience = (id?: string) => {
        if (id) {
            setResumeInfo({ ...resInfo, experience: (resInfo?.experience ?? []).filter((exp: Experience) => exp.id !== id) })
        }
    }

    const handleChangeExperience = (id?: string, field?: string, value?: string) => {
        console.log(id, field, value, "AQI")
        if (id) {
            setResumeInfo({ ...resInfo, experience: resInfo?.experience.map((exp: Experience) => exp.id === id ? { ...exp, [field ?? ""]: value ?? "" } : exp) ?? [] })
        }
    }

    return (
        <div >
            <h2 className='text-lg font-bold'>Professional Experience</h2>
            <p className='text-sm text-gray-500 mb-4'>Your Professional Experience</p>

            {resumeInfo?.experience?.map((experience) => (
                <form method='post' onSubmit={handleSubmit}>
                    <Card className='flex flex-col grid gap-4 p-4 mt-2 border-0 shadow-xl'>
                        <Input type='hidden' name='id' defaultValue={experience.id} />
                        <Input type='hidden' name='currentlyWorking' defaultValue={experience.currentlyWorking ? "true" : "false"} />
                        <div className='flex flex-col grid grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='position' className='text-sm font-bold'>Position Title</Label>
                                <Input type='text' id='position' name='position' placeholder='Position' defaultValue={experience.position} required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='companyName' className='text-sm font-bold'>Company Name</Label>
                                <Input type='text' id='companyName' name='companyName' placeholder='Company Name' defaultValue={experience.companyName} required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='city' className='text-sm font-bold'>City</Label>
                                <Input type='text' id='city' name='city' placeholder='City' defaultValue={experience.city} required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='state' className='text-sm font-bold'>State</Label>
                                <Input type='text' id='state' name='state' placeholder='State' defaultValue={experience.state} required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='startDate' className='text-sm font-bold'>Start Date</Label>
                                <Input type='date' id='startDate' name='startDate' placeholder='Start Date' defaultValue={experience.startDate} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='endDate' className='text-sm font-bold'>End Date</Label>
                                <Input type='date' id='endDate' name='endDate' placeholder='End Date' defaultValue={experience.endDate} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>

                            <RichTextEditor value={experience.workSummery ?? ""} setValue={(value) => handleChangeExperience(experience?.id ?? "", "workSummery", value)} expId={experience.id ?? ""} />
                            <Input type='hidden' id='workSummery' name='workSummery' placeholder='Work Summary' defaultValue={experience.workSummery} />
                        </div>
                        <div className='flex justify-end gap-2'>
                            <Button type='button' className='mt-4 bg-red-500 hover:bg-red-600' onClick={() => handleDeleteExperience(experience.id)}>Delete</Button>
                            <Button type='submit' className='mt-4 bg-green-500 hover:bg-green-600' disabled={loading}>{loading ? <LoaderCircle className='w-4 h-4 animate-spin' /> : "Save"}</Button>
                        </div>

                    </Card>
                </form>
            ))}
            <Button type='button' className='mt-4' onClick={handleAddExperience}>Add Experience</Button>
        </div>
    )
}


export default ProfessionalExperienceForm