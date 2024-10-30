import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const job = useLoaderData();

    return (
        <div
            className="container mx-8 my-8 p-4 border border-gray-200 flex flex-col gap-4"
        >
            <h1
                className="text-2xl font-bold"
            >
                {job.title}
            </h1>

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

            <div
                className="my-4"
            >
                <h2
                    className="text-lg font-bold"
                >
                    Description
                </h2>
                <p>
                    {job.description}
                </p>
            </div>
        </div>
    )
}

export default JobDetails;