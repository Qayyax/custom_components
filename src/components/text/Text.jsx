import { nanoid } from "nanoid"
export default function Text({ name, props }) {
    return (
        <div className="text-components">
            <h1>{name} components</h1>
            <div className="component-text">
                <p>{name} takes in the following props</p>
                <ul>
                    {props.map(prop => (
                        <li key={nanoid()}><b>{prop.name}</b>: {prop.description}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
