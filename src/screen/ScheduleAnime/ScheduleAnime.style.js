import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerSection: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    justifyContent: "center",
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5
  },
  listWrap: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image_prop: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#e9e9eb",
    height: 130,
    width: 100
  },
  title: {
    width: 100,
    height: 30,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: "600",
    marginTop: 10
  },
  genreOne: {
    marginTop: 5,
    fontSize: 10,
    color: "#8e8e8f"
  },
  subType: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 0,
  },
  info: {
    flex: 1,
    marginTop: 10,
    width: 90,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoScore: {
    color: "black",
    fontSize: 12,
    fontWeight: "600"
  },
  tbc: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tbcText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#b2bec3"
  },
  loadingContainer: {
    justifyContent: "center", 
    alignItems: "center"
  }
})

export { Styles };