export const home = async (req, res) => {
  try {
    res.render("home", { pageTitle: "Home" });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home" });
  }
};
