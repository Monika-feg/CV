let skillList = document.getElementById("otherSkillList");

function otherSkillList(){
    fetch("json/otherskills.json")
  .then(res => res.json())
  .then(data => {
    console.log(data.skill);  
    data.skill.forEach(skill => {  
      let listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>Färgigheter:</strong> ${skill.name} <br>
        <strong>Beskrivning:</strong> ${skill.description} <br>
      `;
      skillList.appendChild(listItem);
    });
  })
}
otherSkillList();
