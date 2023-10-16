import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CallForSpeakersCard from '../../../components/cards/CallForSpeakersCard';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderRight from '../../../components/headers/HeaderRight';
import SessionsList from '../../../components/lists/SessionsList';
import VideoPlayer from '../../../components/player/VideoPlayer';
import { useAuth } from '../../../context/auth';

const Main = () => {
  const { user } = useAuth();

  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight />,
        }}
      />

      <Space size={16} />

      {!user && (
        <View style={styles.main}>
          <StyledText font="semiBold" size="md">
            Welcome to our online booking system
          </StyledText>

          <Space size={16} />

          <Image source={require('../../../assets/images/banner.png')} style={styles.image} contentFit="contain" />

          <Space size={16} />

          <CallForSpeakersCard />

          <Space size={20} />

          <SessionsList title='Hot Facilities'></SessionsList>

          <Space size={20} />

          <SessionsList title='Star Cleaner'></SessionsList>

          {/* <SponsorsCard />

          <Space size={20} />

          <OrganizersCard />

          <Space size={16} /> */}

        </View>
      )}

      {user && (
        <View style={styles.main}>
          <Space size={10} />

          <VideoPlayer />

          <Space size={30} />

          <SessionsList title='Hot Facilities'></SessionsList>

          <Space size={20} />

          <SessionsList title='Star Cleaner'></SessionsList>

          {/* <Space size={30} />

          <SpeakersList />

          <Space size={6} />

          <SponsorsCard />

          <Space size={16} />

          <OrganizersCard />

          <Space size={16} /> */}
        </View>
      )}
    </MainContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
  },
  section: {
    flex: 1,
  },
  image: {
    height: 175,
    width: '100%',
  },
});
