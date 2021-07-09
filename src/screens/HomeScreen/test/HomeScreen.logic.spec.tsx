import paidMock from 'mock/networking/paid.mock';
import useHomeScreenLogic from '../HomeScreen.logic';
import { renderHook } from '@testing-library/react-hooks';
import homeScreenStore from '../HomeScreen.store';

jest.mock('routes/actions', () => ({
  __esModule: true,
  navigateTo: jest.fn(),
}));

paidMock();

describe('HomeScreen check snapshot', function () {
  beforeEach(() => {});
  test('should match snapshot', function () {
    const fn1 = jest.spyOn(homeScreenStore, 'fetchPaidOverview');
    const fn2 = jest.spyOn(homeScreenStore, 'fetchPaidHistoryOverview');

    const { result } = renderHook(() => useHomeScreenLogic());
    expect(result.current.reloadHomeData).toBeInstanceOf(Function);
    result.current.reloadHomeData();
    expect(fn1).toBeCalled();
    expect(fn2).toBeCalled();
  });
});
