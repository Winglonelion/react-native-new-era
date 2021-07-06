import React, { memo } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Screen from 'utils/screen';
import CommonStyles from 'theme/CommonStyles';
import Colors from 'theme/colors';
import TitleText from 'components/Base/Text/TitleText/TitleText';
import Icon from 'react-native-vector-icons/Feather';
import { MaritalStatusTypes } from 'data/user/UserProfileStore';
import SelectMaritalItem from './components/SelectMaritalItem';
// import { PressEvent } from 'types/events';

interface PropTypes {
  visible: boolean;
  onComplete?: (text: MaritalStatusTypes) => void;
  onCancel?: Function;
  onClose?: () => void;
  current?: string;
  options: string[];
}

const SelectMaritalStatus: React.FC<PropTypes> = memo(
  ({ visible, onComplete, onClose, options, current }) => {
    return (
      <View pointerEvents="box-none" style={CommonStyles.absolute}>
        <Modal
          animated
          transparent
          onRequestClose={onClose}
          presentationStyle="overFullScreen"
          animationType="slide"
          visible={visible}>
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={CommonStyles.absolute}>
              <View style={styles.container}>
                <View style={styles.titleRow}>
                  <TitleText level="h3" color={Colors.orange}>
                    {'Marital status'}
                  </TitleText>
                  {/* list item */}
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {options.map(item => (
                    <SelectMaritalItem
                      selectItem={onComplete}
                      key={item}
                      text={item}
                      isSelected={current === item}
                    />
                  ))}
                </ScrollView>
                {/* close button  */}
                <TouchableWithoutFeedback onPress={onClose}>
                  <View style={styles.icon}>
                    <Icon name="x" size={30} color={Colors.lightBrown} />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    height: Screen.height * 0.5,
    top: Screen.height * 0.5,
    width: Screen.width,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 20,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    ...CommonStyles.shadow,
    shadowOffset: {
      height: -4,
      width: 0,
    },
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
  titleRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    right: 5,
  },
});

export default SelectMaritalStatus;
