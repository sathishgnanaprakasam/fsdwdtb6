import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";

const Jobs = () => {

    const jobs = useLoaderData();
    const [search] = useSearchParams();
    const query = search.get("q");
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/jobs/${id}`);
    }

    return (
        <div
            className="container mx-8 my-8"
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
                            onClick={() => handleClick(job.id)}
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
                            <div className="flex flex-row items-center">
                                <span className="material-symbols-outlined text-red-500">
                                    location_on
                                </span>
                                <span className="text-xs">
                                    {job.location}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Jobs;