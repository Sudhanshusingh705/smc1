// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all tasks
router.get('/tasks', taskController.getAllTasks);

// Create a new task
router.post('/tasks', authMiddleware.authenticateUser, taskController.createTask);

module.exports = router;
