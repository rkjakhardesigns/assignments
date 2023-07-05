/* Local Components */
import useRequest from '../../services/useRequest'

export const useUsersList = () => {
    const { data: usersList, loading, error } = useRequest('users')

    return {
        loading,
        error,
        usersList,
    }
}