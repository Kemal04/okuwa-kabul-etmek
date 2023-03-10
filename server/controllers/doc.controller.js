const { userDocument } = require("../models/model")

exports.getAll = async (req, res) => {
    const userDocs = await userDocument.findAll();
    res.json({
        userDocs: userDocs
    })
}

exports.getSingle = async (req, res) => {
    const id = req.params.documentId
    try {
        const userDoc = await userDocument.findByPk(id);
        if (userDoc) {
            return res.json({
                userDoc: userDoc
            });
        }
    }
    catch (err) {
        console.log(err)
    }
}

exports.postCreate = async (req, res) => {
    const name = req.body.name;
    const img = req.files.img[0].filename;
    const sahadatnama = req.files.sahadatnama[0].filename;
    const hasiyetnama = req.files.hasiyetnama[0].filename;
    const medSpravka = req.files.medSpravka[0].filename;
    const userId = req.user.id;
    const document = await userDocument.findOne({
        where: {
            userId: userId
        }
    })
    if (!document) {
        try {
            await userDocument.create({
                name: name,
                img: img,
                sahadatnama: sahadatnama,
                hasiyetnama: hasiyetnama,
                medSpravka: medSpravka,
                userId: userId
            });
            res.json({ success: "Dokumentleriniz üstünlikli ugradyldy" })
        }
        catch (err) {
            console.log(err);
        }

    } else {
        res.json({ error: "Siz on maglumatlarynyzy ugratdynyz" })
    }

}

exports.getEdit = async (req, res) => {
    const id = req.params.documentId;
    try {
        const userDoc = await userDocument.findByPk(id);
        if (userDoc) {
            return res.json({
                userDoc: userDoc
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.postEdit = async (req, res) => {
    const id = req.params.documentId;
    const check = req.body.check;

    try {
        const userDoc = await userDocument.findByPk(id);
        if (userDoc) {
            userDoc.check = check;
            userDoc.save();
            return res.json({ success: "Ulanyjyn maglumatlary kabul edildi" });
        }
        res.json({ error: "Otag tapylmady" });

    }
    catch (err) {
        console.log(err);
    }
}

exports.docDestroy = async (req, res) => {
    const id = req.params.documentId;
    const userId = req.user.id;

    try {
        const document = await userDocument.findOne({
            where: {
                id: id,
                userId: userId
            }
        });
        if (document) {
            await document.destroy();
            return res.json({ success: "Sizin maglumatlarynyz üstünlikli pozuldy" });
        }
        res.json({ error: "Maglumatlarynyz tapylmady" })
    }
    catch (err) {
        console.log(err);
    }
}

exports.destroy = async (req, res) => {
    const id = req.params.documentId;

    await userDocument.destroy({
        where: {
            id: id,
        },
    });

    res.json("Maglumat üstünlikli yok edildi");
}