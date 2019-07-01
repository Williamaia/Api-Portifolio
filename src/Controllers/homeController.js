const Home = require('../Models/Home');

module.exports =  {
    async index(req, res) {
        const home = await Home.find();
        return res.json(home);
    },

    async store(req, res) {
        let home = req.body;
        const { photograph, curriculum } = req.files;
        photograph && (home.photograph = photograph[0].filename)
        curriculum && (home.curriculum = curriculum[0].filename)
        const homeNew = await Home.create(home);
        return res.json(homeNew);
    },

    async show(req, res) {
        const id = req.params.id;
        const home = await Home.findById(id);
        return res.json(home);
    },

    async update(req, res) {
        const home = req.body;
        const id = req.params.id;
        const homeUpdate = await Home.findByUpdate(id, home, {
            new: true
        });
        return res.json(homeUpdate);
    },

    async delete(req, res) {
        const id = req.params.id;
        await Home.findByIdAndRemove(id);
        return res.json({delete: true});
    }
}

