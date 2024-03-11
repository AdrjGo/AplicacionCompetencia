import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    width: '80%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  picker: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default styles;
