const {User} = require("../models/model")


module.exports.getAlldata = async (req, res) => {
    const users = await User.findAll();
    res.json({
        users: users
    })
}

module.exports.getSingleUser = async (req, res) => {
    const id = req.params.userId;
    try {
        const user = await User.findByPk(id);
        if (user) {
            return res.json({
                user: user
            });
        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.getEdit = async (req, res) => {
    const id = req.params.userId;
    try {
        const user = await User.findByPk(id);
        if (user) {
            return res.json({
                user: user
            });
        } else {
            res.json({ error: "Ulanyjy tapylmady" });
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.postEdit = async (req, res) => {
    const id = req.params.userId;
    const surname = req.body.surname;
    const email = req.body.email;
    const address = req.body.address;
    try {
        const user = await User.findByPk(id);
        if (user) {
            user.surname = surname;
            user.email = email;
            user.address = address;
            user.save();
            return res.json({ success: "Maglumatlaryňyz üstünlikli gosuldy" });
        }
        res.json({ error: "Ulanyjy tapylmady" });
    }
    catch (err) {
        console.log(err);
    }
}