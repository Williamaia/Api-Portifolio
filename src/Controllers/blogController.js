const Blog = require("../Models/Blog");

module.exports = {
    async index(req, res) {
        const Blog = await Blog.find();
        return res.json(blog);
    },

    async store(req, res) {
        const blog = req.body;
        const savedBlog = await Blog.create(blog);
        return res.json(savedBlog);
    },

    async show(req, res) {
        const id = req.params.id;
        const blog = await Blog.FindById(id);
        return res.json(blog);
    },

    async update(req, res) {
        const blog = req.body;
        const id = req.params.id;
        const blogUpdate = await blog.FindByUpdate(id, blog, {
            new: true
        });

        return res.json(blogUpdate);
    },

    async delete(req, res) {
        const id = req.params.id;
        await Blog.FindByAndRemove(id);
        return res.json({delete:true});
    }
}

