// Mock database
let jobs = [
  { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Warsaw', salary: '10000-15000 PLN', description: 'Building modern web applications using React' },
  { id: 2, title: 'Backend Developer', company: 'DataSystems', location: 'Krakow', salary: '12000-18000 PLN', description: 'Developing server-side applications using Node.js' },
  { id: 3, title: 'Full Stack Developer', company: 'WebStudio', location: 'Wroclaw', salary: '15000-20000 PLN', description: 'Creating end-to-end web solutions' }
];

// Get all jobs
exports.getAllJobs = (req, res) => {
  res.status(200).json(jobs);
};

// Get job by ID
exports.getJobById = (req, res) => {
  const id = parseInt(req.params.id);
  const job = jobs.find(job => job.id === id);
  
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }
  
  res.status(200).json(job);
};

// Create new job
exports.createJob = (req, res) => {
  const { title, company, location, salary, description } = req.body;
  
  // Basic validation
  if (!title || !company) {
    return res.status(400).json({ message: 'Title and company are required' });
  }
  
  const newId = jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 1;
  
  const newJob = {
    id: newId,
    title,
    company,
    location: location || 'Remote',
    salary: salary || 'Not specified',
    description: description || ''
  };
  
  jobs.push(newJob);
  res.status(201).json(newJob);
};

// Update job
exports.updateJob = (req, res) => {
  const id = parseInt(req.params.id);
  const jobIndex = jobs.findIndex(job => job.id === id);
  
  if (jobIndex === -1) {
    return res.status(404).json({ message: 'Job not found' });
  }
  
  const { title, company, location, salary, description } = req.body;
  
  // Update job with new data, keeping existing values if not provided
  const updatedJob = {
    ...jobs[jobIndex],
    title: title || jobs[jobIndex].title,
    company: company || jobs[jobIndex].company,
    location: location || jobs[jobIndex].location,
    salary: salary || jobs[jobIndex].salary,
    description: description || jobs[jobIndex].description
  };
  
  jobs[jobIndex] = updatedJob;
  res.status(200).json(updatedJob);
};

// Delete job
exports.deleteJob = (req, res) => {
  const id = parseInt(req.params.id);
  const jobIndex = jobs.findIndex(job => job.id === id);
  
  if (jobIndex === -1) {
    return res.status(404).json({ message: 'Job not found' });
  }
  
  jobs.splice(jobIndex, 1);
  res.status(200).json({ message: 'Job deleted successfully' });
}; 