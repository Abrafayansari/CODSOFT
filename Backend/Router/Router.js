const express =require("express")
const { create, find, createjob, findjob, findjobbyperson, findapply } = require("../Controllers/control")
const upload=require("../Multer")
const cloudinary=require("cloudinary")
const fs = require("fs")
const { uploads } = require("../cloudinary")
const router=express.Router()
router.post("/createuser",create)
router.post("/finduser",find)
router.post('/create-job',createjob)
router.get("/find-jobs",findjob)
router.post("/findpersonjob",findjobbyperson)
router.post("/uploadresume",upload.single("Resume"),uploads)
router.get("/findapply",findapply)
module.exports={router}