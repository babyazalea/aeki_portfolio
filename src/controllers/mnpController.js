import Mnp from "../models/Mnp";
import routes from "../routes";
import { countertops, doors, sinks, taps } from "../fakeDb";

// mnp home

export const mnp = async (req, res) => {
  try {
    const mnps = await Mnp.find({});
    res.render("mnp", { pageTitle: "Measurement & Planning", mnps });
  } catch (error) {
    console.log(error);
    res.render("mnp", {
      pageTitle: "Measurement & Planning",
      mnp: [],
    });
  }
};

// Search mnp

export const searchMnp = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let mnp = [];
  try {
    mnp = await Mnp.find({
      customerName: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("searchMnp", {
    pageTitle: "Search Measurement & Planning",
    searchingBy,
    mnp,
  });
};

// Create Mnp

export const getCreateMnp = (req, res) => {
  const mnp = [];
  res.render("createMnp", {
    pageTitle: "Create Measurement & Planning",
    countertops,
    doors,
    sinks,
    taps,
    mnp,
  });
};

export const postCreateMnp = async (req, res) => {
  const {
    body: {
      createDate,
      customerName,
      isellNumber,
      customerPhone,
      address,
      reservationDate,
      siteCondition,
      siteShape,
      freePlanning,
      manager,
      doorName,
      countertop,
      sink,
      tap,
      appliance,
      hood,
      singularityText,
    },
  } = req;

  const newMnp = await Mnp.create({
    createDate,
    customerName,
    isellNumber,
    customerPhone,
    address,
    reservationDate,
    siteCondition,
    siteShape,
    freePlanning,
    manager,
    doorName,
    countertop,
    sink,
    tap,
    appliance,
    hood,
    singularityText,
    creator: req.user.id,
  });
  req.user.mnps.push(newMnp.id);
  req.user.save();
  res.redirect(routes.mnpDetail(newMnp.id));
};

// Measurement & Planning Detail

export const mnpDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const mnp = await Mnp.findById(id)
      .populate("creator")
      .populate({ path: "comments", populate: { path: "creator" } });
    res.render("mnpDetail", {
      pageTitle: "Measurement & Planning Detail",
      mnp,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Edit Measurement & Planning

export const getEditMnp = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const mnp = await Mnp.findById(id).populate("creator");
    if (mnp.creator.id !== req.user.id) {
      throw Error();
    } else {
      res.render("editMnp", {
        pageTitle: "Edit Measurement & Planning",
        countertops,
        doors,
        sinks,
        taps,
        mnp,
      });
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditMnp = async (req, res) => {
  const {
    params: { id },
    body: {
      createDate,
      customerName,
      isellNumber,
      customerPhone,
      address,
      reservationDate,
      siteCondition,
      siteShape,
      freePlanning,
      manager,
      doorName,
      countertop,
      sink,
      tap,
      appliance,
      hood,
      singularityText,
    },
  } = req;
  try {
    await Mnp.findOneAndUpdate(
      { _id: id },
      {
        createDate,
        customerName,
        isellNumber,
        customerPhone,
        address,
        reservationDate,
        siteCondition,
        siteShape,
        freePlanning,
        manager,
        doorName,
        countertop,
        sink,
        tap,
        appliance,
        hood,
        singularityText,
      }
    );
    res.redirect(routes.mnpDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Delete Measurement & Planning

export const deleteMnp = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const mnp = await Mnp.findById(id).populate("creator");
    if (mnp.creator.id !== req.user.id) {
      throw Error();
    } else {
      await Mnp.findByIdAndRemove({
        _id: id,
      });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
