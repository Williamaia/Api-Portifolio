const Portifolio = require('../Models/Portifolio');

module.exports =  {
    async index(req, res) {
        const portifolio = await Portifolio.find();
        return res.json(portifolio);
    },

    async store(req, res) {
        const {title} = req.body;
        const {filename: image} = req.file;
        const portifolio = await Portifolio.create({
            title,
            image
        });
        return res.json(portifolio);
    },

    async show(req, res) {
        const id = req.params.id;
        const portifolio = await Portifolio.findById(id);
        return res.json(portifolio);
    },

    async update(req, res) {
        const portifolio = req.body;
        const id = req.params.id;
        const portifolioUpdate = await Portifolio.findByUpdate(id, portifolio, {
            new: true
        });
        return res.json(portifolioUpdate);
    },
    
    async delete(req, res) {
        const id = req.params.id;
        await Portifolio.findByIdAndRemove(id);
        return res.json({delete: true});
    }
}

