import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "../lib/types"


const useGetUsers = () => {
  const [data, setData] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users?fbclid=IwZXh0bgNhZW0CMTAAAR3Cd4C9k0c3Y69JHiJCsMTpNiXjZNRYMMbKIF7cySE-qZKgPiej4vbV9dg_aem_5Ekc2bN2qVjok2MXexOTVQ", {
          signal: controller.signal
        })
        setData(res.data)
      } catch (e) {
        if (axios.isAxiosError(e)) {
          if (e.message === "canceled") {
            return console.log("aborted")
          }
          if (e.response) {
            console.error("Response status:", e.response.status)
            console.error("Response data:", e.response.data)
          } else if (e.request) {
            console.error("No response recieved:", e.request)
          } else {
            console.error("Unexpected error:", e)
          }
          setError(e.message)
        }
      } finally {
        setIsLoading(false)
      }
    }
    getUsers();
    return () => controller.abort();
  }, [])
  return [data, isLoading, error]
}

export default useGetUsers 