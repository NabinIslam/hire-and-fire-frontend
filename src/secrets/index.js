export const port = process.env.NEXT_PUBLIC_API_PORT;
export const path = process.env.NEXT_PUBLIC_API_PATH;
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const apiUrl = `${apiBaseUrl}:${port}${path}`;
