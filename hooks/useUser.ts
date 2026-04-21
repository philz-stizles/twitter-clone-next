import fetcher from "@/libs/fetcher"
import useSWR from "swr";

const useUser = (id?: string) => {
  const { data, isLoading, error} = useSWR(`/api/users/${id}`, fetcher)

  return {data, isLoading, error}
}

export default useUser