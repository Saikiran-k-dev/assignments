// Please don't change the pre-written code
// Import the necessary modules here

import { getDb } from "../../config/mongodb.js"

class BucketListRepository {
  async addBucketListItem(bucketListItem) {
    // Write your code here
    const db = getDb()
    const collection = db.collection("bucketList")
    await collection.insertOne(bucketListItem)
    return bucketListItem
  }

  async findOneBucketListItem(title) {
    // Write your code here
    const db = getDb()
    const collection = db.collection("bucketList")
    return await collection.findOne({title})
  }
}

export default BucketListRepository;
