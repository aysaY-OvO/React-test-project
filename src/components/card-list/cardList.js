import React, { Component } from 'react';
import CardItem from '../card-item';

import './card-list.css';

export default class CardList extends Component {
    render() {
        return (
            <div className="card__list">
                <CardItem />
            </div>
        );
    }
}
