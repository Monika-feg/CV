let skilList = document.getElementById("skillList");

function mySkilList(){
    fetch("json/skill.json")
  .then(res => res.json())
  .then(data => {
    console.log(data.mywork);  
    data.mywork.forEach(job => {  
      let listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>Arbetsplats:</strong> ${job.work} <br>
        <strong>Titel:</strong> ${job.title} <br>
        <strong>Beskrivning:</strong> ${job.description} <br>
        <strong>År:</strong> ${job.year}
      `;
      skilList.appendChild(listItem);
    });
  })
}
mySkilList();
