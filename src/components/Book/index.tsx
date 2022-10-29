import React, {FC, memo,} from 'react';
import {SafeAreaView} from 'react-native';
import {ReaderProvider} from '@epubjs-react-native/core';
import {styles} from './Book.styles';
import {Props} from './Book.props';
import{ ReaderWrapper } from '../ReaderWrapper';

const BookFunc: FC<Props> = () => {
  return (
    <SafeAreaView>
      <ReaderProvider>
        <ReaderWrapper />
      </ReaderProvider>
    </SafeAreaView>
  );
};

export const Book = memo(BookFunc);
