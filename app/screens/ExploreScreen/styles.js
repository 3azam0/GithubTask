import { StyleSheet} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../../core/theme';


const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: theme.colors.backGround,
        paddingHorizontal:25,
      },
      headerTitle: {
        fontSize:20,
    fontFamily:'Silka SemiBold',
    marginTop:heightPercentageToDP(4.5),
    marginBottom:heightPercentageToDP(3.44),
    
      },
      downLblWrapper:{
        flexDirection:'row',
        backgroundColor: theme.colors.white,width:widthPercentageToDP(39.3),height:heightPercentageToDP(6.14),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:9
      },
      lbl:{
        color: theme.colors.txtgrey,
    fontSize:14
      },
      vlue:{
        color: theme.colors.black,
        fontSize:14,
        marginRight:18
      },
      dropdown:{ backgroundColor:  theme.colors.white,width:widthPercentageToDP(86.7),height:heightPercentageToDP(6.14)}
    
  });
  
  export default styles