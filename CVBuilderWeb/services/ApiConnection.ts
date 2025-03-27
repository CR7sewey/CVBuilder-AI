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
};

const createResume = async (data: ResumeData) => {
  const response = await axiosInstance.post("/user-resumes", data);
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
export { createResume };
