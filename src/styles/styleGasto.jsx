import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 2,
  },
  
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
    textAlign: 'left',
    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },

});

export default styles;
