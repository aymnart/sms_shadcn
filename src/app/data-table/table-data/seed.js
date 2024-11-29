import { faker } from "@faker-js/faker";
import { labels, priorities, statuses } from "./table-data";

// Generate tasks
export const generateTasks = (length = 100) => {
  return Array.from({ length }, () => ({
    id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.hacker
      .phrase()
      .replace(/^./, (letter) => letter.toUpperCase()),
    status: faker.helpers.arrayElement(statuses).value,
    label: faker.helpers.arrayElement(labels).value,
    priority: faker.helpers.arrayElement(priorities).value,
  }));
};

// Usage Example
const tasks = generateTasks();
console.log("✅ Tasks data generated:", tasks);

// Optionally, export the tasks if needed elsewhere in your app.
export default tasks;
