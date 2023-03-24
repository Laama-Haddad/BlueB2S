import React from 'react';
import {ImageViewerProps} from '../../../resources/interfaces/screens/imageViewer';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import ImageZoom from 'react-native-image-pan-zoom';
import Icon from '../../../components/Icon';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {Image, View} from 'react-native';

const ImageViewer = ({route, navigation}: ImageViewerProps) => {
  const {image} = route.params;
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.imageViewer.background},
      ]}>
      <Icon
        style={[
          styles.backIcon,
          {
            backgroundColor: theme.imageViewer.backIconBackground,
            width: wdp(getByScreenSize(11, 8)),
            height: wdp(getByScreenSize(11, 8)),
            borderRadius: wdp(getByScreenSize(5.5, 4)),
          },
        ]}
        name={'chevron-left'}
        type={'Feather'}
        color={theme.imageViewer.backIcon}
        size={theme.text.s3}
        role={'button'}
        onPress={() => navigation?.goBack()}
      />
      <ImageZoom
        cropWidth={wdp(200)}
        cropHeight={hdp(110)}
        imageWidth={wdp(100)}
        imageHeight={wdp(80)}>
        <Image source={{uri: !!image.uri ?  image?.uri : 'https://i.postimg.cc/1zgCL9YJ/image-coming-soon.png'}} style={styles.image} />
      </ImageZoom>
    </View>
  );
};
export default ImageViewer;
