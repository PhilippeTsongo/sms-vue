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

//Course update
export function editCourse(course, courseData){    

    return axios.put(`/course/${course}`, courseData)
}


//department list
export function getDepartment(){
    return axios.get('/department')
}

//department new
export function addDepartment(formData){
    return axios.post('/department', formData)
}

//department Show
export function showDepartment(department){
    return axios.get(`/department/${department}`)
}

//department update
export function editDepartment(department, departmentData){    
    return axios.put(`/department/${department}`, departmentData)
}


//faculty list
export function getFaculty(){
    return axios.get('/faculty')
}

//faculty new
export function addFaculty(formData){
    return axios.post('/faculty', formData)
}

//faculty Show
export function showFaculty(faculty){
    return axios.get(`/faculty/${faculty}`)
}

//faculty update
export function editFaculty(faculty, facultyData){    
    return axios.put(`/faculty/${faculty}`, facultyData)
}


//promotion list
export function getPromotion(){
    return axios.get('/promotion')
}

//promotion new
export function addPromotion(formData){
    return axios.post('/promotion', formData)
}

//promotion Show
export function showPromotion(promotion){
    return axios.get(`/promotion/${promotion}`)
}

//promotion update
export function editPromotion(promotion, formData){    
    return axios.put(`/promotion/${promotion}`, formData)
}

//academic year list
export function getAcademicYear(){
    return axios.get('/academic_year')
}

//academic year new
export function addAcademicYear(formData){
    return axios.post('/academic_year', formData)
}

//academic year Show
export function showAcademicYear(academic_year){
    return axios.get(`/academic_year/${academic_year}`)
}

//academic year update
export function editAcademicYear(academic_year, AcademicYearData){    
    return axios.put(`/academic_year/${academic_year}`, AcademicYearData)
}


//students list
export function getStudent(){
    return axios.get('/student')
}

//student new
export function addStudent(formData){
    return axios.post('/student', formData)
}

//student Show
export function showStudent(student){
    return axios.get(`/student/${student}`)
}

//student update
export function editStudent(student, studentData){    
    return axios.put(`/student/${student}`, studentData)
}

//expense list
export function getExpense(){
    return axios.get('/expense')
}

//expense new
export function addExpense(formData){
    return axios.post('/expense', formData)
}

//expense Show
export function showExpense(expense){
    return axios.get(`/expense/${expense}`)
}

//expense update
export function editExpense(expense, expenseData){    
    return axios.put(`/expense/${expense}`, expenseData)
}

//budget type list
export function getBudgetType(){
    return axios.get('/budget_type')
}

//budget type new
export function addBudgetType(formData){
    return axios.post('/budget_type', formData)
}

//budget type Show
export function showBudgetType(budget_type){
    return axios.get(`/budget_type/${budget_type}`)
}

//budet type update
export function editBudgetType(budget_type, budgetTypeData){    
    return axios.put(`/budget_type/${budget_type}`, budgetTypeData)
}

//budget list
export function getBudget(){
    return axios.get('/budget')
}

//budget new
export function addBudget(formData){
    return axios.post('/budget', formData)
}

//budget Show
export function showBudget(budget){
    return axios.get(`/budget/${budget}`)
}

//budet update
export function editBudget(budget, budgetData){    
    return axios.put(`/budget/${budget}`, budgetData)
}

//logistic list
export function getLogistic(){
    return axios.get('/logistic')
}

//logistic new
export function addLogistic(formData){
    return axios.post('/logistic', formData)
}

//logistic Show
export function showLogistic(logistic){
    return axios.get(`/logistic/${logistic}`)
}

//logistic update
export function editLogistic(logistic, logisticData){    
    return axios.put(`/logistic/${logistic}`, logisticData)
}



//fee list
export function getFee(){
    return axios.get('/fee')
}

//fee new
export function addFee(formData){
    return axios.post('/fee', formData)
}

//fee Show
export function showFee(fee){
    return axios.get(`/fee/${fee}`)
}

//fee update
export function editFee(fee, feeData){    
    return axios.put(`/fee/${fee}`, feeData)
}



// +++++++++++++++++++++++++++++++++++++++++++++ SELECT OPTION LIST ++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//departments list
export function getDepartments(){
    return axios.get('/department')
}

//promotions list
export function getPromotions(){
    return axios.get('/promotion')
}

//lecturers list
export function getLecturers(){
    return axios.get('/lecturer')
}

//lecturers list
export function getFaculties(){
    return axios.get('/faculty')
}

//parents list
export function getStudentParents(){
    return axios.get('/parent')
}

//parents list
export function getAcademicYears(){
    return axios.get('/academic_year')
}

//budget type list
export function getBudgetTypes(){
    return axios.get('/budget_type')
}

//student list
export function getStudents(){
    return axios.get('/student')
}
