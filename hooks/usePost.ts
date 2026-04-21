import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const usePost = (id?: string) => {
  const { data, isLoading, error, mutate} = useSWR(`/api/posts/${id}`, fetcher)

  return {data, isLoading, error, mutate}
}

export default usePost