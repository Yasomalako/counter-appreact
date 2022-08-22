import { useState } from 'react'
import Teacher from './TeacherComponent'
function Cures() {
    const myArray = ["react", "javascript", "html", "css"]
    let [stdudents, setmyStudents] = useState([])
    let [teacher, setmyTeacher] = useState({ firstName: "not Avalebol", lastName: "not avelebol" })
    const chengeStudentArray = ()=>{
        setmyStudents([{firstName:"",lastName:"",age:""},{firstName:"",lastName:"",age:""},{firstName:"",lastName:"",age:""},{firstName:"",lastName:"",age:""}])
    }
    return (
        <div>
            <p>{myArray}</p>
            <p>{}</p>
            <Teacher Teacher={teacher} />
            <button onClick={chengeStudentArray}>click to chenge stu array</button>
        </div>
    )
}
export default Cures