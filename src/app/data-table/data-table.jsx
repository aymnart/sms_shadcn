import { useEffect, useState } from "react";
import { z } from "zod";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { taskSchema } from "./table-data/schema";

// Simulate a database schema validation using Zod
const validateTasks = (tasks) => z.array(taskSchema).parse(tasks);

function TaskPage({ type }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/tasks.json"); // Adjust the path as per your public folder setup
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();

        // Validate tasks using Zod
        const validTasks = validateTasks(data);
        setTasks(validTasks);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          <div className="md:hidden">
            <img
              src="/examples/tasks-light.png"
              width={1280}
              height={998}
              alt="Playground"
              className="block dark:hidden"
            />
            <img
              src="/examples/tasks-dark.png"
              width={1280}
              height={998}
              alt="Playground"
              className="hidden dark:block"
            />
          </div>
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of your {type}s for this month!
                </p>
              </div>
            </div>
            <DataTable data={tasks} columns={columns} />
          </div>
        </>
      )}
    </div>
  );
}

export default TaskPage;
