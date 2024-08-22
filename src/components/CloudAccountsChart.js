import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Connected', value: 2 },
  { name: 'Not Connected', value: 2 },
];

const COLORS = ['#3498db', '#95a5a6'];

const CloudAccountsChart = () => (
  <PieChart width={300} height={300}>
    <Pie
      data={data}
      cx={130}
      cy={130}
      innerRadius={50}
      outerRadius={70}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default CloudAccountsChart;

