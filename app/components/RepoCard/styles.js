 import {StyleSheet} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../../core/theme';

 const styles = StyleSheet.create({

    cardWrapper:{
      width:widthPercentageToDP(86.6),
      borderRadius:13,
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.border,
      paddingTop:heightPercentageToDP(2.9),
      paddingHorizontal:widthPercentageToDP(4),
      marginBottom:heightPercentageToDP(2.25)
        },
        bttn: {
          width: widthPercentageToDP(80),
          alignSelf: 'center',
          marginBottom: heightPercentageToDP(2.9),
        },
        row:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        },
        lang:{
         fontSize:12,
         fontFamily:'Silka Regular',
         marginRight:widthPercentageToDP(3.3),
         marginLeft:3

        },
        updatedRow:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginBottom:heightPercentageToDP(2.9)
        },
        trending:{
          fontSize:10,
          fontFamily:'Silka Medium',
          color: theme.colors.txtgrey,
          lineHeight:heightPercentageToDP(2.1)
        },
        likesWrapper:{
          backgroundColor: theme.colors.border,
          width:widthPercentageToDP(12.6),
          justifyContent:"center",
          alignItems:'center',
          borderRadius:6,
          height:heightPercentageToDP(3.7)
        },
        star:{
          fontSize:12,
          fontFamily:'Silka Medium'
        },
        likes:{
          color: theme.colors.blue,
          fontSize:12,
          fontFamily:'Silka Medium',
          marginRight:widthPercentageToDP(3.3),
          marginLeft:3

      },
      updated:{
        fontSize:12,
        fontFamily:'Silka Regular'
      },
      repoTitleWrapper:{
      flexDirection:'row',
      alignItems:'center',
      marginBottom:heightPercentageToDP(2.5),
      marginTop:heightPercentageToDP(2.5)
      },
      repoTitle:{
      fontSize:18,
      fontFamily:'Silka SemiBold',
      lineHeight:heightPercentageToDP(3.6),
      marginLeft:widthPercentageToDP(3.1),
      color: theme.colors.blue,
      width:widthPercentageToDP(70)
      },
      divider:{
        width:widthPercentageToDP(77.6),
        height:.5,
        backgroundColor: theme.colors.border,
        marginVertical:heightPercentageToDP(2.25)
      }
  });
  
  export default styles;