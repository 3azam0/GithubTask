import React, { useState,useEffect ,useRef } from 'react';
import { SafeAreaView,RefreshControl,  FlatList, ActivityIndicator ,View } from 'react-native';
import {Text} from 'react-native-paper'
import api from '../../helpers/axios';
import {RepoCard,Loader,DropDown} from '@components'
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
  const [showPerPhage, setShowPerPage] = useState(false);
  const [dropdown] = useState([
    { id: '1', name: '10', value: 10 },
    { id: '2', name: '50', value: 50 },
    { id: '3', name: '100', value: 100 },

  ]);
  const flatListRef = useRef();

  const [{data, loading }, getRepos] = api.useAxios(
    {
      url: `/search/repositories?q=created:>2019-01-10&sort=stars&order=desc&page=${page}&per_page=${perPage}`,
      method: 'get',
     
    },

    { manual: true },
  );

  useEffect(() => {
    getRepos()
      .then((res) => {
       // setPagesCount(res.data.meta.pagination.pages);
        setRepos(res.data.items);
        if (refresh === true) {
          setSetRefresh(false);
        }
      })
      .catch((err) => {});
  }, [perPage]);
  useEffect(() => {
    getRepos()
    .then((res) => {

      if (refresh === true) {
        setSetRefresh(false);
      }
      if (page === 1) {
        setRepos(res.data.items);
        setIsMoreLoading(false);
      } else  {
        setRepos([...repos, ...res.data.items]);
        setIsMoreLoading(false);
      }
    })
    .catch((err) => {
      setIsMoreLoading(false);
      setCanFetchMore(false);
      setSetRefresh(false);
    });
    
  }, [page,refresh]);

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

  const flatListItem = ({item}) => {
    return <RepoCard trending updated={item.updated_at} stars={item.stargazers_count} 
     title={item.full_name} description={item.description} language={item.language}/>;
  };

  const dropDownLbl = () =>{
    return(
      <View style={styles.downLblWrapper}>
      <Text style={styles.lbl}>View: </Text><Text style={styles.vlue}>Top {perPage}</Text><Down />
      </View>
    )
  }
 

  return (
    <>
    <SafeAreaView style={styles.safeAreaView}>
 
    <View>
    <Text  style={styles.headerTitle}>Explore popular</Text>
    </View>
    <View>
    
    <DropDown
    label={ dropDownLbl()  }
      mode={'outlined'}
      visible={showPerPhage}
      showDropDown={() => setShowPerPage(true)}
      onDismiss={() => setShowPerPage(false)}
      value={perPage}
      setValue={(per)=>{setPerPage(per) ,setPage(1)}}
      list={dropdown}
      style={styles.dropdown}
  />
    </View>
      <FlatList
      showsVerticalScrollIndicator={false}
      ref={flatListRef}
      style={{ flex: 1,marginTop:15 }}
      data={repos}
      keyExtractor={(itm) => itm.id.toString()}
      renderItem={flatListItem}
      ListFooterComponent={renderFooter}
      onEndReached={handleOnEndReached}
      
      refreshControl={
        <RefreshControl 
         refreshing={refresh} 
         onRefresh={handleRefresh}
         colors={["#68DDBA"]} 
        />
      }
      onEndReachedThreshold={0.7}
    />
    </SafeAreaView>

    <Loader loading={refresh === false && isMoreLoading === false && loading ? true : false} />
  </>  
  );
}
