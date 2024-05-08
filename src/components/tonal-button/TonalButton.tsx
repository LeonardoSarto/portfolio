import "./TonalButton.css"
import {Button} from "../../interfaces/button";

export default function TonalButton(props: Button) {
    let text: string = props.text;
    let onClick: () => void = props.onClick;

    return <button className="tonalButton" onClick={onClick}>
        {text}
    </button>
}