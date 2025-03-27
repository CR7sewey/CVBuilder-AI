import axios from "axios";
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
  userId: string;
  title: string;
  userEmail: string;
  userName: string;
  resumeId: string;
};

const createResume = async (data: ResumeData) => {
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
export { createResume, getResumes, type ResumeData };
