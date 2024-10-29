import jobServices from '../services/jobServices';

const jobsLoader = async () => {
    try {
        const data = await jobServices.getAllJobs();

        return data.data;
    } catch (error) {
        return null;
    }
}

export default jobsLoader;