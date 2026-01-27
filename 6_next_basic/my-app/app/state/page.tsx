'use client'
import { ChangeEvent, useState } from "react"
export default function MyState() {
    const [x, setX] = useState(10)
    const [foo, setFoo] = useState('Foo message')
    return <div>
        My State
        <div>{x}:
            <button className="border-2 p-2"
                onClick={() => setX(x + 1)}> Increase </button>
            <hr />
            <h1 className="text-xl">{foo}</h1>
            <div>
                <label htmlFor="foo">Input: </label>
            </div>
            <div>
                <input
                    className="border-2 p-2 m-2"
                    type="text"
                    value={foo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        // console.log(e.target.value);
                        setFoo(e.target.value);
                    }}
                />
            </div>

        </div>
    </div>
}