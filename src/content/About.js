import React from "react"

export default function About() {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <div className="about-me">
                <img
                    className=".avatar"
                    alt="avatar"
                    src={
                        process.env.PUBLIC_URL +
                        "/assets/images/avatar_blue_2021.png"
                    }
                />
                <p>
                    Hi, My name is Ashley, also known as minusInfinite. I've had
                    a fair long history of creating interactive experience but
                    haven't been able to find the time. My previous experience
                    was mostly around the use of a software programme called
                    Flash. It allowed for making animations and interactions
                    that could be used to build really interesting websites.
                    Unfortunately, my career took a more methodical turn and all
                    the fun and time tinkering with webpage and web technology
                    felt like a misuse of my free time.
                </p>
                <br />
                <p>All that said, we'll call this a personal renaissance</p>
            </div>
        </section>
    )
}
