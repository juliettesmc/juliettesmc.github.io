let today = new Date();
console.log(today);
let thisYear = new Date().getFullYear();
console.log(thisYear);

//DOM
const footer = document.querySelector("footer");

let copyRight = document.createElement("p");
copyRight.innerHTML = "Juliette Martinez " + thisYear;

footer.appendChild(copyRight);

let skills = [
  "Creativity",
  "Adaptation",
  "Negotiation",
  "Communicative skills",
  "Teamwork",
  "Honesty and integrity",
];

let skillsSection = document.getElementById("skillsSection");

//skillsSection.style.backgroundColor = "blue";

let skillsList = document.getElementById("skillsList");
console.log(skillsList);

for (i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  console.log(skill.innerText);
  skillsList.appendChild(skill);
}

let messageForm = document.getElementById("message_form");
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let message = event.target.message.value;
  // console.log(`Name: ${name}`);
  // console.log(`Email: ${email}`);
  // console.log(message);
  event.target.reset(); //eliminar lo que tengo dentro de los espacio de email y name
  // console.log(event.target.name.value);

  // let messageSection = document.getElementById("messageSection");
  // console.log(messageSection);

  // let messageList = document.getElementById("messageList");
  // console.log(messageList);

  // let newMessage = document.createElement("li");
  // newMessage.innerHTML = //anadir otro elementos que son de html
  //   "<a href= mailto:juliette2martinezc@gmail.com >Email</a>";
  // console.log(newMessage);

  // let removeButton = document.createElement("button");
  // removeButton.innerText = "remove";
  // removeButton.setAttribute("type", "button");
  // console.log(removeButton);

  // removeButton.addEventListener(" click ", (event) => {
  //   let entry = removeButton.parentNode;
  //   entry.parentNode.removeChild(entry);
  // });

  // newMessage.appendChild(removeButton);
  // console.log(newMessage);

  // messageList.appendChild(newMessage);

  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML =
    //anadir otro elementos que son de html
    `<a href="mailto:${email}">${name}</a> wrote: <span>${message} </span>`;
  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", (event) => {
    let entry = removeButton.parentNode;
    entry.parentNode.removeChild(entry);
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});

// let githubRequest = new XMLHttpRequest();
// let url = "https://api.github.com/users/JULIETTESMC/repos";
// githubRequest.open("GET", url);
// githubRequest.send();
// githubRequest.addEventListener("load", () => {
//   let repositories = JSON.parse(githubRequest.responseText);
//   let projectSection = document.getElementById("projects"); //selects element with 'project id'
//   let projectList = projectSection.querySelector("ul"); //selects ul element within 'project id' element
//   for (let i = 0; i < repositories.length; i++) {
//     let project = document.createElement("li"); //creates li element and assigns it to 'project variable'
//     project.innerText = repositories[i].name;
//     projectList.appendChild(project);
//   }
// });

fetch("https://api.github.com/users/JULIETTESMC/repos")
  .then((rest) => rest.json())
  .then((data) => {
    let repositories = data;
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");
    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  });
