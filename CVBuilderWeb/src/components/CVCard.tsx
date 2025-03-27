import React, { useState } from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { PlusSquare } from 'lucide-react'
import { DialogDemo } from './Dialog'
const CVCard = ({ title, description, image }: { title?: string, description?: string, image?: string }) => {
    const [open, setOpen] = useState(false)

    if (title == null) {
        return (
            <DialogDemo open={open} setOpen={setOpen}>
                <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md duration-300 cursor-pointer border-dashed border-2 border-gray-300'>



                    <PlusSquare />



                </div>
            </DialogDemo>
        )
    }
    return (
        <div className='flex flex-col gap-2'>
            <Card>
                <CardHeader>
                    <CardTitle>CV 1</CardTitle>
                </CardHeader>
            </Card>

        </div>
    )
}

export default CVCard
