import React, {FC, memo} from 'react';
import {Props} from './HomeScreen.props';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {CoverBook} from '../../components/CoverBook';
import {styles} from './HomeScreen.styles';

const HomeScreenFunc: FC<Props> = ({route, navigation}) => {
  const {data} = useSelector((item: any) => item.data);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      numColumns={2}
      data={data}
      renderItem={({item}) => (
        <CoverBook
          key={`${item}`}
          image={item.image}
          nameBook={item.nameBook}
          authorBook={item.authorBook}
          url={item.url}
          index={item.id}
          invisible={item.invisible}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export const HomeScreen = memo(HomeScreenFunc);
