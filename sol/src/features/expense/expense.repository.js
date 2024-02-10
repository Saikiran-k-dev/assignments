import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) {
    try {
      const db = getDB()
      const collection = db.collection(this.collectionName)
      return await collection.insertOne(expense)
      

    } catch (error) {
      console.log(error)
    }
  }

  

  // Get one expnese by its ID
  async getOne(id) {
    try {
      const db = getDB()
      const collection = db.collection(this.collectionName)
      return await collection.findOne({_id: new ObjectId(id)})
    } catch (error) {
      console.log(error)
    }
  }

  // Get all expenses
  async getAllExpenses() {
    try {
      const db = getDB()
      const collection = db.collection(this.collectionName)
      return await collection.find().toArray()
      

    } catch (error) {
      console.log(error)
    }
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    try {
      const db = getDB()
      const collection = db.collection(this.collectionName)
      collection.updateOne({_id:new ObjectId(id)},{$push: {tags:tag}})
    } catch (error) {
      console.log(error)
    }
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
    try {
      const db = getDB()
      const collection = db.collection(this.collectionName)
      let filterData = {}
      if(criteria.minAmount){
        filterData.amount = {$gte:parseInt(criteria.minAmount)}
      }
      if(criteria.maxAmount){
        filterData.amount= {...filterData.amount,$lte:parseInt(criteria.maxAmount)}
      }
      if(criteria.isRecurring){
        filterData.isRecurring = Boolean(criteria.isRecurring)
      }
      return await collection.find(filterData).toArray();
    } catch (error) {
      console.log(error)
    }
  }
}

export default ExpenseRepository;
