import React, { Component } from 'react';
import './appHeader.css';
import { NavItem, NavLink } from 'reactstrap';

export default class AppHeader extends Component {
    render() {
        return (
            <div className="app_header">
                <div className="logo">
                    <div className="logo_icon">
                        <img className="round" src="./icons/logo/Vector.png" alt="Round"></img>
                        <img className="first" src="./icons/logo/Vector1.png" alt="Round"></img>
                        <img className="second" src="./icons/logo/Vector2.png" alt="Round"></img>
                        <img className="third" src="./icons/logo/Vector3.png" alt="Round"></img>
                    </div>
                    <div className="logo_text">
                        <img className="o" src="./icons-text/o.png" alt="Round"></img>
                        <img className="n" src="./icons-text/n.png" alt="Round"></img>
                        <img className="l" src="./icons-text/l.png" alt="Round"></img>
                        <img className="i" src="./icons-text/i.png" alt="Round"></img>
                        <img className="n" src="./icons-text/n.png" alt="Round"></img>
                        <img className="e" src="./icons-text/e.png" alt="Round"></img>
                        <img className="sh" src="./icons-text/sh.png" alt="Round"></img>
                        <img className="t" src="./icons-text/t.png" alt="Round"></img>
                        <img className="a" src="./icons-text/a.png" alt="Round"></img>
                        <img className="b" src="./icons-text/b.png" alt="Round"></img>
                    </div>
                </div>
                <div className="navbar">
                    <NavItem>
                        <NavLink href="#">
                            <span>Мониторинг</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <span>Поле</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <span>Отчеты</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <span>Календарь</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <span>Конструктор</span>
                        </NavLink>
                    </NavItem>
                </div>
                <div className="tools">
                    <img src="./icons/badges/bell.png" alt="bell"></img>
                    <img src="./icons/badges/acc.png" alt="acc"></img>
                    <img src="./icons/badges/gear.png" alt="gear"></img>
                </div>
            </div>
        );
    }
}
