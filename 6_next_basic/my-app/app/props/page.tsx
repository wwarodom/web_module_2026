const STYLE = "text-2xl text-blue-800 border-4 rounded-xl m-2 mt-4 p-2"
export default function PropPage() {
    return <div><h1>Props Page</h1>
        <A foo="foo message" />
        <br />
        <B bar="bar message" />
    </div>
}

function A(props: { foo: string }) {
    return <div>A Component
        <h1 className={STYLE}>
            {props.foo}
        </h1>
    </div>
}

function B({ bar }: { bar: string }) {
    return <div>
        B Component
        <h1 className={STYLE}>
            {bar}
        </h1>
    </div>
}