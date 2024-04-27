const express = require('express')
const router = express.Router()
const validateToken = require('../middlewares/validateTokenHandler')
const userAuth = require('../middlewares/userAuth')
const {add,del,view} =require('../controllers/imageControllers')
const multer = require('multer')
const randomstring = require('randomstring')
const path = require('path')
const csrf = require('csurf')
const bodyparser = require('body-parser')

// CSRF attack security
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyparser.urlencoded({ extended: false })



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.join(__dirname, '../uploads'))
    },
    filename: function (req, file, cb) {
      cb(null,(new Date().toDateString().split(' ').join('')) + '-' + file.originalname )
    }
  })
  

const uploads = multer({ storage: storage })


/**
 * @swagger
 * tags:
 *   name: Images
 *   description: API operations related to user management
 */

/**
 * @swagger
 * /api/images/add:
 *   post:
 *     summary: Add an image and caption .
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: file
 *               text:
 *                 type: string
 *             required:
 *               - file
 *               - text
 *     responses:
 *       '201':
 *         description: A successful response.
 *       '404':
 *         description: Stock not found or already added to favourites.
 */


// add image - admin only
router.post('/add',parseForm,validateToken,userAuth('admin'),uploads.single('file'),add);



/**
 * @swagger
 * /api/images/delete/{id}:
 *   delete:
 *     summary: Remove an image from favourites.
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the image and caption to be removed.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response.
 *       '400':
 *         description: Stock not found or permission issue.
 */

//delete image - admin only
router.delete('/delete/:id',parseForm,validateToken,userAuth('admin'),del);

/**
 * @swagger
 * /api/images/view:
 *   get:
 *     summary: Get all images and captions.
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response.
 */

//view images - user & admin
router.get('/view',csrfProtection,validateToken,userAuth('user','admin'),view);



module.exports = router