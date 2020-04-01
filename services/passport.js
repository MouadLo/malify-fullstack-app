const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		async (accessToken, refreshToken, profile, done) => {
			const user = await User.findOne({
				googleId: profile.id
			}).then(existingUser => {
				if (existingUser) {
					// we already have record with a given profile ID
				} else {
					// We don't have a record with this ID, make a new record!
					new User({ googleId: profile.id }).save();
				}
			});
		}
	)
);
