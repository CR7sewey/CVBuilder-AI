import React from 'react'
import { useResume } from '../../../context/Context';
import { PersonalDetailPreview } from './Preview/PersonalDetailPreview';
import { SummaryPreview } from './Preview/SummaryPreview';
import { ProfessionalExperiencePreview } from './Preview/ProfessionalExperiencePreview';
import { EducationPreview } from './Preview/EducationPreview';
import { SkillsPreview } from './Preview/SkillsPreview';

export const ResumePreview = () => {
    const { resumeInfo } = useResume();

    return (
        <div className='shadow-lg h-full p-8 border-t-[20px]' style={{ borderColor: resumeInfo?.themeColor }}>
            {/** Personal Detail */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
            {/** Summary */}
            {resumeInfo?.summary && <SummaryPreview resumeInfo={resumeInfo} />}
            {/** Work Experience */}
            {resumeInfo?.experience && resumeInfo?.experience.length > 0 && <ProfessionalExperiencePreview resumeInfo={resumeInfo} />}
            {/** Education */}
            {resumeInfo?.education && resumeInfo?.education.length > 0 && <EducationPreview resumeInfo={resumeInfo} />}
            {/** Skills */}
            {resumeInfo?.skills && resumeInfo?.skills.length > 0 && <SkillsPreview resumeInfo={resumeInfo} />}
            {/** Projects */}</div>
    )
}
