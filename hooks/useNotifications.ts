import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const useNotifications = () => {
  const { data, isLoading, error} = useSWR('/api/notifications', fetcher)

  return {data, isLoading, error}
}

export default useNotifications