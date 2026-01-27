'use client'

import { useState } from "react"

export default function MyState() {
    const [x, setX] = useState(10)
    const [foo, setFoo] = useState('Foo message')
    return <div>
        My State
        <div>
            {x}:
            <button
                className="border-2 p-2"
                onClick={() => setX(x + 1)}> Increase </button>
            <hr />

            <h1 className="text-xl">{foo}</h1>
            <div>
                <label htmlFor="foo">Input: </label>
            </div>
            <div>
                <input
                    className="border-2 p-2 m-2"
                    type="text" />
            </div>

        </div>
    </div>
}