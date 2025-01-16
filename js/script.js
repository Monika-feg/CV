let repoList = document.getElementById("repoList");


function repos(){

    fetch("https://api.github.com/users/Monika-feg/repos")
    .then(res => res.json())
    .then(data =>{
        console.log("Mina repos: ")

        data.forEach(repo => {
            console.log(`Repo: ${repo.name} - URL: ${repo.html_url}`);

            let myRepos = document.createElement("li");
            let repoLink = document.createElement("a");

            repoLink.href = repo.html_url;
            repoLink.textContent = repo.name;
            repoLink.target = "_blank";
            
            myRepos.appendChild(repoLink);
            repoList.appendChild(myRepos);
            
        });
    })
}

repos();