import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {

  useEffect(() => { setData(() => getData()); }, [events]);

  const [data, setData] = useState([]);
  
  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
          summary.split(' ').includes(genre)
        ).length;
        if (genre === 'JavaScript') {
          genre = 'JS';
        }
        return { name: genre, value };
    });
    return data;
  };

  const colors = ['#6023DB', '#0088FE', '#00C49F', '#FF8042', '#F13B27'];

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400} >
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Pie
          data={data}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} fontSize={16}/>
            ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;