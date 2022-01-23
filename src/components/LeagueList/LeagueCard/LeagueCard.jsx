import React from "react";
import css from './LeagueCard.module.css';

const LeagueCard = (props) => {
    return (
        <div className={css.card}>
            <div className={css.card__title}>
                <h3>{props.name}</h3>
            </div>
            <div className={css.card__imageBlock}>
                <div className={css.card__imageContainer}>
                    <img className={css.image} src={props.area.ensignUrl} alt='flag' />
                </div>
                <div className={css.card__imageContainer}>
                    <img className={css.image} src={props.emblemUrl} alt='emblem' />
                </div>
            </div>
            <div className={css.card__dataBlock}>
                <span>{props.area.name}</span>
                <div>
                    <div>Начало сезона: {props.currentSeason.startDate}</div>
                    <div>Конец сезона: {props.currentSeason.endDate}</div>
                    <div>День чемпионата: {props.currentSeason.currentMatchday}</div>
                    <div>Победитель: {(props.currentSeason.winner!=null) ? props.currentSeason.winner.name : `неопределён`}</div>
                </div>
            </div>
            <div className={css.card__buttonBlock}>
                <button className={css.card__button}>Календарь лиги</button>
                <button className={css.card__button}>Список команд</button>
            </div>
        </div>
    )
}

export default LeagueCard;