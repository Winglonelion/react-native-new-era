import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { observer } from 'mobx-react';

import CommonStyles from 'theme/CommonStyles';
import Space from 'components/Base/Space/Space';
import Colors from 'theme/colors';
import DetailDataRow from 'components/Common/DetailDataRow';

import messages from './PersonalInfoScreen.messages';
import usePersonalInfoScreenLogic from './PersonalInfoScreen.logic';
import { formatDate } from 'utils/date';

type PropTypes = {};

const PersonalInfoScreen: React.FC<PropTypes> = () => {
  const { personalInfo } = usePersonalInfoScreenLogic();
  return (
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
            <View style={styles.line} />
            {/* birth day */}
            <DetailDataRow
              title={messages.menu_birthday}
              content={formatDate(personalInfo.birthday, 'dd/mm/yyyy')}
            />
            <View style={styles.line} />
            {/* age */}
            <DetailDataRow
              title={messages.menu_age}
              content={personalInfo.age}
            />
            <View style={styles.line} />
            {/* ethnicity */}
            <DetailDataRow
              title={messages.menu_ethnicity}
              content={personalInfo.ethnicity}
            />
            <View style={styles.line} />
          </View>
          <Space height={15} />

          <View style={styles.itemRow}>
            {/* nickname */}
            <DetailDataRow
              onPress={() => null}
              title={messages.menu_nickname}
              content={personalInfo.nickname}
            />
            <View style={styles.line} />
            {/* marital status */}
            <DetailDataRow
              title={messages.menu_marital_status}
              content={personalInfo.marital_status}
            />
            <View style={styles.line} />
            {/* married date */}
            <DetailDataRow
              title={messages.menu_date_married}
              content={formatDate(personalInfo.date_married, 'dd/mm/yyyy')}
            />
            <View style={styles.line} />
          </View>
        </ScrollView>
      </View>
    </View>
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
  line: {
    width: '100%',
    left: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyBrown,
  },
});

export default observer(PersonalInfoScreen);
