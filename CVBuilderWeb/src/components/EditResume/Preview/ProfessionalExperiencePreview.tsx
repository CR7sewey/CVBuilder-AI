import React from 'react'
import { Experience, Resume } from '../../../../context/Context'
export const ProfessionalExperiencePreview = ({ resumeInfo }: { resumeInfo: Resume }) => {

    const experience = resumeInfo?.experience.sort((a: Experience, b: Experience) => new Date(b?.endDate ?? "").getTime() - new Date(a?.endDate ?? "").getTime()) ?? []
    return (
        <div className='my-6'>
            <h2 className='text-left font-bold text-sm mb-2' >Professional Experience</h2>
            <hr style={{ borderColor: resumeInfo?.themeColor }} />
            {experience?.map((experience) => (
                <div key={experience.id}>
                    <h2 className='text-left font-bold text-md mt-1 '>{experience.position}</h2>
                    <div className='flex justify-between'>
                        <h2 className='flex justify-between text-xs mb-2'>{experience?.companyName} | {experience?.city}, {experience?.state}</h2>
                        <span className=' flex justify-between text-xs mb-2'>{experience?.startDate} To {experience?.currentlyWorking ? "Present" : experience?.endDate}</span>
                    </div>

                    <div className='text-xs ' dangerouslySetInnerHTML={{ __html: experience.workSummery ?? "" }} />
                </div>
            ))}
        </div>
    )
}