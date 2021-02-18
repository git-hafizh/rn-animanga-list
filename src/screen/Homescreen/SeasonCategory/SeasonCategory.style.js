import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerSection: {
    flex: 1,
    marginTop: 20
  },
  season: {
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
  },
  seasonTitle: {
    marginTop: 10,
  },
  seasonText: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  seasonSpring: {
    paddingHorizontal: 40,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#00B36F",
    paddingVertical: 15,
    letterSpacing: 2
  },
  seasonSummer: {
    paddingHorizontal: 40,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#FA6F6E",
    paddingVertical: 15,
    letterSpacing: 2
  },
  seasonAutumn: {
    paddingHorizontal: 40,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#EE7821",
    paddingVertical: 15,
    letterSpacing: 2
  },
  seasonWinter: {
    paddingHorizontal: 40,
    marginRight: 15,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#0056A9",
    paddingVertical: 15,
    letterSpacing: 2
  },
  seasonSubText: {
    textTransform: "uppercase",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  bgImage: {
    resizeMode: "cover",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 20,
  },
  bgImageSize: {
    height: 50,
    width: 100
  }
})

export { Styles };