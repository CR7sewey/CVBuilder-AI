import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { createResume } from "../../services/ApiConnection";
import { useUser } from "@clerk/clerk-react"
import { Loader2 } from "lucide-react"

export function DialogDemo({ open, setOpen, children }: { open: boolean, setOpen: (open: boolean) => void, children: React.ReactNode }) {

    const [title, setTitle] = useState("")
    const { user } = useUser()

    const [loading, setLoading] = useState(false)

    const onCreateResume = async () => {
        const id = uuidv4()
        console.log(id, title)
        setOpen(false)
        setTitle("")
        const data = {
            userId: id,
            title: title,
            userEmail: user?.primaryEmailAddress?.emailAddress ?? "",
            userName: user?.fullName ?? ""

        }
        setLoading(true)
        try {
            const response = "A" //await createResume(data)
            console.log(response)
            //            await new Promise(resolve => setTimeout(resolve, 5000))

        } catch (error: any) {
            console.log(error)
        }
        setLoading(false)
    }



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Resume</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">Title</Label>
                        <Input id="title" className="col-span-3 mt-2" placeholder="Software Engineer" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                </div>
                <DialogFooter>
                    <Button type="submit" onClick={onCreateResume} disabled={title.trim() === "" || loading}>{loading ? <Loader2 className="animate-spin" /> : "Create"}</Button>
                    <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
