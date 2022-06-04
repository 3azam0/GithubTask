import React from 'react';
import { Appbar, withTheme, useTheme, Switch } from 'react-native-paper';
import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import DarkLogo from '../../assets/icons/DarkLogo';
import LightLogo from '../../assets/icons/LightLogo';
import { PreferencesContext } from '../../core/PreferencesContext';

const AppHeader = ({ title, subtitle, search, titleStyle, handleSearch, style, dark }) => {
  const { colors } = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <>
      <StatusBar
        backgroundColor={colors.white}
        barStyle={isThemeDark ? 'light-content' : 'dark-content'} // Here is where you change the font-color
      />
      <Appbar.Header style={[styles.wrapper, { backgroundColor: colors.white }, style]}>
        <Appbar.Action
          style={styles.headerAction}
          icon={() => {
            return !isThemeDark ? <DarkLogo /> : <LightLogo />;
          }}
        />

        <Appbar.Content
          // style={{ textAlign: 'center' }}
          // textAlign="center"
          title={title}
          titleStyle={[
            {
              color: colors.txtBlue,
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
          style={{ marginLeft: 0 }}
        />
        <Appbar.Action color={'red'} />

        {search && <Appbar.Action icon="magnify" size={25} onPress={handleSearch} />}
        <Switch
          style={[{ backgroundColor: colors.white }]}
          color={colors.toggle}
          onValueChange={() => toggleTheme()}
          value={isThemeDark}
        />
      </Appbar.Header>
    </>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    elevation: 0,
    borderBottomWidth: 0,
    width: '100%',
  },
  uploadButtonImageStyle: {
    width: 20,
    height: 20,
  },
  headerAction: { width: widthPercentageToDP(30), height: 24, alignItems: 'flex-start' },
});

export default withTheme(AppHeader);
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
  titleStyle: {},
  title: '',
  subtitle: '',
  search: false,
  handleSearch: () => {},
  disableBackAction: () => {},
};
