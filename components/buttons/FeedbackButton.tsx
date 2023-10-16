import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Arrow from '../../assets/artworks/Arrow';
import StyledText from '../common/StyledText';

type Props = {
  onPress: () => void;
  testID?: string;
};

const FeedbackButton = ({ onPress, testID }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID={testID}>
      {/* <Feather name="smile" size={16} color="black" /> */}
      <View style={styles.spacer} />
      <StyledText>Your Schedule</StyledText>
      <View style={styles.spacer} />
      <Arrow />
    </TouchableOpacity>
  );
};

export default FeedbackButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00e2c350',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    height: 36,
    borderRadius: 8,
  },
  spacer: {
    width: 8,
  },
});
