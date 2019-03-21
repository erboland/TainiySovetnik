import { StyleSheet } from 'aphrodite';
const imgWidth = '75vw';
const imgHeight = imgWidth;
const styles = StyleSheet.create({
    page: {
      height: '100%',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'scroll',
      overflowY: 'hidden',
      boxSizing: 'border-box',
      padding: '0 5vw',
    },
    member: {
      height: '100%',
      width: '90vw',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    memberPic: {
      height: imgHeight,
      width: imgWidth
    },
    aye: {
      paddingTop: window.innerHeight*10/100,
      boxSizing: 'border-box'
    },
    t1: {
      fontFamily: "SFUIDisplay-Bold",
      fontSize: '4vh',
      padding: '0 10px',
      color: "#FF0000"
    },
    t2: {
      fontFamily: "SFUIDisplay-Regular",
      fontSize: '3vh',
      marginBottom: 10,
      padding: '0 10px'
    },
    t3: {
      fontFamily: "SFUIDisplay-Regular",
      fontSize: '2vh',
      padding: '0 10px'
    }
});
export default styles;