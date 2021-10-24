import React from "react"
import Card from "../components/Card"

export default function Projects() {
    const projects = [
        {
            projectLink: "https://nodebbs-demo.herokuapp.com/",
            projectImg: "./assets/images/project-nodebbs.png",
            imgAlt: "nodebbs homepage",
            imgTitle: "The landing page for NodeBBS",
            projectcaption:
                "A concept for a classNameic Buliten Board forum in Node/Express/Handlebars -",
            projectSource: "https://github.com/minusInfinite/nodebbs",
        },
        {
            projectLink: "https://boot-dev-blog.herokuapp.com/",
            projectImg: "./assets/images/project-devblog.png",
            imgAlt: "devblog homepage",
            imgTitle: "the landing page for a Dev Blog",
            projectcaption: "A Node/Express/Handlebars blogging Web App -",
            projectSource: "https://github.com/minusInfinite/devblog",
        },
        {
            projectLink: "https://minusinfinite.id.au/shaztxt",
            projectImg: "./assets/images/project-shaztxt-small.png",
            imgAlt: "The Landing page for ShazTXT",
            imgTitle: "The Landing page for ShazTXT",
            projectcaption:
                "ShazTXT - Lyric Search with Genius and Youtube APIs -",
            projectSource: "https://github.com/minusInfinite/nodebbs",
        },
        {
            projectLink: "https://minusinfinite.github.io/weather-dashboard/",
            projectImg: "./assets/images/project-weather_dashboard.png",
            imgAlt: "Landing page for my Weather Dashboard",
            imgTitle: "Landing page for my Weather Dashboard",
            projectcaption:
                "A concept for a classNameic Buliten Board forum in Node/Express/Handlebars -",
            projectSource: "https://github.com/minusInfinite/weather-dashboard",
        },
        {
            projectLink:
                "https://github.com/minusInfinite/employee-managment-cli",
            projectImg: "./assets/images/project-emp-man.png",
            imgAlt: "link to the Github employee-managment-cli",
            imgTitle: "link to the Github employee-managment-cli",
            projectcaption:
                "A fun little CLI that could be used to manage a small team -",
            projectSource:
                "https://github.com/minusInfinite/employee-managment-cli",
        },
    ]

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects">
                {projects.map((projects, index) => (
                    <Card key={index.toString()} {...projects} />
                ))}
            </div>
        </section>
    )
}
