/* React Dependencies */
import { useParams } from "react-router-dom";

/* Local Components */
import useRequest from '../../services/useRequest'

export const useUserDetails = () => {
    const { userId } = useParams();

    const { data: userDetails, loading, error } = useRequest(`users/${userId}`)

    return {
        loading,
        error,
        userDetails,
    }
}