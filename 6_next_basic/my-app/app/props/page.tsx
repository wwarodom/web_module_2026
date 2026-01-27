const STYLE = "text-2xl text-blue-800 border-4 rounded-xl m-2 mt-4 p-2"
export default function PropPage() {

    const myPrint = () => console.log("Hey!!!")
    // myPrint()

    return <div><h1>Props Page</h1>
        <div className="flex justify-around items-center min-h-screen border-2">
            <A
                foo="foo message"
                foo2="foo 2!!"
                amount="300"
            />
            <br />
            <B bar="bar message"
                bar2="bar 2!!"
                myPrint={myPrint}
            />
        </div>
    </div>
}

function A(props: { foo: string, foo2: string, amount: string | number }) {
    return <div>A Component
        <h1 className={STYLE}>
            <div>
                {props.foo}
            </div>
            <hr />
            <div>
                {props.foo2}
            </div>
            <div>
                {+props.amount}
            </div>
        </h1>
    </div>
}

function B({ bar, bar2, myPrint }: {
    bar: string,
    bar2: string,
    myPrint: () => void
}) {
    // This function cannot be executed on Parent component!
    const idkFunction = () => {
        console.log("Do something")
    }

    idkFunction()
    myPrint()
    return <div>
        B Component
        <h1 className={STYLE}>
            <div>{bar}</div>
            <div>{bar2}</div>
        </h1>
    </div>
}