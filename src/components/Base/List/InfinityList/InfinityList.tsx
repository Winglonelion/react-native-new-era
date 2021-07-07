import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  RefreshControl,
} from 'react-native';
import config from './config';
import NotFound from '../NotFound';
import CommonStyles from 'theme/CommonStyles';

const { FETCH_STATUS, PAGE_LIMIT } = config;

type PaginationType = {
  current_page: number;
  total: number;
};

interface PropTypes extends FlatListProps<never> {
  onEndReachedThreshold?: number;
  fetchData: (
    page: number,
    limit: number,
  ) => {
    data: any[];
    pagination: PaginationType;
  };
  emptyMessage?: string;
  handleData: (data: any[]) => any[];
}

class InfinityList extends React.Component<PropTypes> {
  state = {
    fetchStatus: FETCH_STATUS.IDLE,
    data: [] as any[],
    pagination: { current_page: 1, total: 0 },
  };

  fetchedData = [] as any[];
  mounted = false;

  componentDidMount() {
    this.mounted = true;
    this.fetchNew();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  fetchNew = async () => {
    const { fetchData, handleData } = this.props;
    const { fetchStatus } = this.state;
    if (fetchStatus !== FETCH_STATUS.IDLE) {
      return;
    }
    this.setState({
      data: [],
      pagination: {},
      fetchStatus: FETCH_STATUS.REFRESH,
    });
    const { data, pagination } = await fetchData(1, PAGE_LIMIT);
    if (this.mounted) {
      this.fetchedData = data;
      this.setState({
        data: handleData(this.fetchedData),
        pagination,
        fetchStatus: FETCH_STATUS.IDLE,
      });
    }
  };

  fetchNext = async () => {
    const { fetchStatus, pagination: currentPagination } = this.state;
    if (fetchStatus !== FETCH_STATUS.IDLE) {
      return;
    }
    if (
      currentPagination?.current_page >=
      currentPagination?.total / PAGE_LIMIT
    ) {
      return;
    }
    const { fetchData, handleData } = this.props;
    this.setState({ fetchStatus: FETCH_STATUS.LOAD_MORE });
    const { data: incomeData, pagination } = await fetchData(
      currentPagination.current_page + 1 || 1,
      PAGE_LIMIT,
    );

    if (this.mounted) {
      this.fetchedData = [...this.fetchedData, ...incomeData];
      this.setState({
        data: handleData(this.fetchedData),
        pagination,
        fetchStatus: FETCH_STATUS.IDLE,
      });
    }
  };

  onRefresh = () => {
    this.fetchNew();
  };

  onEndReached = () => {
    this.fetchNext();
  };

  // keyExtractor = item => `${item.id}`;

  renderListEmpty = () => {
    const { emptyMessage, ListEmptyComponent } = this.props;
    const { fetchStatus } = this.state;
    if (fetchStatus === FETCH_STATUS.IDLE) {
      if (ListEmptyComponent) {
        return ListEmptyComponent;
      }
      return <NotFound title={emptyMessage} />;
    }
    return null;
  };

  renderFooter = () => {
    const { fetchStatus } = this.state;
    if (fetchStatus === FETCH_STATUS.LOAD_MORE) {
      return <ActivityIndicator style={CommonStyles.activityIndicator} />;
    }
    return null;
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fetchData, handleData, ...rest } = this.props;
    const { data, fetchStatus } = this.state;
    return (
      <FlatList
        {...rest}
        data={data as never[]}
        refreshControl={
          <RefreshControl
            onRefresh={this.onRefresh}
            refreshing={fetchStatus === FETCH_STATUS.REFRESH}
          />
        }
        onEndReached={this.onEndReached}
        ListEmptyComponent={this.renderListEmpty()}
        ListFooterComponent={this.renderFooter()}
      />
    );
  }

  static defaultProps = {
    onEndReachedThreshold: 0.2,
    emptyMessage: '',
    handleData: (data: any[]) => data,
    ListEmptyComponent: undefined,
  };
}

export default InfinityList;
