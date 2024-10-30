import instance from "./instance";

const jobServices = {
    getAllJobs: async () => {
        return await instance.get('/jobs');
    },
    getJobByID: async (id) => {
        return await instance.get(`/jobs/${id}`);
    },
    updateJob: async (id, job) => {
        return await instance.put(`/jobs/${id}`, job);
    }
}

export default jobServices;