import React from 'react'

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import caseStaticsData from '../assets/dummy-data/caseStatics';

const CaseChart = () => {
  return  <ResponsiveContainer width="100%">
  <BarChart data={caseStaticsData}>
    <XAxis dataKey='name' stroke="#2884ff" />
    <Bar 
    dataKey='caseStats' 
    stroke='#2884ff' 
    fill='#2884ff' 
    barSize={30}/>

    <Tooltip wrapperClassName="tooltip_style" cursor={false} />
  </BarChart>
</ResponsiveContainer>
}

export default CaseChart