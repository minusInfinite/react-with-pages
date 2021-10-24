function Navbar({ currentContent, handleContentChange }) {
    return (
        <nav>
            <a
                href="#about-me"
                onClick={() => handleContentChange("About")}
                className={currentContent === "About" ? "active" : ""}>
                About Me
            </a>
            <a
                href="#projects"
                onClick={() => handleContentChange("Projects")}
                className={currentContent === "Projects" ? "active" : ""}>
                Projects
            </a>
            <a
                href="#social-links"
                onClick={() => handleContentChange("Contacts")}
                className={currentContent === "Contacts" ? "active" : ""}>
                Social Links
            </a>
        </nav>
    )
}

export default Navbar
