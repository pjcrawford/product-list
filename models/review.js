const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  username: String,
  text: String,
  product: [{ type: Schema.Types.ObjectId, ref: 'product' }]
})

// let review = new Review({
//     reviewtext: 'Hey'
//   });
  
//   review.save();



module.exports = mongoose.model('Review', ReviewSchema)
