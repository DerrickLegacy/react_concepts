import useRandomColor from "./useRandomColor"
export default function RandomColor() {
    const [color, generateRandomColor] = useRandomColor()

    return (
        <div style={{ border: "1px solid black", margin: "3px 0 3px 0", backgroundColor: "#" + color }}>
            <h1>Hook 3</h1>
            <p>(Changing to random Colors)</p>
            <div>
                <button onClick={generateRandomColor}>Randomly Generate Color</button>
            </div>
        </div>
    )
}
