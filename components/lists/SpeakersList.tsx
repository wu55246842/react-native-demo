import { useTheme } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import type { Speaker } from '../../global';
import { Speakers } from '../../mock/speakers';
import ViewAllButton from '../buttons/ViewAllButton';
import OrganizerCard from '../cards/OrganizerCard';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

const { width } = Dimensions.get('window');

const SpeakersList = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const speakers = Speakers.data.slice(0, 15); // filter speakers to 15
  const speakersCount = (Speakers.data.length - 5).toString();

  return (
    <View style={styles.list}>
      <Row>
        <StyledText font="bold" size="lg" style={{ color: colors.primary }}>
          Speakers
        </StyledText>
        <ViewAllButton onPress={() => router.push('/speakers')} label={`+${speakersCount}`} />
      </Row>

      <Space size={16} />

      <View style={styles.listContainer}>
        <FlashList
          data={speakers}
          renderItem={({ item }) => (
            <OrganizerCard
              name={item.name}
              photo={item.avatar}
              handlePress={() => router.push({ pathname: `/${item.name}`, params: { name: item.name } })}
            />
          )}
          keyExtractor={(item: Speaker, index: number) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={25}
        />
      </View>
    </View>
  );
};

export default SpeakersList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    height: 200,
    width: width - 32,
  },
});
