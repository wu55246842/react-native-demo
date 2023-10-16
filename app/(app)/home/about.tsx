import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import OrganizersCard from '../../../components/cards/OrganizersCard';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderRight from '../../../components/headers/HeaderRight';
import { WIDE_BLURHASH } from '../../../config/constants';
import { OrganizingTeam } from '../../../mock/organizingTeam';

const About = () => {
  const router = useRouter();

  const OrganizingIndividuals = OrganizingTeam.data.filter((item) => item.type === 'individual');

  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight />,
          animation: 'none',
        }}
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/about.png')}
          placeholder={WIDE_BLURHASH}
          contentFit="contain"
        />

        <View style={styles.content}>
          <StyledText font="bold" size="xl" variant="primary">
            About
          </StyledText>

          <Space size={16} />

          <StyledText font="regular" size="md">
            Driven by a passion for innovation and a desire to enhance the educational experience, we embarked on a mission to create a space where schools could easily manage their classrooms, meeting rooms, and labs. We wanted to empower educators, students, and staff to focus on what truly matters - education.
          </StyledText>

          <Space size={8} />

          <StyledText font="regular" size="md">
          Our platform offers a seamless experience for schools, allowing them to effortlessly schedule and reserve resources, from state-of-the-art laboratories for cutting-edge experiments to cozy meeting rooms for collaboration. We understand that a well-maintained and organized learning environment is crucial for success.
          </StyledText>

          <Space size={8} />

          <StyledText font="regular" size="md">
            It will have workshops and codelabs focused on the building of Android applications and will give
            participants an excellent chance to learn about the local Android development ecosystem, opportunities and
            services as well as meet the engineers and companies who work on them.
          </StyledText>

          <Space size={30} />

        </View>

      </View>

      <OrganizersCard />

      <Space size={16} />
    </MainContainer>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 225,
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
