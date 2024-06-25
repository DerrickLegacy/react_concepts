import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

export default function useGetCatFact(initialValue) {
    const { data: catData, isLoading, isError,error, refetch, status } = useQuery({
        queryKey: ["fetcher"],
        queryFn: async () => {
            return Axios.get(initialValue).then((res) => res.data);
        },
    });

    const refetchData =()=>{
        alert("Data refetched");
        refetch();
    }
  return {catData, isLoading, isError, refetchData, error, status}
}
