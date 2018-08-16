console.log('Before');
getUser(1 , (user) => {
    console.log('user: ', user);
    getRepositories(getUsername);
    console.log('After');
});

function getUsername(result){
    console.log(result);
    getCommits(repo, displayCommits);
}

function getCommits(repo, commits){
    console.log(commits);
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback){
    setTimeout(() => {
        console.log('Accessing user from database ...');
        callback({ id: id, user: 'ankitsejwal'});
    }, 2000);
}


// asynchronous function
function getRepositories(callback) {
    setTimeout(() => {
        console.log('returning repositories for the selected user ...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}
