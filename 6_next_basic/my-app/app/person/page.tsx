'use client'
import { ChangeEvent, useState } from "react"
export default function PersonPage() {
    const [person, setPerson] = useState({
        id: 1,
        name: "Warodom",
        age: 47,
        hobby: "Guitar"
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        console.log("Name: ", name, "value: ", value)
        setPerson(
            (prev) => ({ ...prev, [name]: value })
        )
    }

    return <div>
        <hr />
        <h2 className="text-2xl font-bold m-2">Person</h2>
        <div>
            <div>
                Person.name: {person.name}
            </div>
            <div>
                <input
                    className="border-2 p-2 m-2 rounded"
                    type="text"
                    name="name"
                    value={person.name}
                    onChange={handleChange}
                />
            </div>
        </div>
        <div>
            <div>
                Person.age: {person.age}
            </div>
            <div>
                <input
                    className="border-2 p-2 m-2 rounded"
                    type="number"
                    name="age"
                    value={person.age}
                    onChange={handleChange}
                />
            </div>
        </div>
        <div>
            <div>
                Person.hobby: {person.hobby}
            </div>
            <div>
                <input
                    className="border-2 p-2 m-2 rounded"
                    name="hobby"
                    type="text"
                    value={person.hobby}
                    onChange={handleChange}
                />
            </div>
        </div>

    </div>
}