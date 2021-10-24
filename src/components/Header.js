import React from "react"
import Navbar from "./Navbar"

export default function Header(props) {
    return (
        <header>
            <h1>Porfolio - Ashley Mann</h1>
            <Navbar
                currentContent={props.currentContent}
                handleContentChange={props.handleContentChange}
            />
        </header>
    )
}
