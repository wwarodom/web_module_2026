// Server action
// useActionState()
// isPending

const STYLE = `border m-2 p-2 text-gray-600 shadow-lg rounded-md`

export default function Ex1() {
    return (
        <div>
            <h1 className={STYLE}>Ex1</h1>
            <div>
                <form className={STYLE} action="">
                    <label className={STYLE} htmlFor="name">Name</label>
                    <input className={STYLE} type="text" name="name" placeholder="Warodom" />
                    <button className={STYLE} >Submit</button>
                </form>
            </div>
        </div>
    )
}
