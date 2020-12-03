/**
 * Method to return backend services urls based on the environment
 **/
const getConfig = () => {
  return {
    APP_API: process.env[`REACT_APP_${process.env.REACT_APP_ENV}_API`]
  }
}

export default getConfig()
