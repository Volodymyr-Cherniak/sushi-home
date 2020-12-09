const apiUrl = process.env.REACT_APP_ENV === 'production'
  ? process.env.REACT_APP_HOST_API_SERVER_PROD
  : process.env.REACT_APP_HOST_API_SERVER_DEV;

export default apiUrl;