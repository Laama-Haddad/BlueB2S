import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import {ProfileProps} from '../../../resources/interfaces/screens/profile';
import MainLayout from '../../MainLayout';
import GenericText from '../../../components/GenericText';
import Button from '../../../components/Button';
import {tr} from '../../../resources/translations';
import {useTheme} from '@react-navigation/native';
import Icon from '../../../components/Icon';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/store';
import {setAuthStatus} from '../../Auth/SignIn/action';
import AccordionItemList from '../../../components/AccordionList';
import {showGlobalModal} from '../../../connected-components/Modal/actions';
import {ToggleAuth} from '../../../utils/authFuncs';
import {AccordionItem} from '../../../resources/interfaces/components/accordionItemListProps';
import {wdp} from '../../../utils/responsive';

const Profile = ({navigation, auth, user}: ProfileProps) => {
  const theme = useTheme();
  const {logged} = auth;
  const {personalInfo} = user;
  const accountData: AccordionItem[] = [
    {
      id: 0,
      title: tr('profile.account'),
      body: [
        {
          iconName: 'tago',
          iconType: 'AntDesign',
          itemLabel: tr('profile.orders'),
          onPress: () => navigation?.navigate('orders'),
        },
        {
          iconName: 'location-pin',
          iconType: 'Entypo',
          itemLabel: tr('profile.address'),
          onPress: () => {},
        },
        {
          iconName: 'sign-out',
          iconType: 'FontAwesome',
          itemLabel: tr('profile.signOut'),
          onPress: () => {
            showGlobalModal({
              message: tr('profile.confirmSignOutMessage'),
              type: 'question',
              onConfirm: () => {
                ToggleAuth({logged: false}).then();
                navigation?.navigate('home'); // go to splash screen
              },
            });
          },
        },
      ],
    },
  ];
  const data: AccordionItem[] = [
    {
      id: 0,
      title: tr('profile.about'),
      body: [
        {
          iconName: 'info-with-circle',
          iconType: 'Entypo',
          itemLabel: tr('profile.about'),
          onPress: () => {},
        },
        {
          iconName: 'handshake-outline',
          iconType: 'MaterialCommunityIcons',
          itemLabel: tr('profile.work'),
          onPress: () => {},
        },
        {
          iconName: 'location',
          iconType: 'Entypo',
          itemLabel: tr('profile.locations'),
          onPress: () => {},
        },
      ],
    },
    {
      id: 1,
      title: tr('profile.terms'),
      body: [
        {
          iconName: 'information-circle-outline',
          iconType: 'Ionicons',
          itemLabel: tr('profile.conditions'),
          onPress: () => {},
        },
        {
          iconName: 'policy',
          iconType: 'MaterialIcons',
          itemLabel: tr('profile.policy'),
          onPress: () => navigation?.navigate('privacyPolicy'),
        },
      ],
    },
    {
      id: 2,
      title: tr('profile.contact'),
      body: [
        {
          iconName: 'contact-support',
          iconType: 'MaterialIcons',
          itemLabel: tr('profile.contact'),
          onPress: () => {},
        },
        {
          iconName: 'burst-sale',
          iconType: 'Foundation',
          itemLabel: tr('profile.business'),
          onPress: () => {},
        },
      ],
    },
  ];

  return (
    <MainLayout
      tabHeader
      showLogo={false}
      showProfilePic
      title={tr('profile.headerTitle')}>
      <View style={styles.container}>
        {logged ? (
          <>
            <View style={styles.titleContainer}>
              <GenericText
                style={[
                  styles.title,
                  {fontSize: theme.text.s9, color: theme.profile.title},
                ]}>
                {tr('profile.title')} {personalInfo?.firstName}
              </GenericText>
              <Icon
                name={'edit'}
                type={'MaterialIcons'}
                size={theme.text.s7}
                color={theme.profile.icon}
                role={'button'}
                onPress={() => navigation?.navigate('updateProfile')}
              />
            </View>
            <AccordionItemList data={accountData} type={'list'} />
          </>
        ) : (
          <Button
            title={tr('profile.signIn')}
            backgroundColor={theme.profile.backgroundSignIn}
            onPress={() => navigation?.navigate('signIn')}
            containerStyle={{marginVertical: '10%', width: wdp(40)}}
          />
        )}
        <AccordionItemList data={data} type={'list'} />
      </View>
    </MainLayout>
  );
};
const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps, {setAuthStatus})(Profile);
