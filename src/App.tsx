import "./App.css";
import AddJob from "./components/Jobs/adds";
import JobLists from "./components/Jobs/lists";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobLists />} />
      <Route path="/addJob" element={<AddJob />} />
    </Routes>
  );
}

export default App;
