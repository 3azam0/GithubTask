import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Checkbox, Divider, Menu, TextInput, Text, TouchableRipple, useTheme } from 'react-native-paper';
import React, { forwardRef, useEffect, useState, useCallback, Fragment } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
const DropDown = forwardRef((props, ref) => {
  const activeTheme = useTheme();
  const {
    multiSelect = false,
    visible,
    style,
    onDismiss,
    showDropDown,
    value,
    setValue,
    activeColor,
    search,
    label,
    placeholder,
    inputProps,
    list,
    dropDownContainerMaxHeight,
    dropDownContainerHeight,
    theme,
    dropDownStyle,
    dropDownItemStyle,
    dropDownItemSelectedStyle,
    dropDownItemTextStyle,
    dropDownItemSelectedTextStyle,
    accessibilityLabel,
  } = props;
  const [displayValue, setDisplayValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(list);
  const [masterDataSource, setMasterDataSource] = useState(list);
  const { colors } = useTheme();

  const [inputLayout, setInputLayout] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });
  const onLayout = (event) => {
    setInputLayout(event.nativeEvent.layout);
  };
  useEffect(() => {
    if (multiSelect) {
      const _labels = list
        .filter((_) => value.indexOf(_.id) !== -1)
        .map((_) => _.name)
        .join(', ');
      setDisplayValue(_labels);
    } else {
      const _label = list.find((_) => _.value === value)?.name;
      if (_label) {
        setDisplayValue(_label);
      }
    }
  }, [list, value]);
  const isActive = useCallback(
    (currentValue) => {
      if (multiSelect) {
        return value.indexOf(currentValue) !== -1;
      } else {
        return value === currentValue;
      }
    },
    [value],
  );
  const setActive = useCallback(
    (currentValue) => {
      if (multiSelect) {
        const valueIndex = value.id.indexOf(currentValue);
        const values = value.split(',');
        if (valueIndex === -1) {
          setValue([...values, currentValue].join(','));
        } else {
          setValue([...values].filter((value) => value !== currentValue).join(','));
        }
      } else {
        setValue(currentValue);
      }
    },
    [value],
  );
  const filterItem = (searchItems) => {
    searchItems.filter((item) => {
      return item.name.toLowerCase().indexOf(searchQuery || ''.toLowerCase() !== -1);
    });
  };
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = list.filter((item) => {
        const itemData = item.value ? item.value.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchQuery(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearchQuery(text);
    }
  };

  const _searchTextInputChanged = async (text) => {
    const newData = await list.filter((e) => e.value.toLowerCase() === text.toLowerCase());

    //change your logic as per your requirement
    if (newData.length > 0) {
      this.setState({ farmers: newData });
    } else {
      this.setState({ farmers: data });
    }
  };
  return (
    <Menu
      visible={visible}
      onDismiss={onDismiss}
      theme={theme}
      contentStyle={{ backgroundColor: colors.white }}
      anchor={
        <TouchableOpacity ref={ref} onPress={showDropDown} onLayout={onLayout} accessibilityLabel={accessibilityLabel}>
          <View pointerEvents={'none'}>{label}</View>
        </TouchableOpacity>
      }
      style={{
        maxWidth: widthPercentageToDP(86.7),
        width: widthPercentageToDP(86.7),
        height: heightPercentageToDP(66.12),
        maxHeight: heightPercentageToDP(66.12),
        backgroundColor: colors.white,
        marginTop: -50,
        paddingTop: -20,
        ...dropDownStyle,
      }}>
      <ScrollView
        bounces={false}
        style={{
          ...(dropDownContainerHeight
            ? {
                height: heightPercentageToDP(66.12),
              }
            : {
                maxHeight: heightPercentageToDP(66.12),
              }),
        }}>
        {search && (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: widthPercentageToDP(5),
                marginTop: heightPercentageToDP(2.85),
                marginBottom: heightPercentageToDP(3.3),
                alignItems: 'center',
              }}>
              <Text>Select Language</Text>
              <Icon color={'#CCD4DD'} onPress={onDismiss} size={20} name="close-circle" />
            </View>
            <TextInput
              onChangeText={(text) => searchFilterFunction(text)}
              value={searchQuery}
              placeholder="Filter Languages"
              underlineColor="transparent"
              theme={{ colors: { placeholder: '#CCD4DD', primary: 'transparent', underlineColor: 'transparent' } }}
              right={<TextInput.Icon name="magnify" color="#7B848D" />}
              style={{
                width: widthPercentageToDP(76.8),
                backgroundColor: colors.white,
                borderWidth: 1,
                borderTopRightRadius: 9,
                borderTopLeftRadius: 9,
                borderColor: '#CCD4DD',
                borderRadius: 9,
                alignSelf: 'center',
                height: heightPercentageToDP(5.83),
                justifyContent: 'center',
              }}
            />
          </>
        )}
        {filteredDataSource.map((_item, _index) => (
          <Fragment key={_item.id}>
            <TouchableRipple
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                setActive(_item.value);
                if (onDismiss) {
                  onDismiss();
                }
              }}>
              <Fragment>
                <Menu.Item
                  titleStyle={{
                    color: isActive(_item.value)
                      ? activeColor || (theme || activeTheme).colors.primary
                      : (theme || activeTheme).colors.text,
                    ...(isActive(_item.value) ? dropDownItemSelectedTextStyle : dropDownItemTextStyle),
                  }}
                  title={_item.custom || _item.name}
                  style={{
                    flex: 1,
                    maxWidth: inputLayout?.width,
                    marginHorizontal: 20,
                    height: 48,
                    ...(isActive(_item.value) ? dropDownItemSelectedStyle : dropDownItemStyle),
                  }}
                />
                {multiSelect && (
                  <Checkbox.Android
                    theme={{
                      colors: { accent: activeTheme?.colors.primary },
                    }}
                    status={isActive(_item.id) ? 'checked' : 'unchecked'}
                    onPress={() => setActive(_item.id)}
                  />
                )}
              </Fragment>
            </TouchableRipple>
            <Divider />
          </Fragment>
        ))}
      </ScrollView>
    </Menu>
  );
});
export default DropDown;
