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

//Course new
export function addCourse(formData){
    return axios.post('/course', formData)
}

//Course Show
export function showCourse(course){
    return axios.get(`/course/${course}`)
}

//Course Show
export function editCourse(course, formData){
    return axios.put(`/course/${course}`, formData)
}



