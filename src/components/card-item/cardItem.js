import React, { Component } from 'react';
import DbService from '../../service/service';
import ProgressBar from 'react-bootstrap/ProgressBar';

import './cardItem.css';

export default class CardItem extends Component {
    dbService = new DbService();

    state = {
        cards: [],
        error: false,
    };

    componentDidMount() {
        this.getCard();
    }

    onCardLoaded = (cards) => {
        this.setState({
            cards,
        });
    };

    getCard = () => {
        this.dbService.getCard().then(this.onCardLoaded).catch(this.onError);
    };

    onError = () => {
        this.setState({
            error: true,
        });
    };

    render() {
        if (this.state.error) {
            return <span>Error...</span>;
        }
        const { cards } = this.state;

        return cards.map((cards) => {
            if (cards.class === 'lavender__card') {
                return (
                    <div key={cards.id} className={`card__item ${cards.class}`}>
                        <span className="card__title">
                            {cards.title} <span className="lavender__text">{cards.text} </span>
                        </span>
                        <span className="card__date">{cards.date}</span>
                        <span className={`card__value ${cards.class}_value`}>
                            {cards.value}
                            <span className="lavender__value">дней до выборов</span>
                        </span>
                        <ProgressBar className={`${cards.class}_bar`} now={cards.progress} />
                    </div>
                );
            }

            return (
                <div key={cards.id} className={`card__item ${cards.class}`}>
                    <span className="card__title">{cards.title}</span>
                    <span className="card__date">{cards.date}</span>
                    <div className={`icon__back ${cards.class}_icon_back`}>
                        <img src={cards.icon} className={`${cards.class}_icon`} alt="icon" />
                    </div>
                    <span className={`card__value ${cards.class}_value`}>{cards.value}</span>
                    <ProgressBar className={`${cards.class}_bar`} now={cards.progress} />
                </div>
            );
        });
    }
}
