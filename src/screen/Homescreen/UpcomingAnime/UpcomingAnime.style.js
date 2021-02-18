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
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  image_prop: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#e9e9eb",
  },
  title: {
    width: 140,
    height: 35,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  startDate: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 10,
    letterSpacing: 1
  },
  infoStartDate: {
    color: "#ED2E45",
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  }
})

export { Styles };