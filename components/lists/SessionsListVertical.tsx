import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, StyleSheet, View } from 'react-native';
import SessionListSeparator from '../../assets/artworks/ListSeparator';
import type { SessionForSchedule } from '../../global';
import SessionCard from '../cards/SessionCard';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

interface SessionListVerticalProps<T> {
  variant?: 'card' | 'list';
  bookmarked: boolean;
  handleBookMark?: (id: number) => void;
  sessions?: Array<T>;
}

/**
 * @param variant: 'card' | 'list'
 * @param bookmarked: boolean
 * @param handleBookMark: () => void
 * @param sessions: Array of type Sessions
 */
const SessionsListVertical = ({
  variant = 'card',
  bookmarked = false,
  sessions,
  handleBookMark,
}: SessionListVerticalProps<SessionForSchedule>) => {
  const { colors } = useTheme();
  const router = useRouter();
  const [selected01,setSelected01] = useState<boolean>(true)
  const [selected02,setSelected02] = useState<boolean>(false)
  const [selected03,setSelected03] = useState<boolean>(false)

  if (sessions === undefined) {
    return (
      <View style={styles.list} testID="sessions-list-vertical">
        <StyledText font="bold" size="lg" style={{ color: colors.primary }}>
          No data available.
        </StyledText>
      </View>
    );
  }

  const renderComponentItem = ({ item, index }: ListRenderItemInfo<SessionForSchedule>) => {
    return (
      <View key={item.id}>
        <SessionCard
          handlePress={() => router.replace({ pathname: `/session/${item.slug}`, params: { slug: item.slug } })}
          item={item}
          handleBookMark={() => {
            if (handleBookMark) {
              handleBookMark(item.id);
            }
          }}
          screen={'sessions'}
          variant={variant === 'card' ? 'card' : 'list'}
        />
        {index !== sessions.length - 1 ? (
          variant === 'card' ? (
            <Space size={20} />
          ) : (
            <View style={styles.cardContainer}>
              <SessionListSeparator color={index % 2 === 0 ? colors.tertiary : colors.tint} />
            </View>
          )
        ) : (
          <Space size={20} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.list} testID="sessions-list-vertical">
      <Row>
        <StyledText font="bold" size="lg" style={{ color: selected01 ? colors.primary : 'gray', marginRight: 10 }}
          onPress={()=>{
            setSelected01(true)
            setSelected02(false)
            setSelected03(false)}
            }>
          {bookmarked === true ? 'Class Room' : 'Class Room'}
        </StyledText>

        <StyledText font="bold" size="lg" style={{ color: selected02 ? colors.primary : 'gray', marginRight: 10 }}
          onPress={()=>{
            setSelected01(false)
            setSelected02(true)
            setSelected03(false)}
            }>
          {bookmarked === true ? 'Meeting Room' : 'Meeting Room'}
        </StyledText>

        <StyledText font="bold" size="lg" style={{ color: selected03 ? colors.primary : 'gray' }}
          onPress={()=>{
            setSelected01(false)
            setSelected02(false)
            setSelected03(true)}
            }>
          {bookmarked === true ? 'Lab' : 'Lab'}
        </StyledText>
      </Row>

      <Space size={16} />
      <FlatList
        data={sessions}
        renderItem={renderComponentItem}
        keyExtractor={(item: SessionForSchedule) => item.slug + item.id}
      />
    </View>
  );
};

export default SessionsListVertical;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 15,
  },
  listHolder: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardContainer: { marginLeft: 50, marginVertical: 6 },
});
