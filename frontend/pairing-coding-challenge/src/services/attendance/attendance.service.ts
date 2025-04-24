import { QueryClient } from "@tanstack/react-query";

const REST_API_ENDPOINT = import.meta.env.VITE_REST_API_ENDPOINT;

const fetchData = async () => {
    const response = await fetch(REST_API_ENDPOINT);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch attendance data!');
    }

    const data = await response.json();
    return data;
}

export const loader = () => {
    const queryClient = new QueryClient();

    return queryClient.fetchQuery({
        queryKey: ['data'],
        queryFn: fetchData,
        staleTime: 10000
    })
}