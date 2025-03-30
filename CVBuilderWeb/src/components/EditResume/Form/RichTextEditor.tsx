import React, { useState } from 'react'
import { EditorProvider, Editor, Toolbar, BtnBold, BtnItalic, BtnUnderline, BtnStrikeThrough, Separator, BtnNumberedList, BtnBulletList, BtnLink, BtnClearFormatting, HtmlButton, BtnStyles } from 'react-simple-wysiwyg'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Brain, LoaderCircle } from 'lucide-react'
import { Experience, useResume } from '../../../../context/Context'
import { GeminiService } from '../../../../services/GeminiService'
import { toast } from 'react-toastify'
import { type ResumeData } from '../../../../services/ApiConnection'
export const RichTextEditor = ({ value, setValue, expId }: { value: string, setValue: (value: string) => void, expId: string }) => {
    const { resumeInfo } = useResume()
    const [loading, setLoading] = useState(false)
    const generateSummary = async () => {

        const experience = resumeInfo?.experience?.findIndex((exp: Experience) => exp.id === expId)

        try {

            console.log(resumeInfo?.experience?.[experience], "Resume Info 3", expId)
            if (!resumeInfo?.experience?.[experience]?.position || !resumeInfo?.experience?.[experience]?.companyName) {
                console.log(resumeInfo, "Resume Info")
                toast.error("Please fill the positions above + save the changes")
                return;
            }
        } catch (error: any) {
            toast.error("Error: " + error.message)
            return;
        }
        setLoading(true)
        const prompt = `
        Generate a summary for a job resume:
        Position Title: ${resumeInfo?.experience?.[experience]?.position}
        Company Name: ${resumeInfo?.experience?.[experience]?.companyName}
        Please generate a summary of the job experience with bullet points that is at most 750 characters long, in HTML format.
        `
        //const summary = await GeminiService(prompt)
        const summary = await GeminiService(prompt)
        setValue(summary.replace("```html", "").replace("```", ""))
        setLoading(false)
    }
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>

                <Label htmlFor='workSummery' className='text-sm font-bold'>Work Summary</Label>
                <Button type='button' disabled={loading} variant='outline' className='mt-4 w-fit self-end border-t-primary border-t-2 border-r-primary border-r-2 border-b-primary border-b-2 border-l-primary border-l-2 hover:bg-fuchsia-200' onClick={() => generateSummary()}>
                    {loading ? <LoaderCircle className='w-4 h-4 animate-spin' /> : <Brain />} AI Generated Work Summary
                </Button>
            </div>
            <EditorProvider>
                <Editor className='w-full' value={value} onChange={(event) => setValue(event.target.value)}>
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                        <BtnClearFormatting />
                        <HtmlButton />
                        <Separator />
                        <BtnStyles />
                        /</Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    )
}
