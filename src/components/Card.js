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
