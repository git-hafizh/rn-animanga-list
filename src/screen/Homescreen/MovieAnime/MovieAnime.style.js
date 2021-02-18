import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerSection: {
    marginTop: 30
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
    fontWeight: "600"
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 60,
  },
  image_prop: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#e9e9eb"
  },
  title: {
    width: 140,
    height: 30,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10
  },
  subType: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 0
  },
  info: {
    flex: 1,
    marginTop: 10,
    width: 130,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoScore: {
    color: "#232822",
    fontSize: 12,
    fontWeight: "600"
  }
})

export { Styles };