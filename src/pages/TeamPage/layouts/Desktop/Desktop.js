import React, { Component, Fragment } from 'react';
import team from '../../../../database/team/arr';
import { css } from 'aphrodite';
import styles from './styles';
import './Desktop.css';
import HorizontalScroll from 'react-scroll-horizontal';

export default class Desktop extends Component {

  renderTeam = () => {
    
    return(
      <Fragment>
        <div className="hScroll" reverseScroll="true" style={{overflowY: "hidden"}}>
        {team.map((member, i)=>(
                <div className={css(styles.member)} style={{ marginRight: 20 }} key={i}>
                  <div className={css(styles.main)}>
                    <img src={member.pic} className={css(styles.img)} alt="team_member"/>
                    <div className={css(styles.job)}>
                      {this.props.lang === 'ru' ? <p>{member.desc_ru}</p> : <p>{member.desc_en}</p>}
                    </div>
                  </div>
                  <div className={css(styles.naming)}>
                    {this.props.lang === 'ru' ? <p className={css(styles.m_name)}>{member.name_ru}</p> : <p className={css(styles.m_name)}>{member.name_en}</p>}
                    {this.props.lang === 'ru' ? <p className={css(styles.m_title)}>{member.job_ru}</p> : <p className={css(styles.m_title)}>{member.job_en}</p>}              
                  </div>
                </div>
              ))}
        </div>
          
        
          
            
              

      </Fragment>
    )
  }
  render() {
    console.log(this)
    return (
      <div className={css(styles.page)}>
        
        <div className={css(styles.teamWrap)}>

          {this.renderTeam()}

            
        </div>   
        
      </div>
    )
  }
}
