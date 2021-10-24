# Portfolio using React

This repo is a revisit of creating my [Portfolio](https://github.com/minusInfinite/minusinfinite.github.io) using [React](https://reactjs.org/)

Live Version - <https://minusinfinite.github.io/react-with-pages>

There are a few differences between my current Portfolio and the React one.

Rather than going to an anchor on the document, the Navigation links act like tabs. The active tab will display the bottom border used when you hover over the link.

![Navagation Example](/md/nav.png)

Clicking on a tab will render the context for the selected area.

Clicking on **Projects** will look the same but the elements are rendered using a reuseable Card component.

This made the React code a lot clear and better to understand the flow.

```javascript
export default function Card(props) {
    return (
        <div className="card">
            <figure>
                <a href={props.projectLink} rel="noreferrer" target="_blank">
                    <img
                        src={props.projectImg}
                        alt={props.imgAlt}
                        title={props.imgTitle}
                    />
                </a>
                <figcaption>
                    {props.projectcaption}
                    <a
                        href={props.projectSource}
                        rel="noreferrer"
                        target="_blank">
                        Github
                    </a>
                </figcaption>
            </figure>
        </div>
    )
}
```

While the task asked for a "Contact form" I don't feel like a modern portfolio would need one, unless you have an active newsletter you would like someone to subscribe to.

The **Social Links** tab gives a little more details on what I intend for each link to provide functionality-wise.

## Development

This project uses Yarn 2 - <https://yarnpkg.com/> - you may need to run `yarn install` twice for this repo to install as expected.

## Thoughts

In proceeding with this project I've found I'm not a fan of the methodology of React and how granular it can get but I believe I've become to understand why it has been so liked.

I found for this project, starting with an existing Website and design and having to break it down into components, did make the process easier. Maybe with time, it will become more familiar.
