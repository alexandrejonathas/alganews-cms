import { User, UserService } from "alexandrejonathas-alganews-sdk"
import { useCallback, useState } from "react"

export default function useUserEarnings () {
  const [user, setUser] = useState<User.Detailed>()
  const [error, setError] = useState<Error>()

  const fetchUserEarnings = useCallback((userId: number) => {
      UserService.getDetailedUser(userId)
          .then(setUser)
          .catch(e => setError(new Error(e.message)))
  }, [])
  
  return {
    user,
    error,
    fetchUserEarnings
  }
}