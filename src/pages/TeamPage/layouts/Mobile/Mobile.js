import React, { Component } from 'react'
import team from '../../../../database/team/arr';
import { css } from 'aphrodite';
import styles from './styles';
import '../Desktop/Desktop.css';

export default class Mobile extends Component {
  render() {
    return (

      <div className={css(styles.page)}>
      <div style={{width: '100vw', overflowY: 'hidden'}} className="hScroll">
        {team.map((member, i)=>(
          <div className={css(styles.member)} key={i}>
            <div style={{height: window.innerHeight*40/100}} className={css(styles.aye)}>
              {this.props.lang === 'ru' ? <p className={css(styles.t1)}>{member.name_ru}</p> : <p className={css(styles.t1)}>{member.name_en}</p>}
              {this.props.lang === 'ru' ? <p className={css(styles.t2)}>{member.job_ru}</p> : <p className={css(styles.t2)}>{member.job_en}</p>}
              {this.props.lang === 'ru' ? <p className={css(styles.t3)}>{member.desc_ru}</p> : <p className={css(styles.t3)}>{member.desc_en}</p>}
            </div>
            <img src={member.pic} alt="member" className={css(styles.memberPic)} />
          </div>
        ))}
      </div>
       
      </div>
    )
  }
}
