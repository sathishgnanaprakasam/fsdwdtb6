import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import './Jobs.css';
import jobServices from "../services/jobServices";

const Jobs = () => {

    const jobs = useLoaderData();
    const [search] = useSearchParams();
    const query = search.get("q");
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/jobs/${id}`);
    }

    const handleFavoriteClick = async (id) => {
        // update the job with the given id for the isFavorite field
        try {
            await jobServices.updateJob(id, { isFavorite: !jobs.find(job => job.id === id).isFavorite });

            // reload the page
            navigate(`/jobs?q=${query}`);
        } catch (error) {
            alert("An error occurred while updating the job");
        }
    }

    return (
        <div
            className="container mx-8 my-8 mx-auto"
        >
            <h1
                className="text-2xl font-bold"
            >{query} Jobs</h1>

            <div>
                {
                    jobs.filter((job) => job.title.includes(query)).map(job => (
                        <div
                            key={job.id}
                            className="my-4 p-4 border border-gray-200 flex flex-col gap-2"
                            onClick={() => handleCardClick(job.id)}
                        >
                            <h2
                                className="text-lg font-bold"
                            >
                                {job.title}
                            </h2>

                            <h5
                                className="text-xs"
                            >
                                {job.company}
                            </h5>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center">
                                    <span className="material-symbols-outlined text-red-500">
                                        location_on
                                    </span>
                                    <span className="text-xs">
                                        {job.location}
                                    </span>
                                </div>

                                <div>
                                    <span className=
                                        {
                                            job.isFavorite ? "material-symbols-outlined filled-icon" : "material-symbols-outlined unfilled-icon"
                                        }
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleFavoriteClick(job.id)
                                        }}
                                    >
                                        favorite
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Jobs;