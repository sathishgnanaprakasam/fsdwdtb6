import instance from "./instance";

const jobServices = {
    getAllJobs: async () => {
        return await instance.get('/jobs');
    },
    getJobByID: async (id) => {
        return await instance.get(`/jobs/${id}`);
    }
}

export default jobServices;