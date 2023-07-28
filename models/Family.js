const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FamilySchema = new Schema(
    {
        familyCode: {
            type: String,
            required: true,
        },
        familyName: {
            type: String,
            required: true,
        },
        members: [],
        familyPicture: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Family", FamilySchema);
