import { useState } from 'react'
function Teacher({ Teacher }) {
    let [firstName, setFirstName] = useState(Teacher.firstName)
    let [lastName, setLastName] = useState(Teacher.lastName)
    const chengeFirstName = () => {
        setFirstName("Yaso")
    }
    const chengeLastName = () => {
        setLastName("Malako aking")
    }
    const tchengeNameComletely = () => {
        setFirstName("YASO")
        setLastName("MALAKO")
    }
    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <button onClick={tchengeNameComletely}>
                chenge Fullname to upper case
            </button>
            <button onClick={chengeFirstName}>
                chenge first name
            </button>
            <button onClick={chengeLastName}>chenge last name</button>

        </div>
    )
}
export default Teacher