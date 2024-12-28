import HeadCounts from "../component/HeadCounts"

function Admin() {
    return (
        <div>
            {/* COUNT COMPONENTS */}
            <div className="flex justify-evenly items-center mt-10">
                <HeadCounts type="Students" count="200" />
                <HeadCounts type="Teachers" count="20" />
                <HeadCounts type="Subjects" count="10" />
                <HeadCounts type="Staffs" count="35" />
            </div>
        </div>
    )
}
export default Admin