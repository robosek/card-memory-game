import * as React from 'react';
import './Card.css'
import { useOvermind } from '../overmind';

export const DropDown: React.FunctionComponent = () => {

    useOvermind()

    return (
        <div className="dropdown center">
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                How many cards?
        </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="http://www.google.pl">10</a>
                <a className="dropdown-item" href="http://www.google.pl">12</a>
                <a className="dropdown-item" href="http://www.google.pl">16</a>
                <a className="dropdown-item" href="http://www.google.pl">20</a>
            </div>
        </div>
    )
}