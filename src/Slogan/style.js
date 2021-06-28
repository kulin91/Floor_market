import logo from './img/logo.png';

export const style = {
  main: {
    height: "calc(100vh - 100px)",
    // height: "10000px",
    backgroundColor: "#212121",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },

  slogan_container: {
    color: "#FAFAFA",
    fontSize: "32pt",
    fontWeight: "bold",

  }
}