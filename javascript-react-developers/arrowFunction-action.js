const jobs = [
    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:3, isActive: false}
]

// jobs.filter(function(job){ return job.isActive})
const filteredJobs = jobs.filter(job => job.isActive)
console.log(filteredJobs)