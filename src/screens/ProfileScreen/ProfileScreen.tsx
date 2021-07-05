import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import Space from 'components/Base/Space/Space';
import ProfileMenuItem from './components/ProfileMenuItem/ProfileMenuItem';
import messages from './ProfileScreen.messages';
import Colors from 'theme/colors';
import { navigateTo } from 'routes/actions';
import ROUTES from 'routes/names';

type PropTypes = {};

const ProfileScreen: React.FC<PropTypes> = () => {
  const navigateToPersonInfoScreen = useCallback(() => {
    navigateTo(ROUTES.PERSONAL_INFO_SCREEN);
  }, []);
  return (
    <View style={CommonStyles.container}>
      <View style={styles.bg}>
        <Space height={15} />
        <View style={styles.itemRow}>
          {/* emp summary */}
          <ProfileMenuItem
            icon={require('images/employment_sum.png')}
            text={messages.menu_employment_summary}
          />
        </View>
        <Space height={15} />
        <View style={styles.itemRow}>
          {/* personal info */}
          <ProfileMenuItem
            icon={require('images/personal_info.png')}
            text={messages.menu_personal_info}
            onPress={navigateToPersonInfoScreen}
          />
          <View style={styles.line} />
          {/* contact info */}
          <ProfileMenuItem
            icon={require('images/contact_info.png')}
            text={messages.menu_contact_info}
          />
          <View style={styles.line} />
          <ProfileMenuItem
            icon={require('images/address.png')}
            text={messages.menu_address}
          />
        </View>
        <Space height={15} />
        <View style={styles.itemRow}>
          {/* emergency */}
          <ProfileMenuItem
            icon={require('images/emergency_contacts.png')}
            text={messages.menu_emergency_contact}
          />
        </View>

        <Space height={15} />
        <View style={styles.itemRow}>
          {/* deposit */}
          <ProfileMenuItem
            icon={require('images/direct_deposit.png')}
            text={messages.menu_direct_deposit}
          />
        </View>

        <Space height={15} />
        <View style={styles.itemRow}>
          {/* deposit */}
          <ProfileMenuItem
            icon={require('images/taxes.png')}
            text={messages.menu_taxes}
          />
        </View>
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
    paddingLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyBrown,
  },
});

export default ProfileScreen;
