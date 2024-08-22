import React, { useState } from "react";
import Widget from "./Widget";

const Category = ({ category, onRemoveWidget, onAddWidget }) => {

  const [showAddWidgetForm, setShowAddWidgetForm] = useState(false);
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetDescription, setNewWidgetDescription] = useState("");
 

  const handleAddWidgetSubmit = () => {
    if (newWidgetName && newWidgetDescription) {
      const newWidget = {
        name: newWidgetName,
        text: newWidgetDescription
      };
      onAddWidget(category.name, newWidget);
      setNewWidgetName("");
      setNewWidgetDescription("");
      setShowAddWidgetForm(false);
    } else {
      alert("Please fill in both name and description.");
    }
  };


  return (
    <div className="bg-white border rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-medium">{category.name}</h2>
        <button
          onClick={() => setShowAddWidgetForm(!showAddWidgetForm)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          {showAddWidgetForm ? "Cancel" : "+ Add Widget"}
        </button>
      </div>

      {showAddWidgetForm && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Widget Name"
            value={newWidgetName}
            onChange={(e) => setNewWidgetName(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Widget Description"
            value={newWidgetDescription}
            onChange={(e) => setNewWidgetDescription(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />

          <button
            onClick={handleAddWidgetSubmit}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Add Widget
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => onRemoveWidget(category.name, widget.id)}
            categoryName={category.name}
          />
        ))}
      </div>
    </div>
  );
};

  
  export default Category;
