import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7F0AD',
    alignItems: 'center',
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
  segmentedButtons: {
    margin: 19,
    borderRadius: 20,
  },
  addWorkoutButton: {
    margin: 10,
  },
  addWorkoutContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B7F0AD'
  },
  card:{
    flexDirection: 'row',   
    justifyContent: 'space-evenly',
  },
  radiobutton: {
    backgroundColor: '#E8D33F',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  calendar: {
    marginTop: 50,
  },
});

export default styles;