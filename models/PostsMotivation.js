const {Schema, model, Types} = require('mongoose')

const schema = new Schema(
    {
        videoUrl: {type: String, required: true},
        views: {type: Number, default: 0},
        author: {type: Types.ObjectId, ref: 'User'},
    }, 
    {
        timestamps: true
    },
)

module.exports =  model('PostsMotivation', schema)