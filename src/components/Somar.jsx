import { useState } from "react"

export function Somar() {
    const [somar, setSomar] = useState(100)

    return (
        <div>
            <Button setClicked={handleAlterarEstado} text='Somar +100'/>
            <p>{somar}</p>
        </div>
)}
