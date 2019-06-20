const Contact = require ("../Models/Contact");

module.exports = {
    async index(req, res) {
        const contact = await Contact.find();
        return res.json(contact);
    },

    async store(req, res) {
        const contact = req.body;
        const savedContact = await Contact.create(contact);
        return res.json(savedContact);
    },

    async show(req, res) {
        const id = req.params.id;
        const contact = await Contact.findById(id);
        return res.json(contact);
    },

    async update(req, res) {
        const contact = req.body;
        const id = req.params.id;
        const contactUpdate = await Contact.findByUpdate(id, contact, {
            new: true
        });
            return res.json(contactUpdate);
    },

    async delete(req, res) {
        const id = req.params.id;
        await Contact.findByIdAndRemove(id);
        return res.json({delete: true});
    }
}
