import { useEffect, useState } from "react";
import { z } from "zod";
import { teachersColumns } from "./teachers-columns";
import { DataTable } from "../data-table/components/data-table";
import { teacherSchema } from "./table-data/teacherSchema";

// Simulate a database schema validation using Zod
const validateTeachers = (teachers) => z.array(teacherSchema).parse(teachers);

function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch teachers on component mount
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("/teachers.json"); // Adjust the path as per your public folder setup
        if (!response.ok) {
          throw new Error("Failed to fetch teachers");
        }
        const data = await response.json();

        // Validate teachers using Zod
        const validTeachers = validateTeachers(data);
        setTeachers(validTeachers);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching teachers:", err);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          <div className="flex-1 flex-col space-y-8  flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of your teachers for this month!
                </p>
              </div>
            </div>
            <DataTable data={teachers} columns={teachersColumns} />
          </div>
        </>
      )}
    </div>
  );
}

export default TeachersPage;
