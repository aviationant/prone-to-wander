import { StrapiResponse } from '../components/Blogs';
declare const useFetch: <T>(url: string) => [boolean, string | null, StrapiResponse<T> | null];
export default useFetch;
