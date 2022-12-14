import React, {FC, memo, useEffect, useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from './Modalstyles';
import {Props} from './Modal.props';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from '../Icon';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';

const ModalFunc: FC<Props> = () => {
  const {width} = useWindowDimensions();

  const [modalVisible, setModalVisible] = useState(true);

  const offset = useSharedValue(w(width) - w(180));

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  }, []);

  const setModalVisibleStorage = async () => {
    try {
      await AsyncStorage.setItem('modalVisible', '');
    } catch (e) {}
  };

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(0, {
        duration: 2000,
        easing: Easing.out(Easing.exp),
      }),
      3,
    );
    setModalVisibleStorage();
  }, []);

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centredModal}>
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.wrapperSwipeInfo}>
              <Text style={styles.swipeInfo}>
                Что бы листать страницы сделайте свайп:
              </Text>
            </View>
            <Animated.View style={[animatedStyles, styles.animatedView]}>
              <Icon color={Colors.LIGHT_SILVER} size={w(180)} name="Swipe" />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export const ModalWindow = memo(ModalFunc);
