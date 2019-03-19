import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Ionicons from "react-ionicons";
export default class Text1 extends Component {
  state = {
    isOpen: "false"
  };
  openText = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className={css(styles.wrap)}>
        {this.props.lang === "ru" ? (
          <p>
            Visa — международная платёжная система, ежегодный торговый оборот по
            картам Visa составляет 4,8 триллиона долларов США. «Тайный советник»
            — официальная пресс-служба компании Visa в странах Центральной Азии
            с 2007
          </p>
        ) : (
          <p>
            Visa is an international payment system with an annual card
            transactions turnover of USD 4.8 trillion. Tayniy Sovetnik is the
            official press service of Visa in Central Asia since 2007.{" "}
          </p>
        )}
        {this.props.lang === "ru" ? (
          <p
            style={{ marginTop: "40px", color: "#acacac", lineHeight: "33px" }}
          >
            «Тайный советник» более 10 лет является пресс-службой международной
            платежной системы Visa в странах Центральной Азии — и сопровождает
            коммуникационные кампании.
          </p>
        ) : (
          <p
            style={{ marginTop: "40px", color: "#acacac", lineHeight: "33px" }}
          >
            Tayniy Sovetnik has been Visa’s aide in Central Asia for over a
            decade, supporting its communications campaigns.
          </p>
        )}
        
      </div>
    );
  }
}
