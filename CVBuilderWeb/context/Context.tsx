import { createContext, useState, useContext } from 'react';

export type Resume = {
    documentId?: string;
    firstName?: string;
    lastName?: string;
    jobTitle?: string;
    github?: string;
    linkedin?: string;
    portfolio?: string;
    email?: string;
    phone?: string;
    address?: string;
    summary?: string;
    themeColor?: string;
    experience?: Experience[];
    education?: Education[];
    skills?: Skill[];
}

export type Experience = {
    id?: string;
    position?: string;
    companyName?: string;
    city?: string;
    state?: string;
    startDate?: string;
    endDate?: string;
    currentlyWorking?: boolean;
    workSummery?: string;
}

export type Education = {
    id?: string;
    schoolName?: string;
    degree?: string;
    startDate?: string;
    endDate?: string;
    currentlyWorking?: boolean;
    major?: string;
    description?: string;
}

export type Skill = {
    id?: string;
    name?: string;
    rating?: string;
}

export type Project = {
    id?: string;
    name?: string;
    description?: string;
}


const ResumeContext = createContext<Resume | null>(
    null
);

type ResumeProviderProps = {
    children: React.ReactNode;
};

export function ResumeProvider({
    children,
}: ResumeProviderProps) {
    const [resumeInfo, setResumeInfo] = useState<Resume | null>(null);
    return (
        <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
            {children}
        </ResumeContext.Provider>
    );
}

export const useResume = () => {
    const context = useContext(ResumeContext);

    if (context === undefined)
        throw new Error('useResume must be used within a ResumeProvider');

    return context;
};
