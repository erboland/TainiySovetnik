import { StyleSheet } from 'aphrodite';
const styles = StyleSheet.create({
    page: {
      height: '100%',
      width: '100vw',
      display: 'flex',
      alignItems: 'center'
    },
    teamWrap: {
      height: '60vh',
      width: window.innerWidth,
      backgroundColor: 'white',
      display: 'flex',
      boxSizing: 'border-box',
      padding: `0 0  0 0`,
      marginLeft: '30vw',
      marginTop: '10vh',
      // overflowX: 'scroll',
      overflowY: 'hidden',
      flexDirection: 'row'
    },
    member: {
      height: '100%',
      width: '40vh !important',
      flexShrink: 0
    },
    main: {
      width: '100%',
      height: '40vh',
      position: 'relative'
    },
    img: {
      position: 'absolute',
      height: '40vh',
      width: '40vh',
      zIndex: 10,
      ':hover':{
        opacity: 0
      },
      transition: '0.2s'
    },
    job: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      fontFamily: "SFUIDisplay-Regular",
      fontSize: '2vh'
    },
    naming: {
      fontFamily: "SFUIDisplay-Bold",
      height: '100%',
      paddingTop: 30,
      textAlign: 'center'
    },
    m_name: {
      fontSize: '3vh'
    },
    m_title: {
      fontSize: '2vh',
      color: "#FF0000"
    }
});
export default styles;