import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { Resume, useResume } from '../../../../context/Context'
import { Button } from '@/components/ui/button'
import { updateResume } from '../../../../services/ApiConnection'
import { Brain, Loader2, LoaderCircle } from 'lucide-react'
import { GeminiService } from '../../../../services/GeminiService'
export const SummaryPreviewForm = ({ resumeInfo, setEnableNextButton }: { resumeInfo: Resume | null, setEnableNextButton: (enable: boolean) => void }) => {
    const { resumeInfo: resInfo, setResumeInfo } = useResume();
    const [loading, setLoading] = useState(false)
    const [aiGeneratedSummary, setAiGeneratedSummary] = useState<string[]>([])
    console.log(resInfo)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        setResumeInfo({ ...resInfo, summary: data.summary as string })
        console.log(resInfo)

        try {
            setLoading(true)
            //await updateResume(resumeInfo?.documentId ?? "", data)
        } catch (error) {
            console.error("Error updating resume:", error);
            throw error;
        } finally {
            setLoading(false)
            setEnableNextButton(true)

        }

    }

    const generateSummary = async () => {
        setAiGeneratedSummary([])
        setLoading(true)
        const prompt = `
        Generate a summary for a curriculum vitae of the following resume:
        Name: ${resumeInfo?.firstName}
        Job Title: ${resumeInfo?.jobTitle}
        Education: ${resumeInfo?.education}
        Experience: ${resumeInfo?.experience}
        Skill1: ${resumeInfo?.skills?.[0]?.name}
        Skill2: ${resumeInfo?.skills?.[1]?.name}
        Skill3: ${resumeInfo?.skills?.[2]?.name}
        Please generate a summary of the resume that is at most 300 characters long.
        `
        //const summary = await GeminiService(prompt)
        for (let i = 0; i < 3; i++) {
            const summary = await GeminiService(prompt)
            setAiGeneratedSummary(aiGeneratedSummary => [...aiGeneratedSummary, summary])
        }
        //console.log(summary)
        setLoading(false)
    }

    return (
        <div >
            <h2 className='text-lg font-bold'>Summary</h2>
            <p className='text-sm text-gray-500 mb-4'>Insert a summary of your career goals and achievements</p>
            <form method='post' onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <Button type='button' variant='outline' className='mt-4 w-fit self-end border-t-primary border-t-2 border-r-primary border-r-2 border-b-primary border-b-2 border-l-primary border-l-2 hover:bg-fuchsia-200' onClick={() => generateSummary()}>
                    <Brain /> AI Generated Summary
                </Button>
                <Textarea id='summary' name='summary' defaultValue={resumeInfo?.summary} placeholder='Summary' maxLength={300} className='resize-none' />

                <div className='flex justify-end'>
                    <Button type='submit' className='mt-4' disabled={loading}>{loading ? <LoaderCircle className='w-4 h-4 animate-spin' /> : "Save"}</Button>
                </div>
            </form>

            {aiGeneratedSummary && <div className='mt-4'>
                <h2 className='text-lg font-bold'>AI Generated Summary</h2>
                {aiGeneratedSummary.map((summary, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <p className='text-sm text-gray-500 mb-4'>{summary}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}
