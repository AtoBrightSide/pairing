import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../http";
import { useEffect, useState } from "react";
import { ApiResponse } from "../types";

export const DashboardPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: RootState) => state.user.isAuthenticated);
    const [] = useState();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    const [selectedDay, setSelectedDay] = useState("current_day");

    const { data, isLoading, isError, error } = useQuery<ApiResponse>({
        queryKey: ['data'],
        queryFn: fetchData,
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {(error as Error).message}</p>;
    }

    const attendance = selectedDay === 'current_day' ? data?.attendance_data.current_day : data?.attendance_data.yesterday;

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDay(e.target.value);
    }

    return (
        <>
            <select name="date_pick" id="date_pick" value={selectedDay} onChange={(e) => handleSelect(e)}>
                <option value="current_day">
                    Current Day
                </option>
                <option value="yesterday">
                    Yesterday
                </option>
            </select>
            {attendance && (
                <>
                    <h2>Attendance for {attendance.date}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Timezone</th>
                                <th>Check In Time</th>
                                <th>Check Out Time</th>
                                <th>Check Out Message</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance.employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.timezone}</td>
                                    <td>{employee.checked_in_at}</td>
                                    <td>{employee.checked_out_at || 'N/A'}</td>
                                    <td>{employee.checkout_message || 'N/A'}</td>
                                    <td>{attendance.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
};