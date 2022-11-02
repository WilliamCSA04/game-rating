export async function handleResponse<T>(response: Response) {
    const data = (await response.json()) as T;
    return data
}