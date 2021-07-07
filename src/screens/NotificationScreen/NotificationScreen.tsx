import React, { useCallback } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import useNotificationScreenLogic from './NotificationScreen.logic';
import { FETCH_STATUS } from './NotificationScreen.store';
import NotFound from 'components/Base/List/NotFound';
import { observer } from 'mobx-react';
import Colors from 'theme/colors';
import { keyExtractor } from 'constants/default-values';
import NotificationItem from './components/NotificationItem';
import NotificationScreenActionBar from './components/NotificationScreenActionBar';

type PropTypes = {};

const NotificationScreen: React.FC<PropTypes> = () => {
  const { list, refresh, fetchNext, fetchStatus } =
    useNotificationScreenLogic();

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

  return (
    <View style={CommonStyles.container}>
      <NotificationScreenActionBar />
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
});

export default observer(NotificationScreen);
