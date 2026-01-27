'use client'
import { ChangeEvent, useState } from "react"
export default function PersonPage() {
    const [person, setPerson] = useState({
        id: 1,
        name: "Warodom",
        age: 47
    })

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
                    value={person.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPerson(
                            (prev) =>({ ...prev, name: e.target.value })
                        )
                    }}
                />
            </div>
        </div>
        <div>
            <div>
                Person.name: {person.age}
            </div>
            <div>
                <input
                    className="border-2 p-2 m-2 rounded"
                    type="number"
                    value={person.age}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPerson((prev) =>
                            ({ ...prev, age: +e.target.value })
                        )
                    }}
                />
            </div>
        </div>

    </div>
}