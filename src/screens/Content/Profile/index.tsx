import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {ProfileProps} from '../../../resources/interfaces/screens/profile';
import MainLayout from '../../MainLayout';
import {user} from '../../../resources/staticData/user';
import GenericText from '../../../components/GenericText';
import {tr} from '../../../resources/translations';
import {useTheme} from '@react-navigation/native';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const mandatoryFields = ['fullName', 'mobile', 'email', 'address'];
const Profile = ({navigation}: ProfileProps) => {
  const theme = useTheme();
  const [form, updateForm] = useState({
    fullName: user && user.fullName,
    mobile: user && user.mobile,
    email: user && user.email,
    address: user && user.address,
  });
  const [formComplete, setFormComplete] = useState(false);
  const [editable, setEditable] = useState(false);
  const handleChange = (key, value) => {
    updateForm({
      ...form,
      [key]: value,
    });
  };
  useEffect(() => {
    let _formComplete = true;
    for (let index = 0; index < mandatoryFields.length; index++) {
      const field = mandatoryFields[index];
      if (!form[field] || form[field].length <= 0) {
        setFormComplete(false);
        _formComplete = false;
        break;
      }
    }
    if (_formComplete) {
      setFormComplete(true);
    }
  }, [form]);
  const submit = async () => {
    setEditable(false);
  };
  return (
    <MainLayout tabHeader showLogo={false} showProfilePic={true}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <GenericText
            style={[
              styles.title,
              {fontSize: theme.text.s6, color: theme.profile.title},
            ]}>
            {tr('profile.title')} James
          </GenericText>
          <GenericText
            style={[
              styles.subTitle,
              {fontSize: theme.text.s10, color: theme.profile.subTitle},
            ]}>
            {tr('profile.subTitle')}
          </GenericText>
        </View>
        <GenericText
          style={[
            styles.category,
            {color: theme.profile.category, fontSize: theme.text.s6},
          ]}>
          {tr('profile.personalDetails')}
        </GenericText>
        <View
          style={[
            styles.detailsContainer,
            {borderColor: theme.profile.containerBorder},
          ]}>
          <View style={styles.rowContainer}>
            <GenericText
              style={[
                styles.label,
                {
                  fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                  color: theme.profile.label,
                },
              ]}>
              {tr('profile.fullName')}
            </GenericText>
            <TextInput
              editable={editable}
              placeholder={tr('profile.fullNamePlaceHolder')}
              value={form.fullName}
              onChangeText={text => handleChange('username', text)}
              style={{
                color: theme.profile.text,
                fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                paddingBottom: 0,
                marginLeft: '5%',
                borderBottomWidth: editable ? 1 : 0,
                borderColor: theme.profile.textInputBorder,
              }}
            />
          </View>
          <View style={styles.rowContainer}>
            <GenericText
              style={[
                styles.label,
                {
                  fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                  color: theme.profile.label,
                },
              ]}>
              {tr('profile.address')}
            </GenericText>
            <TextInput
              multiline
              editable={editable}
              placeholder={tr('profile.addressPlaceHolder')}
              value={form.address}
              onChangeText={text => handleChange('address', text)}
              style={{
                color: theme.profile.text,
                fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                paddingBottom: 0,
                marginLeft: '5%',
                borderBottomWidth: editable ? 1 : 0,
                borderColor: theme.profile.textInputBorder,
              }}
            />
          </View>
          <View style={styles.rowContainer}>
            <GenericText
              style={[
                styles.label,
                {
                  fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                  color: theme.profile.label,
                },
              ]}>
              {tr('profile.mobile')}
            </GenericText>
            <TextInput
              editable={editable}
              placeholder={tr('profile.mobilePlaceHolder')}
              value={form.mobile}
              onChangeText={text => handleChange('mobile', text)}
              style={{
                color: theme.profile.text,
                fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                paddingBottom: 0,
                marginLeft: '5%',
                borderBottomWidth: editable ? 1 : 0,
                borderColor: theme.profile.textInputBorder,
              }}
            />
          </View>
          <View style={styles.rowContainer}>
            <GenericText
              style={[
                styles.label,
                {
                  fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                  color: theme.profile.label,
                },
              ]}>
              {tr('profile.email')}
            </GenericText>
            <TextInput
              editable={editable}
              placeholder={tr('profile.emailPlaceHolder')}
              placeholderTextColor={theme.profile.label}
              value={form.email}
              onChangeText={text => handleChange('email', text)}
              style={{
                color: theme.profile.text,
                fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                paddingBottom: 0,
                marginLeft: '5%',
                borderBottomWidth: editable ? 1 : 0,
                borderColor: theme.profile.textInputBorder,
              }}
            />
          </View>
        </View>
        <Button
          title={editable ? tr('profile.save') : tr('profile.editAccount')}
          backgroundColor={theme.profile.editAccountBackground}
          onPress={() =>
            !editable ? setEditable(true) : formComplete && submit()
          }
          disabled={editable && !formComplete}
          containerStyle={{marginTop: '5%'}}
        />
        <GenericText
          style={[
            styles.category,
            {color: theme.profile.category, fontSize: theme.text.s6},
          ]}>
          {tr('profile.support')}
        </GenericText>
        <View
          style={[
            styles.detailsContainer,
            {borderColor: theme.profile.containerBorder, paddingTop: '3%'},
          ]}>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Icon
              name={'infocirlce'}
              type={'AntDesign'}
              size={theme.text.s7}
              color={theme.profile.icon}
            />
            <GenericText
              style={[
                styles.text,
                {
                  color: theme.profile.text,
                  fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                },
              ]}>
              {tr('profile.conditions')}
            </GenericText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => navigation?.navigate('privacyPolicy')}>
            <Icon
              name={'lock-outline'}
              type={'MaterialCommunityIcons'}
              size={theme.text.s6}
              color={theme.profile.icon}
              style={{marginLeft: -3}}
            />
            <GenericText
              style={[
                styles.text,
                {
                  color: theme.profile.text,
                  fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                },
              ]}>
              {tr('profile.policy')}
            </GenericText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Icon
              name={'phone-alt'}
              type={'FontAwesome5'}
              size={theme.text.s7}
              color={theme.profile.icon}
            />
            <GenericText
              style={[
                styles.text,
                {
                  color: theme.profile.text,
                  fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
                },
              ]}>
              {tr('profile.contact')}
            </GenericText>
          </TouchableOpacity>
        </View>
        <Button
          title={tr('profile.logOut')}
          backgroundColor={theme.profile.logOutBackground}
          onPress={() => {}}
          containerStyle={{
            position: 'absolute',
            bottom: getByScreenSize(hdp(3), hdp(3)),
          }}
        />
      </View>
    </MainLayout>
  );
};
export default Profile;
