// Create a placeholder for the array
let teachersCategories = [];

// Immediately fetch and populate the array
(async () => {
  try {
    const response = await fetch("/teachers.json");
    if (!response.ok) {
      throw new Error("Failed to fetch teachers data");
    }
    const teachers = await response.json();
    const categories = teachers.map((teacher) => teacher.category);
    // Remove duplicates
    const uniqueCategories = [...new Set(categories)];

    // Format as desired
    teachersCategories = uniqueCategories.map((category) => ({
      value: category,
      label: category,
    }));
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
})();

// Export the array
export { teachersCategories };
