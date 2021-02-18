import { Dimensions, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerSection: {
    flex: 1,
    backgroundColor: "#f1f2f6"
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 10,
  },
  backArrow: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 0,
    color: "#636e72",
    fontWeight: "600",
    fontSize: 24
  },
  backArrowTransparent: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 0,
    opacity: 0,
    fontWeight: "600",
    fontSize: 24,
    transform: [
      {
        "rotateY": "180deg"
      }
    ],
  },
  rankAiring: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rankText: {
    fontWeight: "bold",
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 15,
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "white"
  },
  listWrap: {
    flexWrap: "wrap"
  },
  image_propShadow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
  },
  image_prop: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#95a5a6",
  },
  title: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: "600",
  },
  subType: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 0,
  },
  containerInfo: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 30
  },
  info: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',
  },
  infoStarRatings: {
    marginBottom: 5,
    flexDirection: "row",
  },
  infoScore: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "normal"
  },
  infoSubDetails: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 10
  },
  infoSubText: {
    fontWeight: "normal",
    marginLeft: 5
  },
  btnBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnSeeDetails:{
    backgroundColor: "#ED2E45",
    borderRadius: 5,
    paddingVertical: 7,
    width: "100%",
    textAlign: "center",
    marginTop: 10
  },
  textSeeDetails: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "uppercase"
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
  // if the anime or manga got rank 1
  rankOneSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: "#e9e9eb",
    backgroundColor: "white"
  },
  rankOneNumber: {
    color: "white",
    fontWeight: "600"
  },
  wrapRankOne: {
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 25,
    backgroundColor: "#ED2E45",
    borderRadius: Dimensions.get('window').width / 2
  }
})

export { Styles };