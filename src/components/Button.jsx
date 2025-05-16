export function Button({setClicked, text}) {

    return (
        <button onClick={setClicked}>{text}</button>
    )
}