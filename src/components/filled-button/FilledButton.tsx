import "./FilledButton.css"
import {Button} from "../../interfaces/button";

export default function FilledButton(props: Button) {
    let text: string = props.text;
    let onClick: () => void = props.onClick;

    return <button className="filledButton" onClick={onClick}>
        {text}
    </button>
}