import { Dimensions, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  containerSection: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#f1f2f6"
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
    fontSize: 20,
    fontWeight: "bold",
  },
  containerInfo: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 30,
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
    fontWeight: "600"
  },
  infoSubDetails: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 12,
    
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
  }
})

export { Styles };