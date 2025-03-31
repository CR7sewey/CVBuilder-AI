import React, { useState } from 'react'
import { Education, Experience, Resume, useResume } from '../../../../context/Context'
import { v4 as uuidv4 } from 'uuid';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { RichTextEditor } from './RichTextEditor';
import { toast } from 'react-toastify';
export const EducationalForm = ({ resumeInfo }: { resumeInfo: Resume }) => {
    const { resumeInfo: resInfo, setResumeInfo } = useResume();
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        console.log(data)
        let education = resInfo?.education.sort((a: Education, b: Education) => new Date(b?.endDate ?? "").getTime() - new Date(a?.endDate ?? "").getTime()) ?? []
        const educationIndex = education.findIndex((exp: Education) => exp.id === data.id)
        console.log(educationIndex)
        if (educationIndex !== -1) {
            education = education.map((exp: Education) => {
                if (exp.id === data.id) {
                    exp = data
                }
                exp.currentlyWorking = data.currentlyWorking === "true" ? true : false;
                return exp
            })
        } else {
            education.push(data)
        }
        console.log(education)
        setResumeInfo({ ...resInfo, education: education })
        console.log(resInfo)

        try {
            setLoading(true)
            toast.success("Education updated successfully")
            //await updateResume(resumeInfo?.documentId ?? "", data: {education: education})

            await new Promise(resolve => setTimeout(resolve, 3000))
        } catch (error) {
            console.error("Error updating resume:", error);
            toast.error("Error updating resume, please try again later")
            throw error;
        } finally {

            setLoading(false)

        }

    }


    const handleAddEducation = () => {
        const id = uuidv4()
        setResumeInfo({ ...resInfo, education: [...(resInfo?.education ?? []), { id: id, schoolName: "", degree: "", startDate: "", endDate: "", currentlyWorking: false, major: "", description: "" }] })
    }

    const handleDeleteEducation = (id?: string) => {
        if (id) {
            setResumeInfo({ ...resInfo, education: (resInfo?.education ?? []).filter((exp: Education) => exp.id !== id) })
        }
    }

    const handleChangeEducation = (id?: string, field?: string, value?: string) => {
        console.log(id, field, value, "AQI")
        if (id) {
            setResumeInfo({ ...resInfo, education: resInfo?.education.map((exp: Education) => exp.id === id ? { ...exp, [field ?? ""]: value ?? "" } : exp) ?? [] })
        }
    }

    return (
        <div >
            <h2 className='text-lg font-bold'>Education</h2>
            <p className='text-sm text-gray-500 mb-4'>Your Education</p>

            {resumeInfo?.education?.map((education) => (
                <form method='post' onSubmit={handleSubmit}>
                    <Card className='flex flex-col grid gap-4 p-4 mt-2 border-0 shadow-xl'>
                        <Input type='hidden' name='id' defaultValue={education.id} />
                        <Input type='hidden' name='currentlyWorking' defaultValue={education.currentlyWorking ? "true" : "false"} />
                        <div className='flex flex-col grid grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='schoolName' className='text-sm font-bold'>School Name</Label>
                                <Input type='text' id='schoolName' name='schoolName' placeholder='School Name' defaultValue={education.schoolName} required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='degree' className='text-sm font-bold'>Degree</Label>
                                <Input type='text' id='degree' name='degree' placeholder='Degree' defaultValue={education.degree} required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='startDate' className='text-sm font-bold'>Start Date</Label>
                                <Input type='date' id='startDate' name='startDate' placeholder='Start Date' defaultValue={education.startDate} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='endDate' className='text-sm font-bold'>End Date</Label>
                                <Input type='date' id='endDate' name='endDate' placeholder='End Date' defaultValue={education.endDate} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='major' className='text-sm font-bold'>Major</Label>
                                <Input type='text' id='major' name='major' placeholder='Major' defaultValue={education.major} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>

                            <RichTextEditor value={education.description ?? ""} setValue={(value) => handleChangeEducation(education?.id ?? "", "description", value)} expId={education.id ?? ""} />
                            <Input type='hidden' id='description' name='description' placeholder='Description' defaultValue={education.description} />
                        </div>
                        <div className='flex justify-end gap-2'>
                            <Button type='button' className='mt-4 bg-red-500 hover:bg-red-600' onClick={() => handleDeleteEducation(education.id)}>Delete</Button>
                            <Button type='submit' className='mt-4 bg-green-500 hover:bg-green-600' disabled={loading}>{loading ? <LoaderCircle className='w-4 h-4 animate-spin' /> : "Save"}</Button>
                        </div>

                    </Card>
                </form>
            ))}
            <Button type='button' className='mt-4' onClick={handleAddEducation}>Add Education</Button>
        </div>
    )
}

/*
 id?: string;
    schoolName?: string;
    degree?: string;
    startDate?: string;
    endDate?: string;
    currentlyWorking?: boolean;
    major?: string;
    description?: string;
    */