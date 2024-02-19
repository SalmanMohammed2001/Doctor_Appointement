export  const  BASE_URL= `http://localhost:8080/api/v1`

export  const  token=localStorage.getItem('token')

// @ts-ignore
export const getProfileData=JSON.parse(localStorage.getItem('getProfileData'))