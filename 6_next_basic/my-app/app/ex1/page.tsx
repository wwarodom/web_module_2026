// Server action
// useActionState()
// isPending

"use client"

import { useActionState } from "react"
import submitName from "./action"

const STYLE = `border m-2 p-2 text-gray-600 shadow-lg rounded-md`

export default function Ex1() {

    const initialState = {
        error: "",
        message: {
            name: ""
        }
    }

    const [state, action, isPending] = useActionState(submitName, initialState)

    console.log("State: ", state)

    return (
        <div>
            <h1 className={`${ STYLE } text-2xl font-bold`}>Ex1</h1>
            <div>
                <form className={STYLE} action={action}>
                    <label className={STYLE} htmlFor="name">Name</label>
                    <input className={STYLE} type="text" name="name" placeholder="Warodom" />
                    <button className={STYLE}
                        disabled={isPending}
                    >
                        {isPending ? "Submitting...." : "Submit"}
                    </button>
                </form>
            </div>

            <div className={STYLE}>
                {state.error && <p className="text-red-600">{state.error}</p>}
                {state.message && <p className="text-green-600">{state.message.name}</p>}

            </div>
        </div>
    )
}
