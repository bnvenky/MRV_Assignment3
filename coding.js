/*1. Functions and Expressions
Scenario: You are developing a system to manage and analyze election data for the 2024 elections.

Question:
Write a function expression named calculateVotes that takes three arguments: candidateName, votes, and region.
This function should return a formatted string with the candidate's name,
the number of votes, and the region.*/ 

const calculateVotes = function(candidateName, votes, region) {
    return `${candidateName} received ${votes} votes in the ${region} region.`;
};

console.log(calculateVotes("Pavan Kalyan", 100000, "pithapuram"));





/*2. Recursive Functions
Scenario: To ensure the election data is accurate, you need to verify the votes from multiple sources.

Question:
Write a recursive function named verifyVotes that takes an array of vote counts 
from different sources and returns the total number of votes.*/

function verifyVotes(vC) {
    if (vC.length === 0) {
        return 0;
    }
    return vC[0] + verifyVotes(vC.slice(1));
}

console.log(verifyVotes([50000, 75000, 150000])); 





/*3. Rest Parameters
Scenario: Sometimes, you receive votes from an unknown number of regions.

Question:
Write a function named totalVotes that uses rest parameters to accept any number of 
arguments representing votes from different regions. The function should return the sum of all 
the votes.*/

function totalVotes(...votes) {
    return votes.reduce((total, current) => total + current, 0);
}

vote_from_diff_region = totalVotes(15000, 20000, 35000, 50000)
console.log(vote_from_diff_region);






/*4. Arrow Functions
Scenario: You need to quickly filter and analyze the election data using modern ES6 features.

Question:
Create an arrow function named filterCandidates that takes an array of candidate objects and a 
threshold number of votes. It should return an array of candidate names who have more votes than
 the threshold.*/

 const filterCandidates = (candidates, threshold) => 
    candidates.filter(candidate => candidate.votes > threshold).map(candidate => candidate.name);


const candidates = [
    { name: "Pavan Kalyan", votes: 10000 },
    { name: "Chandhra Babu Naidu", votes: 9000 },
    { name: "Jagan", votes: 6000 }
];
console.log(filterCandidates(candidates, 7000)); 




/*5. Combining Concepts
Scenario: For a comprehensive analysis, you need to write a function that integrates all the concepts mentioned above.

Question:
Write a function named analyzeElection that accepts a threshold number of votes and any number of candidate objects 
using rest parameters. Each candidate object has a name and votes. Use an arrow function to filter 
candidates based on the threshold and a recursive function to calculate the total votes of the 
filtered candidates. The function should return an object containing the filtered candidates' names and the total votes.*/

const analyzeElection = (threshold, ...candidates) => {
    const filteredCandidates = candidates.filter(candidate => candidate.votes > threshold);
    
    const recursiveTotalVotes = (vC) => {
        if (vC.length === 0) {
            return 0;
        }
        return vC[0] + recursiveTotalVotes(vC.slice(1));
    };

    const candidateNames = filteredCandidates.map(candidate => candidate.name);
    const totalVotes = recursiveTotalVotes(filteredCandidates.map(candidate => candidate.votes));
    
    return {
        filteredCandidates: candidateNames,
        totalVotes: totalVotes
    };
};


const candidateData = [
    { name: "Pavan Kalyan", votes: 10000 },
    { name: "Chandhra Babu Naidu", votes: 9000 },
    { name: "Jagan", votes: 6000 }
];
console.log(analyzeElection(8000, ...candidateData));

