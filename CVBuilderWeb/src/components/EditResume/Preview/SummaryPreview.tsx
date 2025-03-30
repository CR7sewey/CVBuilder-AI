import React from 'react'
import { Resume } from '../../../../context/Context'

export const SummaryPreview = ({ resumeInfo }: { resumeInfo: Resume }) => {
    return (
        <div>
            <h2 className='text-left font-bold text-sm mb-2' >Summary</h2>
            <hr style={{ borderColor: resumeInfo?.themeColor }} />
            <p className='text-xs text-gray-500'>{resumeInfo?.summary}</p>
        </div>
    )
}
