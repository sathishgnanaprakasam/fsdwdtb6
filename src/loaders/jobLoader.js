import jobServices from "../services/jobServices";

const jobLoader = async ({ params }) => {
    try {
        const data = await jobServices.getJobByID(params.id);

        return data.data;
    } catch (error) {
        return null;
    }
}

export default jobLoader;