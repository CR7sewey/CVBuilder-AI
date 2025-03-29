import React from 'react'
import { Resume } from '../../../../context/Context'
export const PersonalDetailPreview = ({ resumeInfo }: { resumeInfo: Resume }) => {
    return (
        <div>
            <h2 className='font-bold text-2xl text-center' >{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
            <h2 className='text-center text-sm font-medium'>{resumeInfo?.jobTitle}</h2>
            <h2 className='text-center text-sm font-normal'>{resumeInfo?.address}</h2>

            <div className='flex justify-between'>
                <h2 className='text-xs font-normal'>Email: {resumeInfo?.email}</h2>
                <h2 className='text-xs font-normal'>Phone: {resumeInfo?.phone}</h2>
            </div>

            <hr className='my-2 border-[1.5px]' style={{ borderColor: resumeInfo?.themeColor }} />
        </div>
    )
}
