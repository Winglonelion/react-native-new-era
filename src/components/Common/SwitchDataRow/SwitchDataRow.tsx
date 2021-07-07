import React, { memo } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import ContentText from 'components/Base/Text/ContentText';
import Colors from 'theme/colors';

interface PropTypes {
  title: string;
  onChange?: (value: boolean) => void;
  isEnabled: boolean;
}

const SwitchDataRow: React.FC<PropTypes> = memo(
  ({ title, onChange, isEnabled = true }) => {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ContentText size={16} style={styles.text}>
            {title}
          </ContentText>
          {!!onChange && (
            <Switch
              trackColor={{ false: Colors.grey, true: Colors.orange }}
              thumbColor={isEnabled ? Colors.white : '#f4f3f4'}
              ios_backgroundColor={Colors.dark}
              onValueChange={onChange}
              value={isEnabled}
            />
          )}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  content: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  contentTxt: {
    color: Colors.lightBrown,
  },
  text: {
    lineHeight: 30,
  },
});

export default SwitchDataRow;
