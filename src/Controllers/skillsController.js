const Skills = require("../Models/Skills");

module.exports = {
    async index(req, res) {
        const skills = await Skills.find();
        return res.json(skills);
    },

    async store(req, res) {
        const skills = req.body;
        const savedSkills = await Skills.create(skills);
        return res.json(savedSkills);
    },

    async show(req, res) {
        const id = req.params.id;
        const skills = await Skills.findById(id);
        return res.json(skills);
    },

    async update(req, res) {
        const skills = req.body;
        const id = req.params.id;
        const skillsUpdate = await Skills.findByUpdate(id, skills, {
            new: true
        });
        return res.json(skillsUpdate);
    },

    async delete(req, res) {
        const id = req.params.id;
        await Skills.findByIdAndRemove(id);
        return res.json({delete: true});
    }
}

