import ExpenseModel from "./expense.model.js";
import ExpenseRepository from "./expense.repository.js";

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  // Create new expense
  add = async (req, res) => {
    const {title , amount, date,isRecurring, tags} = req.body
    const newExpense = new ExpenseModel(title,amount,date,isRecurring,tags)
    await this.expenseRepository.addExpense(newExpense)
    return res.status(200).send(newExpense)
  };

  // Get a specific expense
  getOne = async (req, res) => {
    const id = req.params.id
    const item = await this.expenseRepository.getOne(id)
    return res.status(200).send(item)
  };

  // Get all expenses
  getAll = async (req, res) => {
    const result = await this.expenseRepository.getAllExpenses()
    // console.log(result)
    if(result){
      return res.status(200).send(result)
    } else{
      return res.status(400).send("add some products")
    }
  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    const id = req.params.id
    const newtag = req.body.tags
    console.log(newtag)
    const addNewTag = await this.expenseRepository.addTagToExpense(id,newtag)
    res.status(200).send("Tag added successfully")
  };

  // Filter expenses based on given criteria
  filter = async (req, res) => {
    const filteredData = await this.expenseRepository.filterExpenses(req.query)
    res.status(200).send(filteredData)
  };
}
