'use client'

import { useEffect, useState } from "react"
import { EXTRA_STYLE, StudentType, STYLE, URL } from '@/constants/type'

export default function Crud() {
    const [student, setStudent] = useState<StudentType>()
    const [students, setStudents] = useState<StudentType[]>()
    const getAllStudents = async () => {
        const response = await fetch(URL)
        const students = await (response.json())
        setStudents(students)
        return students;
    }

    const getStudent = async (id: string) => {
        try {
            const response = await fetch(`${ URL }/${ id }`)
            if (!response.ok)
                throw new Error(`HTTP error! ${ response.status }`)
            const student = await response.json()
            setStudent(student)
            return student
        }
        catch (error) {
            console.log("Failed to fetch students: ", error)
        }
    }

    const createStudent = async () => {
        console.log("Click create student")
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify({
                name: "Lisa La flora",
                age: 27
            })
        })
    }

    useEffect(() => {
        getStudent("dddw")
        getAllStudents()
        console.log("Student: ", student)
    }, [])

    return <>
        <h1>CRUD </h1>
        <div>
            {student &&
                (<div>Student: {student.id}: {student.name}</div>)}
            <hr />
            {student && <ul>
                {
                    students.map((item, index) =>
                    (<li key={index}>
                        {item.id}:{item.name}
                    </li>))
                }
            </ul>}
        </div>

        <h1>Add</h1>
        <div>
            <div>
                Name: <input className={`${ STYLE } ${ EXTRA_STYLE }`} type="text" />
            </div>
            <div>
                Age: <input className={`${ STYLE } ${ EXTRA_STYLE }`} type="number" />
            </div>
            <div>
                <button className={STYLE}
                    onClick={createStudent}
                >Add</button>
            </div>
        </div>
    </>
}