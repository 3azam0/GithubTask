import React from 'react';
import { View } from 'react-native';
import { Text, withTheme, useTheme } from 'react-native-paper';
import moment from 'moment';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { BookMark } from '@icons';
import styless from './styles';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const RepoCard = ({ title, description, language, stars, updated, trending }) => {
  const { colors } = useTheme();
  const styles = styless(colors);

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + ' k'
      : Math.sign(num) * Math.abs(num);
  }

  const now = moment(new Date());

  const handleUpdated = () => {
    return now.diff(moment(updated), 'hours');
  };
  return (
    <View style={styles.cardWrapper}>
      {trending && (
        <View style={styles.row}>
          <Text style={styles.trending}>Trending repository</Text>
          <View style={[styles.row, { width: widthPercentageToDP(26.4), height: 25 }]}>
            <View style={styles.row}>
              <Icon name="star-outline" size={12} color="#68DDBA" />
              <Text style={styles.star}> Star</Text>
            </View>
            <View style={styles.likesWrapper}>
              <Text style={styles.likes}>{kFormatter(stars)}</Text>
            </View>
          </View>
        </View>
      )}
      <View style={styles.repoTitleWrapper}>
        <BookMark width={widthPercentageToDP(4)} height={heightPercentageToDP(3)} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.repoTitle}>
          {title}
        </Text>
      </View>
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.paragraph}>
        {description}
      </Text>
      <View style={styles.divider}></View>
      {updated ? (
        <View style={styles.updatedRow}>
          <Text style={styles.updated}>Updated {handleUpdated()} hours ago</Text>
          <Text style={styles.lang}>{language}</Text>
        </View>
      ) : (
        <View style={styles.updatedRow}>
          <View style={[styles.row, { width: widthPercentageToDP(26.4), height: 25 }]}>
            <Text style={styles.lang}>{language}</Text>

            <View style={styles.row}>
              <Icon name="star-outline" size={12} color="#68DDBA" />
              <Text style={styles.likes}>{kFormatter(stars)}</Text>
            </View>

            <View style={styles.row}>
              <Icon name="git-network-outline" size={12} color="#68DDBA" />
              <Text style={styles.likes}>{kFormatter(stars)}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default withTheme(RepoCard);
RepoCard.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  stars: PropTypes.string,

  title: PropTypes.string,
  language: PropTypes.string,

  description: PropTypes.string,
  updated: PropTypes.string,
  trending: PropTypes.bool,
};

RepoCard.defaultProps = {
  style: {},
  titleStyle: {},
  title: '',
  language: '',
  description: '',
  stars: PropTypes.string,

  updated: '',
  trending: false,
};
