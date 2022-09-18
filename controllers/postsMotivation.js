const User = require('../models/User.js')
const PostsMotivation = require('../models/PostsMotivation')

//Create PostMotivation
exports.createPostMotivation = async (req, res) => {
    try {
        const {videoUrl} = req.body
        const user = await User.findById(req.userId)

        const newPostMotivation = new PostsMotivation({
            videoUrl: videoUrl,
            author: req.userId,
        })

        await newPostMotivation.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: {posts: newPostMotivation},
        })

        return res.json(newPostMotivation)

    } catch (error) {
        res.json({message: 'Something was wrong'})
    }
}

//Get All PostMotivation
exports.getAll = async (req, res) => {
    try {
        const postsMotivation = await PostsMotivation.find().sort('-createdAt')
        const popularPostsMotivation = await PostsMotivation.find().sort('-views')

        if (!postsMotivation) {
            return res.json({message: 'Not videos'})
        }

        return res.json({postsMotivation, popularPostsMotivation})

    } catch (error) {
        res.json({message: 'Something was wrong'})
    }
}