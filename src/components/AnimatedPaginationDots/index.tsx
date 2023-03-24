import React from 'react';
import {Animated, Image, TouchableOpacity, View} from 'react-native';
import PagerView, {
  PagerViewOnPageScrollEventData,
} from 'react-native-pager-view';

import {ScalingDot} from 'react-native-animated-pagination-dots';
import styles from './styles';
import {AnimationPaginationDotsProps} from '../../resources/interfaces/components/animationPaginationDots';
import {useTheme} from '@react-navigation/native';
import {getByScreenSize, wdp} from '../../utils/responsive';
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const AnimatedPaginationDots = ({
  data,
  containerStyle,
  navigation,
}: AnimationPaginationDotsProps) => {
  const ref = React.useRef<PagerView>(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, data.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * wdp(100)],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const theme = useTheme();
  return (
    <View style={[styles.container, containerStyle]}>
      <AnimatedPagerView
        initialPage={0}
        ref={ref}
        style={styles.PagerView}
        onPageScroll={onPageScroll}>
        {data.map(({id}) => (
          <TouchableOpacity
            key={id}
            style={styles.imageContainer}
            onPress={() =>
              navigation?.navigate('imageViewer', {image: data[id]})
            }>
            <Image
              source={{
                uri: data[id].uri
                  ? data[id].uri
                  : 'https://i.postimg.cc/1zgCL9YJ/image-coming-soon.png',
              }}
              resizeMode={'contain'}
              style={[styles.image]}
            />
          </TouchableOpacity>
        ))}
      </AnimatedPagerView>
      <View style={styles.dotContainer}>
        <ScalingDot
          data={data}
          //@ts-ignore
          scrollX={scrollX}
          inActiveDotColor={theme.animationPaginationDots.unSelectedDot}
          activeDotColor={theme.animationPaginationDots.selectedDot}
          // activeDotScale={getByScreenSize(1.4, 2)}
          dotStyle={{
            width: getByScreenSize(10, 20),
            height: getByScreenSize(10, 20),
            borderRadius: getByScreenSize(5, 10),
            marginHorizontal: getByScreenSize(5, 10),
          }}
        />
      </View>
    </View>
  );
};
export default AnimatedPaginationDots;
