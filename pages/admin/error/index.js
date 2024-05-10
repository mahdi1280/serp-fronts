import MainDashboard from "@/components/MainDashboard";

export default function Error() {
    return <>
        <MainDashboard
            child={
                <div className={"p-5"}>
                    <h1>خطا ها</h1>
                </div>
            }
        />
    </>
}
