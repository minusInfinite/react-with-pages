import React, { useState } from "react"

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

export default function Contacts() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleInputChange = (e) => {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        if (inputType === "email") {
            if (inputValue.trim() === "") {
                setErrorMessage("Email is Required")
            }
            setEmail(inputValue)
        } else if (inputType === "name") {
            setName(inputValue)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (!validateEmail(email)) {
            setErrorMessage("Email is invalid")
            return
        } else {
            setErrorMessage("Thanks for joining")
        }

        setEmail("")
        setName("")
    }
    return (
        <section id="social-links">
            <h2>Socials</h2>
            <div className="social-link">
                <a
                    href="https://www.twitter.com/minusinfinite"
                    rel="noreferrer"
                    target="_blank">
                    <i className="fab fa-twitter fa-3x"></i>
                </a>
                <p>The easiest way to contact me direct is via twitter</p>
            </div>
            <div className="social-link">
                <a
                    href="https://www.linkedin.com/in/ashley-minusinfinite-mann/"
                    rel="noreferrer"
                    target="_blank">
                    <i className="fab fa-linkedin-in fa-3x"></i>
                </a>
                <p>
                    For my Carrer and Experience History feel free to review via
                    LinkedIn.
                </p>
            </div>
            <div className="social-link">
                <a
                    href="https://github.com/minusInfinite"
                    rel="noreferrer"
                    target="_blank">
                    <i className="fab fa-github fa-3x"></i>
                </a>
                <p>
                    For my coding projects, past and present here is a link to
                    my Github.
                </p>
            </div>
            <div className="social-link">
                <a
                    href="https://minusInfinite.net"
                    rel="noreferrer"
                    target="_blank">
                    <i className="fab fa-blogger-b fa-3x"></i>
                </a>
                <p>
                    I also occationaly write reviews and commentry on other
                    interests here.
                </p>
            </div>
            <div className="social-link">
                <p>Sign-up to my news letter</p>
                <form className="form">
                    <label>
                        Name
                        <input
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                        />
                    </label>
                    <label>
                        Email
                        <input
                            value={email}
                            name="email"
                            onBlur={handleInputChange}
                            onChange={handleInputChange}
                            type="email"
                            required
                        />
                    </label>
                    <button type="button" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
