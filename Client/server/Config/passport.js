const userCtrl = require("../../user-ctrl")


module.exports = passport => {
    passport.use(

        new jwtStrategy(opt, (jwt_payload, done) => {

            userCtrl.findById(jwt_payload.user._id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })

    )
}