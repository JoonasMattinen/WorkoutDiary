import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7F0AD',
    justifyContent: 'center',
  },
  pressable: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  pressableText: {
    color: '#ffffff',
    fontSize: 18,
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  customFont: {
    fontFamily: 'kodemono',
    fontSize: 20,
  },
  customFontSmall: {
    fontFamily: 'kodemono',
    fontSize: 15,
  },
  segmentedButtons: {
    margin: 19,
    borderRadius: 20,
  },
  addWorkoutButton: {
    margin: 10,
  },
  cardContainer: {
    margin: 10,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#B7F0AD',
  },
  card: {
    padding: 15,
    gap: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 16,
    color: '#666',
  },
  chip: {
    margin: 5,
  },
  radiobutton: {
    backgroundColor: '#E8D33F',
    borderRadius: 10,
    margin: 10,
  },
  calendar: {
    marginTop: 50,
  },
});

export default styles;