import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const usePosts = () => {
  const { data, isLoading, error} = useSWR('/api/posts', fetcher)

  return {data, isLoading, error}
}

export default usePosts