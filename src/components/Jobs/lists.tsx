import React, { useEffect, useState } from "react";
import { JobData, JobItem } from "../helpers";
import { useNavigate } from "react-router";
import "./style.css";
import Footer from "../footer";

const JobLists = () => {
  const [jobs, setJobs] = useState<JobData[]>(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });
  const updateJob = (selectedJob: any) => {
    setJobs(jobs.map((job) => (job.id === selectedJob.id ? selectedJob : job)));
  };
  const deleteJob = (id: string) => {
    setJobs(jobs.filter((job) => job?.id !== id));
  };

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);
  return (
    <div>
      <div className="jobs_title">
        <h3>Job Lists</h3>
        <button
          onClick={() => {
            navigate("/addJob");
          }}
        >
          Add Jobs
        </button>
      </div>
      <div className="job_list_container">
        {jobs?.map((data: any, index) => {
          return (
            <JobItem
              key={index}
              job={data}
              updateJob={updateJob}
              deleteJob={() => deleteJob(data?.id)}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default JobLists;
