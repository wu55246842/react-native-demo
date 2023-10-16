import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, View } from 'react-native';
import Space from '../../components/common/Space';
import StyledText from '../../components/common/StyledText';
import MainContainer from '../../components/container/MainContainer';
import FeedbackSentModal from '../../components/modals/FeedbackSentModal';
import { typography } from '../../config/typography';

export type TypeRatingStates = {
  icon: string;
  text: string;
  value: number;
};

type Reservation = {
  id: number;
  facilityName:string;
  facilityType:string;
  address:string;
  date: string;
  time: string;
};

const Feedback = () => {
  const { colors, dark } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState(2);
  const [description, setDescription] = useState('');
  const ratingStates: Array<TypeRatingStates> = [
    { icon: '😔', text: 'Bad', value: 0 },
    { icon: '😐', text: 'Okay', value: 1 },
    { icon: '😊', text: 'Great', value: 2 },
  ];

  const data: Reservation[] = [
    { id: 1, facilityName:'CR001',facilityType:'Class Room',address:'4th Floor Building 01 #04-09',date: '2023-10-20', time: '10:00 AM' },
    { id: 2, facilityName:'MR002',facilityType:'Meeting Room',address:'2th Floor Building 02 #02-01',date: '2023-10-22', time: '02:30 PM' },
    { id: 3, facilityName:'LB001',facilityType:'Lab',address:'4th Floor Building 03 #04-12',date: '2023-10-26', time: '02:30 PM' },
    { id: 4, facilityName:'MR005',facilityType:'Meeting Room',address:'2th Floor Building 08 #02-10',date: '2023-10-27', time: '02:30 PM' },
    { id: 5, facilityName:'FR008',facilityType:'Function Room',address:'8th Floor Building 09 #08-08',date: '2023-10-28', time: '02:30 PM' },
  ];
  const openModal = () => {
    setShowModal(true);
  };

  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewDetails = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setIsModalVisible(true);
  };

  const handleCancelReservation = (reservationId: number) => {
    // Implement cancellation logic here (e.g., API call)
    console.log(`Cancelled reservation with ID: ${reservationId}`);
  };

  const renderItem = ({ item }: { item: Reservation }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        <Text style={styles.itemTitle}>{item.facilityName} ({item.facilityType})</Text>{'\n'}
        {item.address}{'\n'}
        {item.date} at {item.time}
      </Text>
      <Ionicons onPress={() => handleViewDetails(item)} name={'ellipsis-horizontal-circle-outline'} size={30} color="blue" />
      <Ionicons onPress={() => handleCancelReservation(item.id)} name={'close-outline'} size={30} color="red" />
    </View>
  );

  return (
    <MainContainer preset="scroll">
      <View style={styles.main}>
        <ImageBackground
          source={dark ? require('../../assets/images/bannerDark.png') : require('../../assets/images/bannerLight.png')}
          style={styles.feedBackBanner}
          resizeMode="cover"
        />
        <Space size={10} />
        <View style={styles.feedBackFormContainer}>
          <StyledText
            size="lg"
            font="bold"
            variant="text"
            style={[styles.FeedBackFormTitle, { color: colors.primary }]}
          >
            Check your order list
          </StyledText>
          <Space size={29} />
          {/* <View style={[styles.feedBackForm, { backgroundColor: colors.background, borderColor: colors.border }]}>
            <StyledText style={styles.feedBackFormLabel} size="base">
              How is/was the event
            </StyledText>
            <View style={styles.feedBackFormRatingContainer}>
              {ratingStates.map((rating, index) => {
                return (
                  <FeedBackRatingButton
                    rating={rating}
                    key={index}
                    onPress={setSelectedRating}
                    onSelected={rating.value === selectedRating}
                  />
                );
              })}
            </View>
          </View>
          <Space size={30} />
          <TextInput
            style={[
              styles.feedbackInput,
              { backgroundColor: colors.bg, borderColor: colors.borderColor, color: colors.bgInverse },
            ]}
            placeholder="Type message here"
            placeholderTextColor={colors.placeHolder}
            value={description}
            onChangeText={setDescription}
          />
          <Space size={26} />
          <SubmitFeedbackButton openModal={openModal} text="SUBMIT FEEDBACK" /> */}


          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />

          <Modal visible={isModalVisible} animationType="slide">
            {selectedReservation && (
              <View>
                <Text>Reservation Details:</Text>
                <Text>Date: {selectedReservation.date}</Text>
                <Text>Time: {selectedReservation.time}</Text>
                <Button title="Close" onPress={() => setIsModalVisible(false)} />
              </View>
            )}
          </Modal>
        </View>

        <FeedbackSentModal showModal={showModal} />
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  feedBackBanner: {
    height: 179,
    flex: 1,
    width: '100%',
  },
  feedBackForm: {
    flex: 1,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
  },
  feedBackFormContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  feedBackFormLabel: {
    textAlign: 'center',
    paddingBottom: 30,
  },
  feedBackFormRatingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 27,
  },
  FeedBackFormTitle: {
    textAlign: 'center',
  },
  feedbackInput: {
    paddingLeft: 20,
    paddingTop: 12,
    minHeight: 115,
    textAlignVertical: 'top',
    borderRadius: 7,
    borderWidth: 1,
    fontFamily: typography.primary.light,
  },
  container: {
    flex: 1,
    backgroundColor: 'white', // 背景色为白色
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10, // 增加内边距
    backgroundColor: 'lightgray', // 预约项背景色
  },
  itemText: {
    color: 'white', // 文本颜色为白色
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 16,       
    fontWeight: 'bold', 
    color: 'blue',     
  },
});

export default Feedback;
