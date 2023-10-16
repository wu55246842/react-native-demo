import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import OrganizerCard from '../../../../components/cards/OrganizerCard';
import Space from '../../../../components/common/Space';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';
import { OrganizingTeamMember } from '../../../../global';
import { OrganizingTeam } from '../../../../mock/organizingTeam';

export default function Page() {
  const router = useRouter();
  const OrganizingIndividuals = OrganizingTeam.data.filter((item) => item.type === 'individual');
  return (
    <MainContainer preset="scroll">

        <View style={styles.listContainer}>
          <StyledText font="bold" size="xl" variant="primary">
            Star Cleaner
          </StyledText>

          <Space size={20} />

          <FlashList
            data={OrganizingIndividuals}
            numColumns={3}
            renderItem={({ item }) => (
              <OrganizerCard
                name={item.name}
                photo={item.photo}
                tagline={item.tagline}
                handlePress={() => router.push({ pathname: `/${item.name}`, params: { name: item.name } })}
              />
            )}
            keyExtractor={(item: OrganizingTeamMember, index: number) => index.toString()}
            estimatedItemSize={50}
          />
        </View>

      <Space size={16} />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 0,
  },
  content: {
    padding: 16,
  },
  listContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
  },
});
