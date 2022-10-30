import React, {FC, memo, useEffect} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {Reader, useReader} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './ReaderWrapper.style';
import {useDispatch, useSelector} from 'react-redux';
import {Props} from './ReaderWrapper.props';
import {setCounterPages, setLoadingBook, setModalVisible} from '../../store/slices/dataBookSlice';
import { ModalWindow } from '../Modal';

const ReaderWraperFn: FC<Props> = () => {
  const {width, height} = useWindowDimensions();

  type CurrencyData = {
    currencyBook: string;
    currencyUrl: string;
    counterPages: number;
    loadingBook: boolean;
    modalVisible: boolean;
  };

  type ItemData = {
    data: CurrencyData;
  };

  const dispatch = useDispatch();

  const {data} = useSelector((item: ItemData) => item);

  const {goNext} = useReader();

  const getVisibleModal = async () => {
    try {
      const modalVisible = await AsyncStorage.getItem('modalVisible');
      const modalBoolean = Boolean(modalVisible)
      dispatch(setModalVisible(modalBoolean))
    } catch (e) {}
  }

  useEffect(() => {
    getVisibleModal()
  },[])

  const setData = async (numberPage: number) => {
    try {
      await AsyncStorage.setItem(`${data.currencyBook}`, String(numberPage));
    } catch (e) {}
  };

  const changeLocation = (direction: string) => {
    if (direction === 'left') {
      const num = data.counterPages + 1;
      dispatch(setCounterPages(num));
      setData(num);
    } else {
      if (data.counterPages !== 0) {
        const num = data.counterPages - 1;
        dispatch(setCounterPages(num));
        setData(num);
      }
    }
  };

  const getData = async () => {
    try {
      const numberPage = await AsyncStorage.getItem(`${data.currencyBook}`);
      const num = Number(numberPage);
      dispatch(setCounterPages(num));

      if (numberPage !== null) {
        for (let i = 0; i < num; i++) {
          goNext();
        }
      }
    } catch (e) {}
    dispatch(setLoadingBook(true))
  };

  return (
    <View>
      <Reader
        src={data.currencyUrl}
        width={width}
        height={height}
        fileSystem={useFileSystem}
        onSwipeLeft={() => {
          changeLocation('left');
        }}
        onSwipeRight={() => {
          changeLocation('right');
        }}
        onReady={getData}
      />
      {data.loadingBook && data.modalVisible && <ModalWindow />}
    </View>
  );
};

export const ReaderWrapper = memo(ReaderWraperFn);
