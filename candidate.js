// JavaScript code for candidate search and list

const searchForm = document.getElementById('search-form');
const candidateList = document.getElementById('candidate-list');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get search parameters
  const location = document.getElementById('location').value;
  const jobRole = document.getElementById('job-role').value;

  // Perform candidate search
  const searchResults = searchCandidates(location, jobRole);

  // Display search results
  displayCandidates(searchResults);
});

// Mock function for candidate search
function searchCandidates(location, jobRole) {
  // Replace this with your actual candidate search logic
  // Perform search based on location and job role
  // Return an array of matching candidates
  const candidates = [
    { name: 'Candidate 1', location: 'Location 1', jobRole: 'Job Role 1' },
    { name: 'Candidate 2', location: 'Location 2', jobRole: 'Job Role 2' },
    { name: 'Candidate 3', location: 'Location 1', jobRole: 'Job Role 2' },
    { name: 'Candidate 4', location: 'Location 3', jobRole: 'Job Role 1' },
  ];

  // Filter candidates based on location and job role
  const filteredCandidates = candidates.filter(candidate => {
    return (
      candidate.location.toLowerCase() === location.toLowerCase() &&
      candidate.jobRole.toLowerCase() === jobRole.toLowerCase()
    );
  });

  return filteredCandidates;
}

// Display candidates in the list
function displayCandidates(candidates) {
  // Clear previous search results
  candidateList.innerHTML = '';

  if (candidates.length === 0) {
    const message = document.createElement('li');
    message.textContent = 'No candidates found.';
    candidateList.appendChild(message);
  } else {
    candidates.forEach(candidate => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>Name:</strong> ${candidate.name}<br>
                            <strong>Location:</strong> ${candidate.location}<br>
                            <strong>Job Role:</strong> ${candidate.jobRole}`;
      candidateList.appendChild(listItem);
    });
  }
}
