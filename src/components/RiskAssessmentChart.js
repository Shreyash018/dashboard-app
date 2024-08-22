import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Failed', value: 1689 },
  { name: 'Warning', value: 681 },
  { name: 'Not available', value: 539 },
  { name: 'Passed', value: 5253 },
];

const COLORS = ['#FF0000', '#FFA500', '#808080', '#008000'];

const RiskAssessmentChart = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={180}
      cy={200}
      labelLine={false}
      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default RiskAssessmentChart;
