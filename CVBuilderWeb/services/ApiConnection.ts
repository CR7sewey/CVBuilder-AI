import axios from "axios";
import { Education, Experience, Skill } from "context/Context";
const url = "http://localhost:1337/api/";

const token = import.meta.env.VITE_STRAPI_API_KEY; // not defined yet

if (!token) {
  throw new Error("Missing STRAPI_API_KEY");
}

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    ContentType: "application/json",
  },
});

type ResumeData = {
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
};

const createResume = async (data: {
  userId: string;
  title: string;
  userEmail: string;
  userName: string;
}) => {
  const response = await axiosInstance.post("/user-resumes", data);
  return response.data;
};

const getResumes = async (
  userEmail: string,
  resumeId?: string
): Promise<ResumeData[] | ResumeData> => {
  if (resumeId) {
    const response = await axiosInstance.get(
      `/user-resumes/${resumeId}?filters[userEmail][$eq]=${userEmail}`
    );
    return response.data;
  } else {
    const response = await axiosInstance.get(
      `/user-resumes?filters[userEmail][$eq]=${userEmail}`
    );
    return response.data;
  }
};

const updateResume = async (resumeId: string, data: ResumeData) => {
  const response = await axiosInstance.put(`/user-resumes/${resumeId}`, data);
  return response.data;
};

axiosInstance.interceptors.request.use(
  (request) => {
    // old version
    // request.headers.common['Accept'] = 'application/json';
    request.headers["Accept"] = "application/json";

    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
export { createResume, getResumes, type ResumeData, updateResume };
