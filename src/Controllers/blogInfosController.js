const blogInfos = require("../Models/blogInfos");

module.exports = {
    async index(req, res) {
        const infosb = await blogInfos.find();
        return res.json(infosb);
    },

    async store(req, res) {
        const {resume} = req.body;
        const {filename: image} = req.file;
        const{link} = req.body;
        const infosb = await blogInfos.create({
            resume,
            image,
            link
        });
        return res.json(infosb);
    },

    async show(req, res) {
        const id = req.params.id;
        const infosb = await blogInfos.findById(id);
        return res.json(infosb);
    },

    async update(req, res) {
        const id = req.params.id;
        const infosbUpdate = await blogInfos.findByIdUpdate(id, infosb , {
            update: true
        });
        return res.json(infosbUpdate);
    },

    async delete(req, res) {
        const id = req.params.id;
        await blogInfos.findByIdAndRemove(id);
        return res.json({delete:true});
    }
}

