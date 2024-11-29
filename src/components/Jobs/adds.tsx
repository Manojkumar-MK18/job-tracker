import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../footer";

interface AddJobProsp {
  id: Date;
  title: string;
  company: string;
  date: string;
  status: string;
  notes: string;
}

const AddJob = () => {
  const [formData, setFormData] = useState({} as AddJobProsp);
  const [data, setData] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formData.id = new Date();
    setData([...data, formData]);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="jobs_title">
        <h3>Add Job Details</h3>
      </div>
      <div className="form_container">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label>Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label>Application Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="form-control"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Job
          </button>
        </form>{" "}
        <Footer />
      </div>
    </>
  );
};

export default AddJob;
