import React, {FC, memo,} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './CoverBook.styles';
import {Navigate, Props} from './CoverBook.props';
import { SCREEN_NAMES } from '../../constants/screenNames';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrencyBook, setCurrencyUrl } from '../../store/slices/dataBookSlice';
import { Fonts } from '../../styles/fonts';

const CoverBookFunc: FC<Props> = ({
  image, 
  nameBook, 
  authorBook, 
  url,
  index,
  invisible
  }) => {

  const dispatch = useDispatch()

  const navigation: Navigate = useNavigation();

  const goToBook = () => {
    dispatch(setCurrencyUrl(url))
    dispatch(setCurrencyBook(nameBook+index))
    navigation.navigate(SCREEN_NAMES.BOOK_READ_SCREEN, {url})
  }  

  return (
      <View style={styles.container}>
        <TouchableOpacity disabled={invisible} onPress={goToBook}>
          <Image style={styles.image} source={{uri: image}} />
        </TouchableOpacity>
        <View style={styles.wrapperInfo}>
          <Text numberOfLines={1} style={[styles.text, {fontFamily: Fonts.Roboto_Medium}]}>{nameBook}</Text>
          <Text numberOfLines={1} style={styles.text}>{authorBook}</Text>
        </View>
      </View>
  );
};

export const CoverBook = memo(CoverBookFunc);
