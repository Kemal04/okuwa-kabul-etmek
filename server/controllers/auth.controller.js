const { User, Admin } = require('../models/model');
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const generateAccessToken = (id, role, username) => {
    const payload = {
      id,
      role,
      username
    }
    return sign(payload, "importantsecret", { expiresIn: "24h" })
  }

exports.registerPost = async (req, res) => {
    const {username, phoneNum, password} = req.body;
    if (!(username && phoneNum && password)) {
        res.json({ error: "Ahli oyjukleri doldurun" });
    }
    const user = await User.findOne({ where: { phoneNum: phoneNum } });
    if (!user) {
        var hashedPassword = await bcrypt.hash(password, 10);
        try {
            await User.create({
                username: username,
                phoneNum: phoneNum,
                password: hashedPassword
            });
            
            res.json("Hasaba alyndy");
        }
        catch (err) {
            console.log(err)
        }
    } else {
        res.json({ error: "Sizin nomeriniz bilen on hasap acylypdyr" })
    }
}
exports.loginPost = async (req, res) => {
    const { phoneNum, password } = req.body;
    await User.findOne({ where: { phoneNum: phoneNum } })
        .then(user => {
            if (!user || user.phoneNum !== phoneNum) {
                res.json({ error: "Ulanyjynyň nomeri ýa-da açar sözi nädogry" })
            } else {
                var passwordIsValid = bcrypt.compareSync(password, user.password)
                if (!passwordIsValid) {
                    res.json({ error: "Ulanyjynyň nomeri ýa-da açar sözi nädogry" })
                } else {
                    const accessToken = generateAccessToken(user.id, user.role, user.username)
                    res.json({ success:"Giris kabul edildi", token: accessToken });
                }
            }
        })
}

exports.authGet = (req, res) => {
    res.json(req.user);
}

exports.infoGet = async (req, res) => {
    const id = req.params.id;
    const basicInfo = await User.findByPk(id, {
        attributes: { exclude: ["password"] },
    });

    res.json(basicInfo);
}

exports.adminLogin = async (req,res) => {
    const { email, password } = req.body;
    await Admin.findOne({ where: { email: email } })
        .then(admin => {
            if (!admin || admin.email !== email) {
                res.json({ error: "Ulanyjynyň nomeri ýa-da açar sözi nädogry" })
            } else {
                var passwordIsValid = bcrypt.compareSync(password, admin.password)
                if (!passwordIsValid) {
                    res.json({ error: "Ulanyjynyň nomeri ýa-da açar sözi nädogry" })
                } else {
                    const accessToken = generateAccessToken(admin.id, admin.role)
                    res.json({ token: accessToken });
                }
            }
        })
}