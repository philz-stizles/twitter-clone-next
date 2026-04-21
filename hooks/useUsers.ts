import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const useUsers = () => {
  const { data, isLoading, error} = useSWR('/api/users', fetcher)

  return {data, isLoading, error}
}

export default useUsers