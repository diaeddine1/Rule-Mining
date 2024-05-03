const express = require("express")
const itemscontroller = require("../../Controllers/Get_Items_Controller")
const authenticate =require('../../middleware/authenticate')
const swaggerUi = require('swagger-ui-express');
const router = express.Router()
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /items/all_items:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Returns the list of all the items
 *     description: Endpoint to fetch all items from the database.
 *     responses:
 *       '200':
 *         description: A list of items.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique identifier for the item.
 *                   name:
 *                     type: string
 *                     description: The name of the item.
 */





router.get("/all_items",authenticate,itemscontroller.getAllItems)


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /items/random_items:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Returns the list of all the items
 *     description: Endpoint to fetch all items from the database.
 *     responses:
 *       '200':
 *         description: A list of items.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique identifier for the item.
 *                   name:
 *                     type: string
 *                     description: The name of the item.
 */
router.get("/random_items",authenticate,itemscontroller.getRandomItems)


module.exports=router