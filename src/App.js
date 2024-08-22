
import React, { useState, useEffect } from "react";
import {addWidget } from './api/addWidget';
import {removeWidget} from './api/removeWidget';
import {fetchWidgets} from './api/fetchWidgets';

import Category from "./components/Category";
import Search from "./components/Search";
import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchWidgets();
      setCategories(data);
    };
    loadCategories();
  }, []);

  
  const handleAddWidget = async (categoryName, widget) => {
    try {
      const updatedCategories = await addWidget(categoryName, widget, categories);
      setCategories(updatedCategories); // Update state with new categories
    } catch (error) {
      console.error("Error adding widget:", error);
    }
  };

  const handleRemoveWidget = async (categoryName, widgetId) => {
    const updatedCategories = await removeWidget(categoryName, widgetId, categories);
    setCategories(updatedCategories);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dynamic Dashboard</h1>
        <Search onSearch={handleSearch} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCategories.map(category => (
        <Category
          key={category.id}
          category={category}
          onAddWidget={handleAddWidget}
          onRemoveWidget={handleRemoveWidget}
        />
      ))}
        </div>
      </div>
    </div>
  );
};

export default App;
