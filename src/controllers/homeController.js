import Mnp from "../models/Mnp";
import dateFormatter from "date-format";

export const home = async (req, res) => {
  try {
    const mnps = await Mnp.find({
      createDate: dateFormatter("yyyy-MM-dd", new Date()),
    });
    res.render("home", { pageTitle: "Home", mnps });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home" });
  }
};
