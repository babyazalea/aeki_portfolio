import { countertops, doors, sinks, taps, howToSink } from "../fakeDb";
import Installation from "../models/Installation";
import routes from "../routes";

// Installation Home

export const installation = async (req, res) => {
  try {
    const installations = await Installation.find({});
    res.render("installation", { pageTitle: "Installation", installations });
  } catch (error) {
    console.log(error);
    res.render("installation", {
      pageTitle: "Installation",
      installations: [],
    });
  }
};

// Search Installation

export const searchInstallation = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let installations = [];
  try {
    installations = await Installation.find({
      customerName: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("searchInstallation", {
    pageTitle: "Search Installation",
    searchingBy,
    installations,
  });
};

// Create Installation

export const getCreateInstallation = (req, res) => {
  const installation = [];
  res.render("createInstallation", {
    pageTitle: "Create Installation",
    countertops,
    doors,
    sinks,
    taps,
    howToSink,
    installation,
  });
};
export const postCreateInstallation = async (req, res) => {
  const {
    body: {
      createDate,
      customerName,
      customerPhone,
      isellNumber,
      ihpNumber,
      installationAddress,
      reservationDate,
      deliveryDate,
      installaionDate,
      installationCost,
      cmwCheck,
      cmwDate,
      cmwInstallationCost,
      cmwCost,
      doorName,
      countertop,
      sink,
      tap,
      howToSink,
      cooktop,
      hood,
      lighting,
      changeText,
      notPurchasedCheck,
      articleNumber,
      singularityText,
    },
  } = req;
  try {
    const newInstallation = await Installation.create({
      createDate,
      customerName,
      customerPhone,
      isellNumber,
      ihpNumber,
      installationAddress,
      reservationDate,
      deliveryDate,
      installaionDate,
      installationCost,
      cmwCheck,
      cmwDate,
      cmwInstallationCost,
      cmwCost,
      doorName,
      countertop,
      sink,
      tap,
      howToSink,
      cooktop,
      hood,
      lighting,
      changeText,
      notPurchasedCheck,
      articleNumber,
      singularityText,
      creator: req.session.user._id,
    });
    req.user.installations.push(newInstallation.id);
    req.user.save();
    res.redirect(routes.installationDetail(newInstallation.id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Installation Detail

export const installationDetail = async (req, res) => {
  const {
    params: { id },
    user,
  } = req;
  try {
    const installation = await Installation.findById(id)
      .populate("creator")
      .populate({ path: "comments", populate: { path: "creator" } });
    res.render("installationDetail", {
      pageTitle: "Installation Detail",
      installation,
      user,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Edit Installation

export const getEditInstallation = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const installation = await Installation.findById(id).populate("creator");
    if (installation.creator.id !== req.user.id) {
      throw Error();
    } else {
      res.render("editInstallation", {
        pageTitle: "Edit Installation",
        countertops,
        doors,
        sinks,
        taps,
        howToSink,
        installation,
      });
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditInstallation = async (req, res) => {
  const {
    params: { id },
    body: {
      createDate,
      customerName,
      customerPhone,
      isellNumber,
      ihpNumber,
      installationAddress,
      reservationDate,
      deliveryDate,
      installaionDate,
      installationCost,
      cmwCheck,
      cmwDate,
      cmwInstallationCost,
      cmwCost,
      doorName,
      countertop,
      sink,
      tap,
      howToSink,
      cooktop,
      hood,
      lighting,
      changeText,
      notPurchasedCheck,
      articleNumber,
      singularityText,
    },
  } = req;
  try {
    await Installation.findOneAndUpdate(
      { _id: id },
      {
        createDate,
        customerName,
        customerPhone,
        isellNumber,
        ihpNumber,
        installationAddress,
        reservationDate,
        deliveryDate,
        installaionDate,
        installationCost,
        cmwCheck,
        cmwDate,
        cmwInstallationCost,
        cmwCost,
        doorName,
        countertop,
        sink,
        tap,
        howToSink,
        cooktop,
        hood,
        lighting,
        changeText,
        notPurchasedCheck,
        articleNumber,
        singularityText,
      }
    );
    res.redirect(routes.installationDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Delete Installation

export const deleteInstallation = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const installation = await Installation.findById(id).populate("creator");
    if (installation.creator.id !== req.user.id) {
      throw Error();
    } else {
      await Installation.findByIdAndRemove({
        _id: id,
      });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
