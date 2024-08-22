export const addWidget = (categoryName, widget, categories) => {
  const newCategories = categories.map((category) => {
      if (category.name === categoryName) {
          const newWidget = {
              id: Date.now(),
              ...widget,
          };
          return { ...category, widgets: [...category.widgets, newWidget] };
      }
      return category;
  });

  return newCategories;
};



  
  