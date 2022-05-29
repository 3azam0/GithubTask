
import { StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    calndarWrapper: {
        position: 'absolute',
        zIndex: 3,
        alignSelf: 'center',
        width: widthPercentageToDP(86.7),
        height: heightPercentageToDP(56.97),
        backgroundColor: '#fff',
        marginTop: heightPercentageToDP(8),
        borderRadius: 9,
      },
      calendar: {
        alignSelf: 'center',
        width: widthPercentageToDP(77.7),
        height: heightPercentageToDP(42.88),
      },
     
      row:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: widthPercentageToDP(5),
            marginTop: heightPercentageToDP(2.85),
            marginBottom: heightPercentageToDP(3.3),
            alignItems: 'center',
      }
  })
  export default styles