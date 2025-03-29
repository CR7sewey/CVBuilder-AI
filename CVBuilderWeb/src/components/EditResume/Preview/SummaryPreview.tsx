import React from 'react'
import { Resume } from '../../../../context/Context'

export const SummaryPreview = ({ resumeInfo }: { resumeInfo: Resume }) => {
    return (
        <div>
            <h2 className='text-md font-bold'>Summary</h2>
            <p className='text-xs text-gray-500'>{resumeInfo?.summary}</p>
        </div>
    )
}
