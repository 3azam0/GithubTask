import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, View,RefreshControl, TouchableOpacity } from 'react-native';
import { Text,  } from 'react-native-paper';
import moment from 'moment';
import api from '../../helpers/axios';
import { RepoCard, Loader, DropDown ,Calendarr } from '@components';
import {Down} from '@icons'
import styles from './styles'
export default ExploreScreen = ({ navigation }) => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setSetRefresh] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [canFetchMore, setCanFetchMore] = useState(true);
  const [pagesCount, setPagesCount] = useState(10);
  const [perPage, setPerPage] = useState(10);
  const [showLanguages, setShowLanguages] = useState(false);

  const [language, setLanguage] = useState('any');
  const [languages] = useState([
    { id: '1', name: 'C', value: 'C' },
    { id: '2', name: 'Java', value: 'Java' },
    { id: '3', name: 'C++', value: 'C++' },
    { id: '4', name: 'C', value: 'C' },
    { id: '5', name: 'Java', value: 'Java' },
    { id: '6', name: 'C++', value: 'C++' },
  ]);
  const [showCal, setShowCal] = useState(false);
  const [value, setValue] = useState(10);
  const [selected, setSelected] = useState('2019-01-10');
  const [selectedDisplay, setSelectedDisplay] = useState('2019-01-10');

  const flatListRef = useRef();
const lngUrl = `/search/repositories?q=language:${language}&sort=stars&order=desc`
const dateUrl = `/search/repositories?q=created:>${selected}&sort=stars&order=desc`

  const [{  loading }, getLngRepos] = api.useAxios(
    {
      url:`/search/repositories?q=language:${language}&sort=stars&order=desc`,
      method: 'get',
    },

    { manual: true },
  );
  const [{ loading:isLoading }, getDateRepos] = api.useAxios(
    {
      url:`/search/repositories?q=created:>${selected}&sort=stars&order=desc`,
      method: 'get',
    },

    { manual: true },
  );
  useEffect(() => {
    getDateRepos()
      .then((res) => {
        // setPagesCount(res.data.meta.pagination.pages);
        setRepos(res.data.items);
        
      })
      .catch((err) => {});
  }, [selected]);
  useEffect(() => {
    getLngRepos()
      .then((res) => {
        // setPagesCount(res.data.meta.pagination.pages);
        setRepos(res.data.items);
        
      })
      .catch((err) => {});
  }, [language ]);
 
  const renderFooter = () => {
    return isMoreLoading && <ActivityIndicator animating size={'large'} />;
  };
  const handleOnEndReached = () => {
if(isMoreLoading === false){
    if (page < pagesCount) {
      setIsMoreLoading(true);

      setPage(page + 1);
    }
  }
  };

  const handleRefresh = () => {
    setSetRefresh(true);
    setPage(1);
  };

  const flatListItem = ({ item }) => {
    return (
      <RepoCard
        stars={item.stargazers_count}
        title={item.full_name}
        description={item.description}
        language={item.language}
      />
    );
  };

  const dropDownLbl = (lbl, vlue) => {
    return (
      <TouchableOpacity onPress={() => setShowCal(true)} style={styles.downLblWrapper}>
        <Text style={styles.lbl}>{lbl} </Text>
        <Text style={styles.vlue}>{vlue}</Text>
        <Down />
      </TouchableOpacity>
    );
  };

  const dropDownHandler = (lng)=>{
    setLanguage(lng)
  }
  const onDayPress = useCallback((day) => {
    setSelected(moment(day.dateString).format('YYYY-MM-DD'));
    setSelectedDisplay(moment(day.dateString).format('DD MMMM  YY'));
    setShowCal(false);
 //   setPage(1)
  }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#D8F6ED',
        selectedTextColor: '#68DDBA',
      },
    };
  }, [selected]);

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View>
          <Text style={styles.headerTitle}>Repositories</Text>
        </View>
        {showCal && (
          <Calendarr onDayPress={onDayPress} onDismiss={()=>setShowCal(false)}  marked={marked}/>
        )}
        <View style={styles.dropDownWrapper}>
          <DropDown
            search
            label={dropDownLbl('Language:', language)}
            mode={'outlined'}
            visible={showLanguages}
            showDropDown={() => setShowLanguages(true)}
            onDismiss={() => setShowLanguages(false)}
            value={language}
            setValue={(lng)=>dropDownHandler(lng)}
            list={languages}
            style={styles.dropdown}
          />
          {dropDownLbl('date:', selectedDisplay)}
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          style={{ flex: 1, marginTop: 15 }}
          data={repos}
          keyExtractor={(itm) => itm.id.toString()}
          renderItem={flatListItem}
         
        />
      </SafeAreaView>

      <Loader loading={loading || isLoading} />
    </>
  );
};
