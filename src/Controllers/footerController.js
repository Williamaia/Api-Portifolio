const Footer = require("../Models/Footer");

module.exports = {
    async index(req, res) {
        const footer = await Footer.find();
        return res.json(footer);
    },

    async store(req, res) {
        const footer = req.body;
        const savedFooter = await Footer.create(footer);
        return res.json(savedFooter);
    },

    async show(req, res) {
        const id = req.params.id;
        const footer = await Footer.findById(id);
        return res.json(footer);
    },

    async update(req, res) {
        const id = req.params.id;
        const footerUpdate = await Footer.findByIdUpdate(id, footer , {
            update: true
        });
        return res.json(footerUpdate);
    },

    async delete(req, res) {
        const id = req.params.id;
        await Footer.findByIdAndRemove(id);
        return res.json({delete:true});
    }
}

