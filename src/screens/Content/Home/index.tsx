import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {HomeProps} from '../../../resources/interfaces/screens/home';
import MainLayout from '../../MainLayout';
import SearchBar from '../../../components/SearchBar';
import GenericText from '../../../components/GenericText';
import {tr} from '../../../resources/translations';
// @ts-ignore
import LogoSVG from '../../../resources/assets/svg/logo.svg';
import {useTheme} from '@react-navigation/native';
import {getByScreenSize, hdp} from '../../../utils/responsive';
import Product from '../../../components/Product';
import Category from '../../../components/Category';
import {categories} from '../../../resources/staticData/categories';
import {dataList} from '../../../resources/staticData/list';

const Home = ({navigation}: HomeProps) => {
  const [keyWord, setKeyword] = useState('');
  const theme = useTheme();
  const [list, setList] = useState(dataList);
  const renderProductItem = ({item}) => {
    return (
      <Product
        details={item}
        containerStyle={{marginRight: getByScreenSize(20, 30)}}
        onPress={() => navigation?.navigate('productDetails', {details: item})}
      />
    );
  };
  return (
    <MainLayout
      tabHeader
      bottomSpace
      enableScroll
      title={tr('home.headerTitle')}>
      <View style={styles.container}>
        <SearchBar
          value={keyWord}
          placeholder={tr('home.searchPlaceHolder')}
          onChangeText={(text: string) => setKeyword(text)}
          onEndEditing={(text: string) => setKeyword(text)}
          maxLength={40}
        />
        <View style={styles.titleContainer}>
          <LogoSVG
            width={getByScreenSize(30, 50)}
            height={getByScreenSize(30, 50)}
          />
          <GenericText
            style={[
              styles.title,
              {
                color: theme.home.title,
                fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
              },
            ]}>
            {tr('home.featuredProducts')}
          </GenericText>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list[0].productsList}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          style={{
            backgroundColor: 'transparent',
            marginLeft: '2%',
          }}
        />
        <View style={styles.titleContainer}>
          <LogoSVG
            width={getByScreenSize(30, 50)}
            height={getByScreenSize(30, 50)}
          />
          <GenericText
            style={[
              styles.title,
              {
                color: theme.home.title,
                fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
              },
            ]}>
            {tr('home.bestSeller')}
          </GenericText>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list[1].productsList}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          style={{
            backgroundColor: 'transparent',
            paddingLeft: '2%',
          }}
        />
        <View style={styles.titleContainer}>
          <LogoSVG
            width={getByScreenSize(30, 50)}
            height={getByScreenSize(30, 50)}
          />
          <GenericText
            style={[
              styles.title,
              {
                color: theme.home.title,
                fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
              },
            ]}>
            {tr('home.exploreCategory')}
          </GenericText>
        </View>
        <View style={styles.categoriesContainer}>
          {categories.map((item, key) => (
            <Category
              details={item}
              key={key}
              containerStyle={{marginBottom: '3%'}}
            />
          ))}
        </View>
        <View style={[styles.titleContainer, {marginTop: '-1%'}]}>
          <LogoSVG
            width={getByScreenSize(30, 50)}
            height={getByScreenSize(30, 50)}
          />
          <GenericText
            style={[
              styles.title,
              {
                color: theme.home.title,
                fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
              },
            ]}>
            {tr('home.onSale')}
          </GenericText>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list[2].productsList}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          style={{
            backgroundColor: 'transparent',
            paddingLeft: '2%',
          }}
        />
        <View
          style={{paddingVertical: hdp(7.5), backgroundColor: 'transparent'}}
        />
      </View>
    </MainLayout>
  );
};
export default Home;
