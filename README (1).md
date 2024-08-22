
# Dashboard App

The Dynamic Dashboard App is a versatile and customizable dashboard application built with React.js. The app allows users to manage different categories of widgets, providing features to add, remove, and search for specific widgets. Each widget can be tailored with a name, description, and associated dashboard chart, making it an ideal solution for visualizing data in a dynamic and interactive way.



## Features

- Add Widgets: Users can add new widgets to any category by providing a name, description, and optionally linking a relevant chart.
- Remove Widgets: Widgets can be easily removed from any category.
- Search Functionality: Quickly filter through widgets by name using the search feature.

- Responsive Design: The application is designed to be fully responsive, ensuring an optimal experience on both desktop and mobile devices.


## Project Structure

App.js: The main component that initializes the dashboard and handles the state of categories and widgets.

Category.js: A component that manages individual categories and the addition/removal of widgets within them.

Widget.js: A component that displays individual widgets, including any associated charts.

Search.js: A component that provides the search functionality.
CloudAccountsChart.js: A chart component for visualizing cloud account connections.

RiskAssessmentChart.js: A chart component for visualizing cloud account risk assessments.

ImageRiskAssessmentChart.js: A chart component for visualizing image risk assessments.
## Installation

git clone https://github.com/Shreyash018/dashboard-app.git
cd dashboard-app

npm install

npm start

npm install -g json-server

json-server --watch db.json --port 5000

    
## Usage/Examples

Adding Widgets: Click on the "+ Add Widget" button in any category. A form will appear asking for the widget's name, description, and an optional chart association.

Removing Widgets: Click the "X" button on the top right corner of any widget to remove it.

Searching Widgets: Use the search bar at the top to filter widgets by their name.


## Dependencies

React: ^18.3.1
Recharts: ^2.12.7
Tailwind CSS: ^3.4.10
Ajv: ^8.17.1
Ajv Keywords: ^5.1.0
JSON Server (for backend simulation)
## Dev Dependencies

Autoprefixer: ^10.4.20
PostCSS: ^8.4.41
Tailwind CSS: ^3.4.10
## Future Improvements

Backend Integration: Replace the JSON server with a real backend API for persistent data storage.

Enhanced Widget Management: Add features like drag-and-drop reordering of widgets within categories.

Advanced Charting: Integrate more complex and customizable charting options.
## License

This project is licensed under the MIT License.


## Acknowledgements

Thanks to the open-source community for providing the libraries and tools used in this project.
