const express = require('express')
const router = express.Router()
const {register,login,forgetpassword,resetpassword} =require('../controllers/userControllers')
const csrf = require('csurf')
const bodyparser = require('body-parser')


// CSRF attack security
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyparser.urlencoded({ extended: false })



/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations related to user management
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               adminpass:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *               - adminpass
 *     responses:
 *       '200':
 *         description: A successful response.
 *       '409':
 *         description: User data not valid or user already registered.
 *       '422':
 *         description: Please enter all credentials(username,email,password) or user data not valid.
 */

// sign up
router.post('/register',parseForm,register);


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: A successful response.
 *       '403':
 *         description: Email or password not valid.
 *       '422':
 *         description: All fields are mandatory
 */



//sign in
router.post('/login',parseForm,login);

/**
 * @swagger
 * /api/users/forget-password:
 *   post:
 *     summary: Send a reset password token to reset password.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *             required:
 *               - email
 *     responses:
 *       '200':
 *         description: A successful response.
 *       '404':
 *         description: No given email found!
 */


//forgot password
router.post('/forget-password',parseForm,forgetpassword);


/**
 * @swagger
 * /api/users/reset-password/{token}:
 *   post:
 *     summary: Send a reset password token to reset password.
 *     tags: [Users]
*     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: ID of the favourite stock to be removed.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *             required:
 *               - password
 *     responses:
 *       '200':
 *         description: A successful response.
 *       '404':
 *         description: No given email found!
 *       '401':
 *         description: Not updated.Try again!
 */

//reset password
router.post('/reset-password/:token',parseForm,resetpassword);

module.exports=router