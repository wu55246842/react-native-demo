import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typography } from '../../config/typography';
import FilterButton from '../buttons/FilterButton';
import PrimaryButton from '../buttons/PrimaryButton';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

const { height } = Dimensions.get('window');
const bottomTabHeight = 80;
const modalHeight = height - bottomTabHeight;

type LevelFilter = 'Building001' | 'Building002' | 'Building003';
type TopicFilter = 'Class Room' |'Meeting Room' | 'Lab' | 'Function Room';
type RoomFilter = 'Huge' | 'Normal' | 'Small ';
type SessionTypeFilter = 'Morning' | 'Afternoon' | 'Night' | 'Weekend' | 'Holiday';

type Filters = {
  level: Array<LevelFilter>;
  topic: Array<TopicFilter>;
  room: Array<RoomFilter>;
  sessionType: Array<SessionTypeFilter>;
};

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  onFilter: (filters: Filters) => void;
};

const FilterModal = ({ visible, onClose, onFilter }: FilterModalProps) => {
  const { colors } = useTheme();
  const { primary } = typography;

  const [selectedLevel, setSelectedLevel] = useState<Filters['level']>([]);
  const [selectedTopic, setSelectedTopic] = useState<Filters['topic']>([]);
  const [selectedRoom, setSelectedRoom] = useState<Filters['room']>([]);
  const [selectedSessionType, setSelectedSessionType] = useState<Filters['sessionType']>([]);

  const handleFilter = () => {
    const filter = {
      level: selectedLevel,
      topic: selectedTopic,
      room: selectedRoom,
      sessionType: selectedSessionType,
    };

    onFilter(filter);
    onClose();
  };

  const addFilter = <TFilter extends string>(filter: TFilter, filterArray: Array<TFilter>) => {
    const newFilterArray = [...filterArray];
    // check if filter is already in filter array
    const index = newFilterArray.indexOf(filter);
    if (index === -1) {
      // if not in array, add to array
      newFilterArray.push(filter);
    } else {
      // if in array, remove from array
      newFilterArray.splice(index, 1);
    }
    return newFilterArray;
  };

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: colors.bg }]}>
            <Row style={styles.header}>
              <Row>
                <AntDesign name="filter" size={24} color={colors.primary} />
                <Space size={8} horizontal />
                <StyledText size="lg" style={{ color: colors.primary }}>
                  Filter
                </StyledText>
              </Row>
              <TouchableOpacity onPress={onClose}>
                <StyledText
                  style={{
                    color: colors.textLight,
                    fontFamily: primary.light,
                  }}
                >
                  CANCEL
                </StyledText>
              </TouchableOpacity>
            </Row>

            <Space size={12} />

            <View style={styles.modalContent}>
            <StyledText size="lg" font="bold">
                Facility Type
              </StyledText>

              <Space size={8} />

              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Class Room"
                  onPress={() => setSelectedTopic(addFilter('Class Room', selectedTopic))}
                  selected={selectedTopic.includes('Class Room')}
                  style={styles.left}
                />
                <FilterButton
                  label="Meeting Room"
                  onPress={() => setSelectedTopic(addFilter('Meeting Room', selectedTopic))}
                  selected={selectedTopic.includes('Meeting Room')}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Lab"
                  onPress={() => setSelectedTopic(addFilter('Lab', selectedTopic))}
                  selected={selectedTopic.includes('Lab')}
                  style={styles.right}
                />
                <FilterButton
                  label="Function Room"
                  onPress={() => setSelectedTopic(addFilter('Function Room', selectedTopic))}
                  selected={selectedTopic.includes('Function Room')}
                  style={styles.right}
                />
              </View>



              <StyledText size="lg" font="bold">
                Location
              </StyledText>

              <Space size={8} />

              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Building001"
                  onPress={() => setSelectedLevel(addFilter('Building001', selectedLevel))}
                  selected={selectedLevel.includes('Building001')}
                  style={styles.left}
                />
                <FilterButton
                  label="Building002"
                  onPress={() => setSelectedLevel(addFilter('Building002', selectedLevel))}
                  selected={selectedLevel.includes('Building002')}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Building003"
                  onPress={() => setSelectedLevel(addFilter('Building003', selectedLevel))}
                  selected={selectedLevel.includes('Building003')}
                  style={styles.right}
                />
              </View>

              <Space size={20} />

              

              <Space size={20} />

              <StyledText size="lg" font="bold">
                Rooms Size
              </StyledText>

              <Space size={8} />

              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Huge"
                  onPress={() => setSelectedRoom(addFilter('Huge', selectedRoom))}
                  selected={selectedRoom.includes('Huge')}
                  style={styles.left}
                />
                <FilterButton
                  label="Normal"
                  onPress={() => setSelectedRoom(addFilter('Normal', selectedRoom))}
                  selected={selectedRoom.includes('Normal')}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Small "
                  onPress={() => setSelectedRoom(addFilter('Small ', selectedRoom))}
                  selected={selectedRoom.includes('Small ')}
                  style={styles.right}
                />
              </View>

              <Space size={20} />

              <StyledText size="lg" font="bold">
                Session Type
              </StyledText>

              <Space size={8} />

              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Morning"
                  onPress={() => setSelectedSessionType(addFilter('Morning', selectedSessionType))}
                  selected={selectedSessionType.includes('Morning')}
                  style={styles.left}
                />
                <FilterButton
                  label="Afternoon"
                  onPress={() => setSelectedSessionType(addFilter('Afternoon', selectedSessionType))}
                  selected={selectedSessionType.includes('Afternoon')}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Night"
                  onPress={() => setSelectedSessionType(addFilter('Night', selectedSessionType))}
                  selected={selectedSessionType.includes('Night')}
                  style={styles.right}
                />
              </View>
              <Space size={12} />
              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Weekend"
                  onPress={() => setSelectedSessionType(addFilter('Weekend', selectedSessionType))}
                  selected={selectedSessionType.includes('Weekend')}
                  style={styles.left}
                />
                <FilterButton
                  label="Holiday"
                  onPress={() => setSelectedSessionType(addFilter('Holiday', selectedSessionType))}
                  selected={selectedSessionType.includes('Holiday')}
                  style={[styles.withborder, { borderColor: colors.text }]}
                />
              </View>

              <Space size={20} />

              <PrimaryButton label="Filter" onPress={handleFilter} />
            </View>
            <Space size={20} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  modalView: {
    width: '100%',
    height: modalHeight,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    width: '100%',
  },
  rowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    height: 45,
  },
  left: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  right: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  withborder: {
    borderLeftWidth: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default FilterModal;
