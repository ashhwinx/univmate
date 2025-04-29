const express = require("express")
const router = express.Router()
const {body}= require("express-validator")
const userController = require('../controllers/user.controller')
const authMiddleware = require("../middlewares/auth.middleware")


router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname').isLength({min:6}).withMessage('Fullname must be at least 6 characters long'),
    body('password').isLength({min:6}).withMessage('ok password must be at least 6 character long'),
    body('semester').notEmpty().withMessage('Semester is required'),
    body('section').notEmpty().withMessage('section is required')
],
userController.registerUser 
)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email ok not"),
    body('password').isLength({min:6}).withMessage('password must be at least 6 character long')
],userController.loginUser)


router.get('/profile',authMiddleware.authUser,userController.getUserProfile) 

router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports=router