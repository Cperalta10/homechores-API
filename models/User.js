const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        idAdmin: {
            type: Boolean,
            default: false,
        },
        nickname: String,
        profilePicture: String,
        relationship: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
