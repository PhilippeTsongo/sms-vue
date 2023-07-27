//import axios library to handle requests

import axios from 'axios';

//login
export function userLogin(credentials){
    return axios.post('/login', credentials)
}

//courses list
export function getCourses(){
    return axios.get('/course')
}

//new course
export function addCourse(formData){
    return axios.post('/course', formData)
}
