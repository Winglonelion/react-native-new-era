import React, { useCallback } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import useNotificationScreenLogic from './NotificationScreen.logic';
import { FETCH_STATUS, SELECT_MODE } from './NotificationScreen.store';
import NotFound from 'components/Base/List/NotFound';
import { observer } from 'mobx-react';
import Colors from 'theme/colors';
import { keyExtractor } from 'constants/default-values';
import NotificationItem from './components/NotificationItem';
import CheckBox from 'components/Base/CheckBox/CheckBox';
import ContentText from 'components/Base/Text/ContentText/ContentText';

type PropTypes = {};

const NotificationScreen: React.FC<PropTypes> = () => {
  const {
    list,
    refresh,
    fetchNext,
    toggleSelectMode,
    selectMode,
    fetchStatus,
  } = useNotificationScreenLogic();

  const renderListEmpty = useCallback(() => {
    if (fetchStatus === FETCH_STATUS.IDLE) {
      return <NotFound title={'There are no messages here'} />;
    }
    return null;
  }, [fetchStatus]);

  const renderLoading = () => {
    if (
      fetchStatus === FETCH_STATUS.FETCH_NEW ||
      fetchStatus === FETCH_STATUS.FETCH_NEXT
    ) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.brown} />
        </View>
      );
    }
    return null;
  };

  const renderItem = useCallback(({ item }) => {
    return <NotificationItem item={item} />;
  }, []);

  console.log('render LIst');

  return (
    <View style={CommonStyles.container}>
      <View style={styles.actionBar}>
        <TouchableWithoutFeedback onPress={toggleSelectMode}>
          <View style={styles.selectModeBox}>
            <View style={styles.checkBoxView}>
              <CheckBox
                checked={selectMode !== SELECT_MODE.IDLE}
                checkedIconName={
                  selectMode === SELECT_MODE.SELECT ? 'minus' : 'check'
                }
              />
            </View>
            <ContentText size={14} weight="600">
              {'Select All'}
            </ContentText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={CommonStyles.flex1}>
        <FlatList
          refreshing={fetchStatus === FETCH_STATUS.REFRESH}
          data={list as never[]}
          refreshControl={
            <RefreshControl
              onRefresh={refresh}
              tintColor={Colors.brown}
              refreshing={fetchStatus === FETCH_STATUS.REFRESH}
            />
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReached={fetchNext}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={renderListEmpty()}
          ListFooterComponent={renderLoading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    width: '100%',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingRight: 25,
  },
  checkBoxView: {
    paddingHorizontal: 16,
  },
  selectModeBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default observer(NotificationScreen);
