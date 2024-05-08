import "./Card.css"
import React from "react";
import FilledButton from "../filled-button/FilledButton";
import TonalButton from "../tonal-button/TonalButton";
import {Button} from "../../interfaces/button";

interface CardProps {
    cardImage?: string;
    cardHeading: string;
    cardSubheading?: string;
    cardBody: string;
    primaryButton?: Button;
    secondaryButton?: Button;
    target?: {
        link: string;
        text: string;
    };
}

export default function Card(props: CardProps) {
    let cardImage: string | undefined = props.cardImage;
    let cardHeading: string = props.cardHeading;
    let cardSubheading: string | undefined = props.cardSubheading;
    let cardBody: string = props.cardBody;
    let primaryButton = props.primaryButton;
    let secondaryButton = props.secondaryButton;
    let target = props.target;

    return <div className="card">
        {cardImage && <div className="card-image">
            <img src={`/assets/images/${cardImage}`}/>
        </div>}
        <div className="card-content">
            <div className="card-headline">
                {cardHeading}
            </div>
            {cardSubheading && <div className="card-subheadline">
                {cardSubheading}
            </div>}
            <div className="card-body">
                {cardBody}
            </div>
            <div className="card-footer">
                {secondaryButton && <TonalButton text={secondaryButton.text} onClick={secondaryButton.onClick}/>}
                {primaryButton && <FilledButton text={primaryButton.text} onClick={primaryButton.onClick}/>}
                {target && <a target="_blank" href={target.link} >{target.text}</a>}
            </div>
        </div>
    </div>
}