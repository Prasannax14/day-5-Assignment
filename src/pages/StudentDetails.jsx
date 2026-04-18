import { useParams, useNavigate } from "react-router-dom";
import students from "../data/students.json";

function StudentDetails() {
  console.log("StudentDetails loaded"); // 👈 ADD HERE

  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === Number(id));

  return (
    <div>
      <h2>Student Details</h2>

      {student ? (
        <>
          <h3>Name: {student.name}</h3>
          <p>Course: {student.course}</p>
        </>
      ) : (
        <p>Student not found</p>
      )}

      <button onClick={() => navigate(-1)}>⬅ Back</button>
    </div>
  );
}

export default StudentDetails;