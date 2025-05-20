const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

// GET all jobs
router.get('/', jobsController.getAllJobs);

// GET job by ID
router.get('/:id', jobsController.getJobById);

// POST create new job
router.post('/', jobsController.createJob);

// PUT update job
router.put('/:id', jobsController.updateJob);

// DELETE job
router.delete('/:id', jobsController.deleteJob);

module.exports = router; 