const Sobre = require("../Models/Sobre");

module.exports =  {
    async index(req, res) {
        const sobre = await Sobre.find();
        return res.json(sobre);
    },

    async store(req, res) {
        const sobre = req.body;
        const savedSobre = await Sobre.create(sobre);
        return res.json(savedSobre);
    },

    async show(req, res) {
        const id = req.params.id;
        const sobre = await Sobre.findById(id);
        return res.json(sobre);
    },

    async update(req, res) {
        const sobre = req.body;
        const id = req.params.id;
        const sobreUpdate = await Sobre.findByUpdate(id, sobre, {
            new: true
        });
        return res.json(sobreUpdate);
    },

    async delete(req, res) {
        const id = req.params.id;
        await Sobre.findByIdAndRemove(id);
        return res.json({delete: true});
    }
}

