import React, {FC, memo} from 'react';
import {MapItems, Props} from './HomeScreen.props';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CoverBook} from '../../components/CoverBook';
import {styles} from './HomeScreen.styles';
import {ModalWindow} from '../../components/Modal';

const HomeScreenFunc: FC<Props> = ({route, navigation}) => {
  const {data} = useSelector((item: any) => item.data);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      {data.map((item: MapItems, itemIndex: number) => {
        return (
          <CoverBook
            key={`${item}-${itemIndex}`}
            image={item.image}
            nameBook={item.nameBook}
            authorBook={item.authorBook}
            url={item.url}
            index={itemIndex}
          />
        );
      })}
    </ScrollView>
  );
};

export const HomeScreen = memo(HomeScreenFunc);
