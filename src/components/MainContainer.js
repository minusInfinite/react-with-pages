import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import About from "../content/About"
import Contacts from "../content/Contacts"
import Projects from "../content/Projects"

function MainContainer() {
    const [currentContent, setCurrentContent] = useState("About")
    const displayContent = () => {
        if (currentContent === "About") {
            return <About />
        }
        if (currentContent === "Projects") {
            return <Projects />
        }
        return <Contacts />
    }

    const handleContentChange = (content) => setCurrentContent(content)

    return (
        <>
            <Header
                currentContent={currentContent}
                handleContentChange={handleContentChange}
            />
            {displayContent()}
            <Footer />
        </>
    )
}

export default MainContainer
