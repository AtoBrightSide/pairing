const REST_API_ENDPOINT = import.meta.env.VITE_REST_API_ENDPOINT;

export const fetchData = async () => {
    const response = await fetch(REST_API_ENDPOINT);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch attendance data!');
    }

    const data = await response.json();
    return data;
}