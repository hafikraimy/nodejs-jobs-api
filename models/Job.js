const mongoose = require('mongoose')

const JobSchema = mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, 'Please provide company'],
            maxLength: 50,
        },
        position: {
            type: String,
            required: [true, 'Please provide position'],
            maxLength: 50,
        },
        status: {
            type: String,
            enum: ['pending', 'declined', 'interview'],
            default: 'pending',
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: [true, 'Please provide user'],
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Job', JobSchema)