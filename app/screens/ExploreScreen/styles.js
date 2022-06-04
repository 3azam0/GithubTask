import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const styless = (colors) =>
  StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: colors.backGround,

      paddingHorizontal: 25,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: 'Silka SemiBold',
      marginTop: heightPercentageToDP(4.5),
      marginBottom: heightPercentageToDP(3.44),
    },
    downLblWrapper: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      width: widthPercentageToDP(39.3),
      height: heightPercentageToDP(6.14),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 9,
    },
    lbl: {
      color: colors.txtgrey,
      fontSize: 14,
    },
    vlue: {
      color: colors.txtBlack,
      fontSize: 14,
      marginRight: 18,
    },
    dropdown: { backgroundColor: colors.white, width: widthPercentageToDP(86.7), height: heightPercentageToDP(6.14) },
  });

export default styless;
