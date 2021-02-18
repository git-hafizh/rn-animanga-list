import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerSection: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  bgTodayAnime: {
    width: "90%",
    backgroundColor: "#f5f6f6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  image_prop: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#e9e9eb",
    height: 280,
    width: 180
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
    width: 200,
    color: "black"
  },
  subType: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    textTransform: "uppercase",
    backgroundColor: "#ED2E45",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    letterSpacing: 1
  },
  info: {
    flex: 1,
    marginTop: 10,
    width: 130,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})

export { Styles };