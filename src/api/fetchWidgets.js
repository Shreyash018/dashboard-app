
export const fetchWidgets = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching widgets:", error);
      return [];
    }
  };
  