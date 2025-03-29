import React from 'react'
import { Resume } from '../../../../context/Context';

export const SkillsPreview = ({ resumeInfo }: { resumeInfo: Resume }) => {
    return (
        <div className='my-6'>
            <h2 className='text-left font-bold text-sm mb-2' >Skills</h2>
            <hr style={{ borderColor: resumeInfo?.themeColor }} />
            <div className='grid grid-cols-2 gap-3'>
                {resumeInfo?.skills?.map((skill) => (
                    <div key={skill.id} className='flex justify-between items-center'>
                        <h2 className='text-xs'>{skill.name}</h2>
                        <div className='h-2 bg-gray-200 w-[120px]'>
                            <div className='h-2' style={{ width: `${skill.rating}%`, backgroundColor: resumeInfo?.themeColor }}></div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
