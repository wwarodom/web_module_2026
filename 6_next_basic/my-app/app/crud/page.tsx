'use client'

import { useEffect, useState } from "react"
import { EXTRA_STYLE, StudentType, STYLE, URL } from '@/constants/type'

export default function Crud() {
    const [student, setStudent] = useState<StudentType>()
    const [students, setStudents] = useState<StudentType[]>()
    const [error, setError] = useState<Error>()

    const [form, setForm] = useState({
        name: "Warodom",
        age: 30
    })

    const [editId, setEditId] = useState("0")

    const getAllStudents = async (signal?: AbortSignal) => {
        try {
            const response = await fetch(URL, { signal })
            if (!response.ok)
                throw new Error(`HTTP error! ${ response.status }`)
            const students = await (response.json())
            setStudents(students)
            return students;

        }
        catch (error) {
            if (error instanceof Error)
                setError(error)
            console.log("Failed to fetch students: ", error)
        }
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
        const { name, age } = form

        if (editId === "0") {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify({ name, age })
            })
        }
        else {
            const response = await fetch(`${ URL }/${ editId }`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify({ name, age })
            })
            setEditId("0")
            setForm({ name: "", age: 0 })
        }
        await getAllStudents()
    }

    const deleteStudent = async (id: string) => {
        const response = await fetch(`${ URL }/${ id }`, {
            method: "DELETE"
        })
        await getAllStudents()
    }

    const editStudent = async (id: string) => {
        const student = await getStudent(id)
        setForm({ name: student.name, age: student.age })
        setEditId(student.id)
    }

    useEffect(() => {
        getStudent("dddw")
        getAllStudents()
        console.log("Student: ", student)
    }, [])

    if (error) return <p>Error: {error.message} </p>

    return <div className="border m-6 p-6 bg-amber-50 shadow-xl rounded">
        <h1 className="text-xl font-bold">CRUD </h1>
        <hr />
        <div>
            {student &&
                (<div>Student: {student.id}: {student.name}</div>)}
            <hr />
            {students && <ul>
                {
                    students.map((item, index) =>
                    (<li key={index}>
                        {item.id}:{item.name}
                        <button
                            className={STYLE}
                            onClick={() => deleteStudent(item.id)}
                        >
                            x
                        </button>
                        <button
                            className={STYLE}
                            onClick={() => editStudent(item.id)}
                        >
                            Edit
                        </button>
                    </li>))
                }
            </ul>}
        </div>

        <div className="p-4  bg-green-50 rounded shadow border">
            <h1>
                {(editId === "0") ? "Add" : "Update"}
            </h1>
            <div>
                <div>
                    Name: <input className={`${ STYLE } ${ EXTRA_STYLE }`} type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </div>
                <div>
                    Age: <input className={`${ STYLE } ${ EXTRA_STYLE }`} type="number"
                        name="age"
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: +e.target.value })}
                    />
                </div>
                <div>
                    <button className={STYLE}
                        onClick={createStudent}
                    >
                        {(editId === "0") ? "Add" : "Update"}

                    </button>
                </div>
            </div>
        </div>
    </div>
}