const express = require('express');
const router = express.Router();
const {
  getAllIslands,
  getIsland,
  createIsland,
  updateIsland,
  deleteIsland
} = require('../controllers/islandController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Island:
 *       type: object
 *       required:
 *         - name
 *         - location
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the island
 *         name:
 *           type: string
 *           description: The name of the island
 *         nativeName:
 *           type: string
 *           description: Native or local name
 *         location:
 *           type: object
 *           properties:
 *             group:
 *               type: string
 *               enum: [Andaman, Nicobar, Lakshadweep, Offshore Mainlined, Other]
 *             coordinates:
 *               type: object
 *               properties:
 *                 lat:
 *                   type: number
 *                 lng:
 *                   type: number
 *         description:
 *           type: object
 *           properties:
 *             summary:
 *               type: string
 *         status:
 *           type: object
 *           properties:
 *             isInhabited:
 *               type: boolean
 *             isProtectedArea:
 *               type: boolean
 *             permitRequired:
 *               type: string
 *               enum: [None, RAP, ILP, Special Permission]
 *       example:
 *         name: Havelock Island
 *         location:
 *           group: Andaman
 *           coordinates:
 *             lat: 11.9761
 *             lng: 92.9876
 *         description:
 *           summary: A beautiful island known for its dive sites and beaches.
 */

/**
 * @swagger
 * tags:
 *   name: Islands
 *   description: The islands managing API
 */

/**
 * @swagger
 * /api/islands:
 *   get:
 *     summary: Returns the list of all the islands
 *     tags: [Islands]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Search by island name
 *       - in: query
 *         name: location.group
 *         schema:
 *           type: string
 *         description: Filter by island group
 *     responses:
 *       200:
 *         description: The list of the islands
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Island'
 *   post:
 *     summary: Create a new island
 *     tags: [Islands]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Island'
 *     responses:
 *       201:
 *         description: The island was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Island'
 *       400:
 *         description: Bad request
 */
router.route('/')
  .get(getAllIslands)
  .post(createIsland);

/**
 * @swagger
 * /api/islands/{id}:
 *   get:
 *     summary: Get the island by id
 *     tags: [Islands]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The island id
 *     responses:
 *       200:
 *         description: The island description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Island'
 *       404:
 *         description: The island was not found
 *   put:
 *     summary: Update the island by the id
 *     tags: [Islands]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The island id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Island'
 *     responses:
 *       200:
 *         description: The island was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Island'
 *       404:
 *         description: The island was not found
 *   delete:
 *     summary: Remove the island by id
 *     tags: [Islands]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The island id
 *     responses:
 *       200:
 *         description: The island was deleted
 *       404:
 *         description: The island was not found
 */
router.route('/:id')
  .get(getIsland)
  .put(updateIsland)
  .delete(deleteIsland);

module.exports = router;