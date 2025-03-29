import React from 'react'
import { Resume } from '../../../../context/Context'

export const ProfessionalExperiencePreview = ({ resumeInfo }: { resumeInfo: Resume }) => {
    return (
        <div className='my-6'>
            <h2 className='text-left font-bold text-sm mb-2' >Professional Experience</h2>
            <hr style={{ borderColor: resumeInfo?.themeColor }} />
            {resumeInfo?.experience?.map((experience) => (
                <div key={experience.id}>
                    <h2 className='text-left font-bold text-md mt-1 '>{experience.title}</h2>
                    <div className='flex justify-between'>
                        <h2 className='flex justify-between text-xs mb-2'>{experience?.companyName} | {experience?.city}, {experience?.state}</h2>
                        <span className=' flex justify-between text-xs mb-2'>{experience?.startDate} - {experience?.endDate}</span>
                    </div>

                    <p className='text-xs my-2'>{experience.workSummery}</p>
                </div>
            ))}
        </div>
    )
}