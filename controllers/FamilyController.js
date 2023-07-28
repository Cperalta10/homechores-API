const Family = require("../models/Family");

const createFamily = async (req, res) => {
    const { newUser, familyName, familyCode } = req.body;

    const newFamily = new Family({ familyCode, familyName, members: newUser });

    try {
        await newFamily.save();
        res.status(201).json(newFamily);
    } catch (err) {
        res.status(500).json(err);
    }
};

const joinFamily = async (req, res) => {
    const { newUser, familyCode } = req.body;

    let family;

    try {
        family = await Family.findOne({ familyCode });

        if (family) {
            await family.updateOne({ $push: { members: newUser } });
            res.status(201).json(family);
        } else {
            res.status(500).json({ message: "family does not exist" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const getFamily = async (req, res) => {};

module.exports = { createFamily, joinFamily };
