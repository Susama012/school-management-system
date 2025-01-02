import { CiMenuKebab } from 'react-icons/ci';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 40,
        absent: 24,
    },
    {
        name: 'Tue',
        present: 50,
        absent: 14,
    },
    {
        name: 'Wed',
        present: 55,
        absent: 9,
    },
    {
        name: 'Thu',
        present: 45,
        absent: 19,
    },
    {
        name: 'Fri',
        present: 35,
        absent: 29,
    },
];
function AttendanceChart() {
    return (
        <div className='bg-white rounded-md shadow-md p-4 min-w-[400px] h-full flex-1'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Attendance</h1>
                <CiMenuKebab className='rotate-90 text-4xl text-gray-500' />
            </div>
            {/* Chart */}
            <ResponsiveContainer minWidth="450px" minHeight="400px">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}

                >
                    <CartesianGrid strokeDasharray="4" strokeOpacity={"0.4"} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend align="left" verticalAlign="top" />
                    <Bar dataKey="present" fill="#8884d8" />
                    <Bar dataKey="absent" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default AttendanceChart;