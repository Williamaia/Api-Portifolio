const homeInfos = require("../Models/homeInfos");

module.exports = {
    async index(req, res) {
        const infos = await homeInfos.find();
        return res.json(infos);
    },

    async store(req, res) {
        const infos = req.body;
        const savedInfos = await homeInfos.create(infos);
        return res.json(savedInfos);
    },

    async show(req, res) {
        const id = req.params.id;
        const infos = await homeInfos.findById(id);
        return res.json(infos);
    },

    async update(req, res) {
        const id = req.params.id;
        const infosUpdate = await homeInfos.findByIdUpdate(id, infos , {
            update: true
        });
        return res.json(infosUpdate);
    },

    async delete(req, res) {
        const id = req.params.id;
        await homeInfos.findByIdAndRemove(id);
        return res.json({delete:true});
    }
}

