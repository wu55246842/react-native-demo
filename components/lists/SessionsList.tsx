import { useTheme } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { Session } from '../../global';
import { Sessions } from '../../mock/sessions';
import ViewAllButton from '../buttons/ViewAllButton';
import SessionCard from '../cards/SessionCard';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

type SessionsListProps = {
  title: string;
};

const SessionsList: React.FC<SessionsListProps> = ({ title }) => {
  const { colors } = useTheme();
  const router = useRouter();
  const sessions = Sessions.data.slice(0, 5); 
  const sessionCount = (Sessions.data.length - 5).toString();

  return (
    <View style={styles.list}>
      <Row>
        <StyledText font="bold" size="lg" style={{ color: colors.primary }}>
          {title}
        </StyledText>
        <ViewAllButton onPress={() => router.push('/home/sessions')} label={`+${sessionCount}`} />
      </Row>

      <Space size={16} />

      <View style={styles.listContainer}>
        <FlashList
          data={sessions}
          renderItem={({ item }) => (
            <SessionCard
              handlePress={() => router.replace({ pathname: `/session/${item.slug}`, params: { slug: item.slug } })}
              item={item}
              screen="home"
            />
          )}
          keyExtractor={(item: Session, index: number) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={25}
        />
      </View>
    </View>
  );
};

export default SessionsList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});
