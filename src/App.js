import React from "react"

function App() {
    return (
        <>
            <header>
                <h1>Porfolio - Ashley Mann</h1>
                <nav>
                    <a href="#about-me">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#social-links">Social Links</a>
                </nav>
            </header>
            <section id="about-me">
                <h2>About Me</h2>
                <div class="about-me">
                    <img
                        class=".avatar"
                        alt="avatar"
                        src="./assets/images/avatar_blue_2021.png"
                    />
                    <p>
                        Hi, My name is Ashley, also known as minusInfinite. I've
                        had a fair long history of creating interactive
                        experience but haven't been able to find the time. My
                        previous experience was mostly around the use of a
                        software programme called Flash. It allowed for making
                        animations and interactions that could be used to build
                        really interesting websites. Unfortunately, my career
                        took a more methodical turn and all the fun and time
                        tinkering with webpage and web technology felt like a
                        misuse of my free time.
                    </p>
                    <br />
                    <p>All that said, we'll call this a personal renaissance</p>
                </div>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <div class="projects">
                    <div class="card">
                        <figure>
                            <a
                                href="https://nodebbs-demo.herokuapp.com/"
                                rel="noreferrer"
                                target="_blank">
                                <img
                                    src="./assets/images/project-nodebbs.png"
                                    alt="nodebbs homepage"
                                    title="The landing page for NodeBBS"
                                />
                            </a>
                            <figcaption>
                                A concept for a classic Buliten Board forum in
                                Node/Express/Handlebars -
                                <a
                                    href="https://github.com/minusInfinite/nodebbs"
                                    rel="noreferrer"
                                    target="_blank">
                                    Github
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card">
                        <figure>
                            <a
                                href="https://boot-dev-blog.herokuapp.com/"
                                rel="noreferrer"
                                target="_blank">
                                <img
                                    src="./assets/images/devblog.png"
                                    alt="devblog homepage"
                                    title="the landing page for a Dev Blog"
                                />
                            </a>
                            <figcaption>
                                A Node/Express/Handlebars blogging Web App -
                                <a
                                    href="https://github.com/minusInfinite/devblog"
                                    rel="noreferrer"
                                    target="_blank">
                                    Github
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card">
                        <figure>
                            <a
                                href="https://minusinfinite.id.au/shaztxt"
                                rel="noreferrer"
                                target="_blank">
                                <img
                                    src="./assets/images/project-shaztxt - small.png"
                                    alt="The Landing page for ShazTXT"
                                    title="The Landing page for ShazTXT"
                                />
                            </a>
                            <figcaption>
                                ShazTXT - Lyric Search with Genius and Youtube
                                APIs -
                                <a href="https://github.com/minusInfinite/project-1">
                                    Github
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card">
                        <figure>
                            <a href="https://minusinfinite.github.io/weather-dashboard/">
                                <img
                                    src="./assets/images/weather_dashboard.png"
                                    alt="Landing page for my Weather Dashboard"
                                    title="Landing page for my Weather Dashboard"
                                />
                            </a>
                            <figcaption>
                                A Weather Dashboard using OpenWeatherMap.org -{" "}
                                <a href="https://github.com/minusInfinite/weather-dashboard">
                                    Github
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card">
                        <figure>
                            <a href="https://github.com/minusInfinite/employee-managment-cli">
                                <img
                                    src="./assets/images/emp-man.png"
                                    alt="snapshot of Employee Management in a console"
                                    title="link to the Github employee-managment-cli"
                                />
                            </a>
                            <figcaption>
                                A fun little CLI that could be used to manage a
                                small team - Click the Image for Github
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            <section id="social-links">
                <h2>Socials</h2>
                <ul>
                    <li>
                        <a
                            href="https://www.twitter.com/minusinfinite"
                            rel="noreferrer"
                            target="_blank">
                            <i class="fab fa-twitter fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/ashley-minusinfinite-mann/"
                            rel="noreferrer"
                            target="_blank">
                            <i class="fab fa-linkedin-in fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/minusInfinite"
                            rel="noreferrer"
                            target="_blank">
                            <i class="fab fa-github fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://minusInfinite.net"
                            rel="noreferrer"
                            target="_blank">
                            <i class="fab fa-blogger-b fa-3x"></i>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default App
