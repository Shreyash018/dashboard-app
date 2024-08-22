import React from "react";
import CloudAccountsChart from "./CloudAccountsChart";
import RiskAssessmentChart from "./RiskAssessmentChart";
import ImageRiskAssessmentChart from "./ImageRiskAssessmentChart";

const Widget = ({ widget, onRemove, categoryName }) => {
  const renderContent = () => {
    switch (widget.name) {
      case "Cloud Accounts":
        return <CloudAccountsChart />;
      case "Cloud Account Risk Assessment":
        return <RiskAssessmentChart />;
      case "Image Risk Assessment":
        return <ImageRiskAssessmentChart />;
      default:
        return (
          <div>
            <h3 className="text-md font-bold">{widget.name}</h3>
            <p className="text-sm text-gray-600">{widget.text}</p>
          </div>
        );
    }
  };

  return (
    <div className="relative shadow-sm">
     {renderContent()}
      <button
        onClick={() => onRemove(categoryName, widget.id)}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
      >
        X
      </button>
    </div>
  );
};


export default Widget;

