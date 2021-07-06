import React, { useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { capitalize } from 'lodash';

import CommonStyles from 'theme/CommonStyles';
import Space from 'components/Base/Space/Space';
import Colors from 'theme/colors';
import DetailDataRow from 'components/Common/DetailDataRow';

import messages from './PersonalInfoScreen.messages';
import usePersonalInfoScreenLogic from './PersonalInfoScreen.logic';
import { formatDate } from 'utils/date';
import { navigateTo } from 'routes/actions';
import ROUTES from 'routes/names';
import SelectMaritalStatus from 'modals/SelectMaritalStatus';
import { MARITAL_STATUSES } from 'data/user/UserProfile.values';

type PropTypes = {};

const PersonalInfoScreen: React.FC<PropTypes> = () => {
  const {
    personalInfo,
    nickNameValidator,
    updateNickname,
    updateMaritalStatus,
    closeModalMartialStatus,
    isModalMartialStatusVisible,
    openModalMartialStatus,
  } = usePersonalInfoScreenLogic();
  const navigateToEditNickName = useCallback(() => {
    navigateTo(ROUTES.TEXT_DATA_UPDATE_SCREEN, {
      title: 'Nickname',
      onComplete: updateNickname,
      validator: nickNameValidator,
    });
  }, [nickNameValidator, updateNickname]);

  return (
    <>
      <View style={CommonStyles.container}>
        <View style={styles.bg}>
          <ScrollView>
            <Space height={15} />
            <View style={styles.itemRow}>
              {/* full name */}
              <DetailDataRow
                title={messages.menu_name}
                content={personalInfo.full_name}
              />
              <View style={CommonStyles.line} />
              {/* birth day */}
              <DetailDataRow
                title={messages.menu_birthday}
                content={formatDate(personalInfo.birthday, 'dd/mm/yyyy')}
              />
              <View style={CommonStyles.line} />
              {/* age */}
              <DetailDataRow
                title={messages.menu_age}
                content={personalInfo.age}
              />
              <View style={CommonStyles.line} />
              {/* ethnicity */}
              <DetailDataRow
                title={messages.menu_ethnicity}
                content={personalInfo.ethnicity}
              />
              <View style={CommonStyles.line} />
            </View>
            <Space height={15} />

            <View style={styles.itemRow}>
              {/* nickname */}
              <DetailDataRow
                onPress={navigateToEditNickName}
                title={messages.menu_nickname}
                content={personalInfo.nickname}
              />
              <View style={CommonStyles.line} />
              {/* marital status */}
              <DetailDataRow
                onPress={openModalMartialStatus}
                title={messages.menu_marital_status}
                content={capitalize(personalInfo.marital_status)}
              />
              <View style={CommonStyles.line} />
              {/* married date */}
              <DetailDataRow
                onPress={() => null}
                title={messages.menu_date_married}
                content={formatDate(personalInfo.date_married, 'dd/mm/yyyy')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      {/* modals marital status */}
      <SelectMaritalStatus
        options={MARITAL_STATUSES}
        current={personalInfo.marital_status}
        visible={isModalMartialStatusVisible}
        onClose={closeModalMartialStatus}
        onComplete={updateMaritalStatus}
      />
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: Colors.warnLight,
  },
  itemRow: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.greyBrown,
    borderBottomColor: Colors.greyBrown,
  },
});

export default observer(PersonalInfoScreen);
