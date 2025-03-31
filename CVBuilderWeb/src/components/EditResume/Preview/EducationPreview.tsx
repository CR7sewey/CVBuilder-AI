import React from 'react'
import { Education, Resume } from '../../../../context/Context';

export const EducationPreview = ({ resumeInfo }: { resumeInfo: Resume }) => {

    const education = resumeInfo?.education?.sort((a: Education, b: Education) => new Date(b?.endDate ?? "").getTime() - new Date(a?.endDate ?? "").getTime()) ?? []
    return (
        <div className='my-6'>
            <h2 className='text-left font-bold text-sm mb-2' >Education</h2>
            <hr style={{ borderColor: resumeInfo?.themeColor }} />
            {education?.map((education) => (
                <div key={education.id}>
                    <h2 className='text-left font-bold text-md mt-1 '>{education.degree} in {education.major}</h2>
                    <div className='flex justify-between'>
                        <h2 className='flex justify-between text-xs mb-2'>{education?.schoolName}</h2>
                        <span className=' flex justify-between text-xs mb-2'>{education?.startDate} To {education?.currentlyWorking ? "Present" : education?.endDate}</span>
                    </div>
                    <div className='text-xs ' dangerouslySetInnerHTML={{ __html: education.description ?? "" }} />
                </div>
            ))}
        </div>
    )
}
