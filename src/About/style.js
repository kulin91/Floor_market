import floor from './img/floor.png';

export const style = {
  screen_about: {
    height: "calc(100vh - 100px)",
    backgroundColor: "#fafafa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  about_title: {
    fontWeight: "bold",
    fontSize: "32pt",
    margin: "15px",
  },

  information_container: {
    height: "calc(80vh - 100px)",
    width: "70vw",
    // backgroundColor: "#212121",
    display: "flex",
    boxShadow: "8px 8px 8px 4px rgb(207 207 212 / 34%)",
    border: "1px solid #F5F5F5",
    borderRadius: "5%",
  },

  container_for_img_and_experience: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
  },

  img_container: {
    display: "flex",
    flex: "2",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FFA726",
  },

  experience_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    // backgroundColor: "#8D6E63",
  },

  description_container: {
    textAlign: "left",
    flex: "2",
    // backgroundColor: "#66BB6A",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    padding: "35px"
  },

  description_text: {
    marginTop: "50px",
  },

  description_list_container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "25px",
    marginLeft: "35px",
  },

  description_list: {
    listStyleImage: "url{logo}",
  }

}