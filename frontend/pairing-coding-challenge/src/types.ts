export type Employee = {
    id: number;
    name: string;
    timezone: string;
    checked_in_at: string;
    checked_out_at: string | null;
    checkout_message: string | null;
}

export type Attendance = {
    date: string;
    employees: Employee[];
}

export type AttendanceData = {
    current_day: Attendance;
    yesterday: Attendance;
}

export type ApiResponse = {
    team: {
        id: number;
        name: string;
    };
    attendance_data: AttendanceData;
    status: string;
}