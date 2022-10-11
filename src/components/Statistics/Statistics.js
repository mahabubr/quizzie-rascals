import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const Statistics = () => {

    const apiData = useLoaderData()
    const getData = apiData.data

    return (
        <div className='mt-20'>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart
                        width={500}
                        height={300}
                        data={getData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        barSize={50}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="total" fill="#1746A2" background={{ fill: "#5F9DF7" }} />
                    </BarChart>
                </ResponsiveContainer>
        </div>
    );
};

export default Statistics;