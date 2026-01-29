'use client'
import { ChangeEvent, useState } from "react"

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

    const [form, setForm] = useState({ id: 0, name: '', age: 1 })
    const myNumber = ["_"]

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        console.log("Name: ", name, "Value: ", value)
        setForm((prev) => ({ ...prev, [name]: value }))
    }

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

            <div className="border p-4 my-4 bg-white rounded-xl">
                <h1>Add Person</h1>
                <div>
                    <label htmlFor="name">Name</label>
                </div>
                <div>
                    <input
                        className="border p-2 mb-2 rounded-md"
                        type="text" name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="name">Age</label>
                </div>
                <div>
                    <input
                        className="border p-2 mb-4 rounded-md"
                        type="number" name="age"
                        value={form.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button
                        className="border px-2 py-1 rounded hover:shadow-xl"
                    >Add</button>
                </div>
            </div>


            <div>
                <PrintNumber myNumber={myNumber} />
            </div>
        </div>
    </main>
}

function PrintNumber({ myNumber }: { myNumber: string[] }) {
    return myNumber.map((foo, index) => <div key={index}
        className={`${ (foo === "One") ? "text-2xl font-bold" : "" } text-red-800`}
    >
        {foo}
    </div>
    )
}

function PersonDetail({ id, name, age }: PersonType) {
    return (<li key={id}>
        {id}: {name} {age}
    </li>)
}