'use client'
import { useState } from "react"

export default function PersonsPage() {

    const [persons, setPersons] = useState([1, 2, 3])

    return <main className="bg-amber-50 min-h-screen">
        <div>
            <h1>Person</h1>
            <div>
                {persons}
            </div>
        </div>

    </main>
}