'use client'
import { useState } from "react"

type PersonType = {
    id: number
    name: string
    age: number
}

export default function PersonsPage() {
    const [persons, setPersons] = useState([
        { id: 1, name: "Warodom Werapun", age: 47 },
        { id: 2, name: "John Travota", age: 32 },
        { id: 3, name: "Joe Nuvo", age: 19 },
    ])

    const myNumber = ["One", "Two", "Three", "Four"]

    return <main className="flex justify-center items-center min-h-[95vh]">
        <div className="bg-amber-50 p-32">
            <h1 className="text-2xl mb-2">Person</h1>
            <ul>
                {
                    persons.map((item, index) => (
                        <PersonDetail
                            key={index}
                            id={item.id}
                            name={item.name}
                            age={item.age}
                        />
                    ))
                }
            </ul>
            <div>
                {
                    myNumber.map((foo) => <div
                        className={`${ (foo === "Three") ? "text-3xl" : "" } text-red-800`}
                    >
                        {foo}
                    </div>
                    )
                }
            </div>
        </div>
    </main>
}

function PersonDetail({ id, name, age }: PersonType) {
    return (<li key={id}>
        {id}: {name} {age}
    </li>)
}