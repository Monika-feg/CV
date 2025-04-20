let educationList = document.getElementById("educationList");

function myEducationList(){
    fetch("json/education.json")
  .then(res => res.json())
  .then(data => {
    console.log(data.myeducation);  
    data.myeducation.forEach(education => {  
      let listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>Utbildning:</strong> ${education.name} <br>
        <strong>Beskrivning:</strong> ${education.description} <br>
        <strong>år:</strong> ${education.year} <br>
      `;
      educationList.appendChild(listItem);
    });
  })
}
myEducationList();
