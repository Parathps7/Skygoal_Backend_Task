const express = require('express')
const router = express.Router()
const {userDetails} =require('../controllers/userDetails')



/**
 * @swagger
 * tags:
 *   name: Users Details
 *   description: API operations related to user details
 */



/**
 * @swagger
 * /api/user-details/{email}:
 *   get:
 *     summary: Gets the detail of user
 *     tags: [Users Details]
*     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Enter email of user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response.
 *       '404':
 *         description: No given email found!
 */

//reset password
router.get('/:email',userDetails);


module.exports=router