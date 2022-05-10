const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../index.js")
const Product = require("../models/Product")
const User = require("../models/User")

const api = supertest(app)
jest.setTimeout(10000)
let AuthToken = null
const initialProducts = [
  {
    title: "Mango",
    desc:
      "A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India.",
    img: "https://images.hindustantimes.com/img/2021/06/02/550x309/9a156550-c367-11eb-9d53-2d5cae187b44_1622619423185.jpg",
    categories: ["Fruit"],
    size: ["S", "M", "L"],
    color: ["yellow"],
    price: 30,
    inStock: true
  },
  {
    title: "Carrot",
    desc:
      "The carrot (Daucus carota) is a root vegetable often claimed to be the perfect health food.",
    img: "https://exoticvegetablespune.com/wp-content/uploads/2019/03/Baby-carrot.jpg",
    categories: ["Vegetable"],
    size: ["M", "L", "S"],
    color: ["orange"],
    price: 70,
    inStock: true
  },
  {
    title: "Milk",
    desc:
      "Milk is a nutrient-rich liquid food produced by the mammary glands of mammals.",
    img: "https://post.healthline.com/wp-content/uploads/2019/11/milk-soy-hemp-almond-non-dairy-1200x628-facebook.jpg",
    categories: ["Dairy"],
    size: ["M", "L", "S"],
    color: ["white"],
    price: 30,
    inStock: true
  },
  {
    title: "Banana",
    desc:
      "A banana is an elongated, edible fruit botanically a berry produced by several kinds of large herbaceous flowering plants in the genus Musa.",
    img: "https://th-thumbnailer.cdn-si-edu.com/4Nq8HbTKgX6djk07DqHqRsRuFq0=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg",
    categories: ["fruit"],
    size: ["M", "L", "S"],
    color: ["yellow"],
    price: 40,
    inStock: true
  },
  {
    title: "Custard Apple",
    desc:
      "The custard apple is native to the Americas, but has been found on the island of Timor as early as 1000 CE.",
    img: "https://m.media-amazon.com/images/I/413ygiOPqtL._SX466_.jpg",
    categories: ["fruit"],
    size: ["M", "L", "S"],
    color: ["green"],
    price: 60,
    inStock: true
  }
]


describe("About Auth: ",()=>{
  beforeAll(async ()=>{
    await User.deleteMany({})
  })
  const user = {
    username:"testuser",
    password:"testpassword",
    email:"testuser@gmail.com",
    phonenumber:"+919898989898"
  }
  test("user can be registered with valid user info ",async ()=>{
    const response = await api.post("/api/auth/register").send(user).expect(201).expect('Content-Type',/application\/json/)
    // expect(response.body["savedUser"]).toBedefined()
  })
})

describe("About Products: ", () => {
  beforeAll(async () => {
    await Product.deleteMany({})
    await Product.insertMany(initialProducts)
    const user = {
      username: "testuser",
      password: "testpassword"
    }
    const response = await api.post("/api/auth/login").send(user).expect(200)
    AuthToken = response.body.token
    console.log(AuthToken)
  })
  test("products can be fetched and fetched products should be same as in db", async () => {
    const ProductsInDb = await Product.find({})
    console.log(typeof ProductsInDb)
    const ProductsInDbJson = ProductsInDb.map((blog) => blog.toJSON())
    console.log(typeof ProductsInDbJson)
    expect(ProductsInDbJson).toHaveLength(initialProducts.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
