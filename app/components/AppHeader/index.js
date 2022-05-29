//import { RFC_2822 } from 'moment';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {theme} from '../../core/theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

 const AppHeader = ({
  title,
  subtitle,
  search,
  titleStyle,
  handleSearch,
  style,
  disableBackAction,
}) => {
  return (
    <Appbar.Header  style={[styles.wrapper, style]}>
        <Appbar.Action style={styles.headerAction} icon={()=>{
         return <Image source={require('../../assets/Milango.png') }  style={{ width:widthPercentageToDP(30),height:24}}/>
        }} />
      
      <Appbar.Content
        // style={{ textAlign: 'center' }}
        // textAlign="center"
        title={title}
        titleStyle={[
          {
            color: theme.colors.primary,
            // marginLeft: -10,
            alignSelf: 'center',
            // textAlign: 'center',
            fontSize: 16,
            // textAlign: 'center',
            fontFamily: 'GE-SS-Two-Bold',
          },
          titleStyle,
        ]}
        subtitle={subtitle}
        style={{marginLeft: 0}}
      />
      <Appbar.Action color={'red'} />

      {search && <Appbar.Action icon="magnify" size={25} onPress={handleSearch} />}
     
     
    </Appbar.Header>
  );
};

export default AppHeader
AppHeader.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  title: PropTypes.string,
  subtitle: PropTypes.string,
  search: PropTypes.bool,
  disableBackAction: PropTypes.func,
  handleSearch: PropTypes.func,
};

AppHeader.defaultProps = {
  style: {},
  titleStyle:{},
  title: '',
  subtitle: '',
  search:false,
  handleSearch: () => {},
  disableBackAction: () => {},
};

const styles = StyleSheet.create({
  wrapper: { backgroundColor: '#fff',justifyContent:'center',alignItems:'center',paddingHorizontal:25, elevation: 0,borderBottomWidth:0, width: '100%'},
  uploadButtonImageStyle: {
    width: 20,
    height: 20,
  },
  headerAction: {width:widthPercentageToDP(30),height:24,alignItems:'flex-start'},

 
});
