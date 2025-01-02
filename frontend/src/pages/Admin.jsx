import AttendanceChart from "../component/AttendanceChart"
import CountRadialChart from "../component/CountRadialChart"
import FinanceChart from "../component/FinanceChart"
import HeadCounts from "../component/HeadCounts"

function Admin() {
    return (
        <div className="flex items-center justify-between overflow-y-scroll min-h-[70vh]">
            <div className="flex flex-col items-center w-2/3 h-full">
                {/* COUNT COMPONENTS */}
                <div className="flex justify-evenly w-full items-center mt-4">
                    <HeadCounts type="Students" count="200" />
                    <HeadCounts type="Teachers" count="20" />
                    <HeadCounts type="Subjects" count="10" />
                    <HeadCounts type="Staffs" count="35" />
                </div >
                {/* Graphs and Charts */}
                <div className="flex flex-col gap-6 w-full  mt-4 p-2">
                    {/* TOP */}
                    <div className="flex gap-6 w-full items-center">
                        {/* COUNT CHART */}
                        <div className="h-full">
                            <CountRadialChart />
                        </div>
                        {/* Attendance Chart */}
                        <div className=" flex-1 h-full">
                            <AttendanceChart />
                        </div>
                    </div>
                    {/* BOTTOM */}
                    <div className="w-full bg-white rounded-md shadow-md p-4 min-w-[400px] h-full flex-1">
                        {/* Finance Graph */}
                        <FinanceChart />
                    </div>
                </div>
            </div>
            {/*Date/Time*/}
            <div>
            </div>
        </div >
    )
}
export default Admin