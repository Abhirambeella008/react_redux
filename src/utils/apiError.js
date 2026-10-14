export const getApiError = (error) => {
    if (!error.response) {
        return 'Network error, Check Connection'
    }
    return (
        error.response.data?.message || error.message || 'Request Failed'
    )
}