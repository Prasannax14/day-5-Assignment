import { useNavigate } from "react-router-dom";
import students from "../data/students.json";

function Students() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Students Page</h2>

      {students.map((student) => (
        <div key={student.id} style={{ border: "1px solid", padding: "10px", margin: "10px" }}>
          <h3>{student.name}</h3>
          <p>{student.course}</p>

          <button onClick={() => navigate(`/students/${student.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Students;