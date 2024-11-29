import './Jobs/style.css'

export interface JobData {
  id: string;
  title: string;
  company: string;
  date: string;
  status: string;
  notes: string;
}

export interface JobItemsProps {
  job?: JobData;
  updateJob: (data?: any) => void;
  deleteJob: (id?: string) => void;
}

export interface JobsProps  {
  jobs: JobData[];
}

export const JobItem = ({ job, updateJob, deleteJob }: JobItemsProps) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5>{job?.title}</h5>
        <p>{job?.company}</p>
        <p>
          <strong>Status:</strong> {job?.status}
        </p>
        <p>
          <strong>Applied On:</strong> {job?.date}
        </p>
        <p>{job?.notes}</p>
        <button
          onClick={() => deleteJob(job?.id)}
          className="btn btn-danger me-2"
        >
          Delete
        </button>
        <button
          onClick={() => updateJob({ ...job, status: "Interview" })}
          className="btn btn-success"
        >
          Move to Interview
        </button>
      </div>
    </div>
  );
};
