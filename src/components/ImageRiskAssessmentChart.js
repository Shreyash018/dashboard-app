import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Critical', value: 9 },
  { name: 'High', value: 150 },
  { name: 'Medium', value: 200 },
  { name: 'Low', value: 1111 },
];

const ImageRiskAssessmentChart = () => (
  <BarChart width={300} height={200} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill="#8884d8" />
  </BarChart>
);

export default ImageRiskAssessmentChart;
