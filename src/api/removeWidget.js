export const removeWidget = (categoryName, widgetId, categories) => {
  const newCategories = categories.map((category) => {
      if (category.name === categoryName) {
          const filteredWidgets = category.widgets.filter(
              (widget) => widget.id !== widgetId
          );
          return { ...category, widgets: filteredWidgets };
      }
      return category;
  });

  return newCategories;
};
