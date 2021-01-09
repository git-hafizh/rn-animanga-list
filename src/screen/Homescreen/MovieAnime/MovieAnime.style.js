import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerSection: {
    marginTop: 20
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  more: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 0,
    color: "#636e72",
    fontWeight: 600
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  image_prop: {
    borderRadius: 10,
  },
  image_propShadow: {
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  title: {
    width: 140,
    height: 30,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 600,
    marginTop: 5
  },
  subType: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 0
  },
  info: {
    flex: 1,
    marginTop: 5,
    width: 140,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoScore: {
    backgroundColor: '#70BBA3',
    borderRadius: 5,
    color: "white",
    padding: 2,
    fontSize: 14,
    fontWeight: 600
  }
})

export { Styles };