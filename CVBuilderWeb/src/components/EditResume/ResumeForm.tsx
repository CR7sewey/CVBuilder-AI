import { useResume } from '../../../context/Context';
import React, { useState } from 'react'
import { PersonalDetailPreview } from './Preview/PersonalDetailPreview';
import { PersonalDetailForm } from './Form/PersonalDetailForm';
import { ChevronLeft, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SummaryPreviewForm } from './Form/SummaryPreviewForm';
export const ResumeForm = () => {
    const [theme, setTheme] = useState<string>('primary');
    const [activeFormIndex, setActiveFormIndex] = useState<number>(1);
    const [enableNextButton, setEnableNextButton] = useState<boolean>(false);
    const { resumeInfo } = useResume();

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4'>
            <div className='flex justify-between items-center mb-4'>
                <Button variant='outline' size='sm' className='flex gap-2'>
                    <LayoutGrid /> Theme
                </Button>
                <div className='flex gap-2'>
                    {activeFormIndex > 1 && (
                        <Button className='flex items-center gap-2' onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
                            <ChevronLeft className='w-4 h-4' />
                        </Button>
                    )}
                    <Button className='flex items-center gap-2' onClick={() => setActiveFormIndex(activeFormIndex + 1)} disabled={!enableNextButton}>
                        Next
                    </Button>
                </div>
            </div>
            {activeFormIndex === 1 && <PersonalDetailForm resumeInfo={resumeInfo} setEnableNextButton={setEnableNextButton} />}
            {activeFormIndex === 2 && <SummaryPreviewForm resumeInfo={resumeInfo} setEnableNextButton={setEnableNextButton} />}

        </div>)
}
