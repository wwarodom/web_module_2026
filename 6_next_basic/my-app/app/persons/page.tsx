'use client'
import { useState } from "react"
export default function PersonsPage() {
    const [persons, setPersons] = useState([
        { id: 1, name: "Warodom Werapun", age: 47 },
        { id: 2, name: "John Travota", age: 32 },
        { id: 3, name: "Joe Nuvo", age: 19 },
    ])

    return <main className="flex justify-center items-center min-h-[95vh]">
        <div className="bg-amber-50 p-32">
            <h1 className="text-2xl mb-2">Person</h1>
            <div>
                {JSON.stringify(persons)}
            </div>
        </div>
    </main>
}