const state = [
  {
    id: "1",
    name: "Shopping List",
    creationDate: "April 20, 2022",
    category: "Task",
    content: "Tomatoes, bread",
    dates: "",
    isActive: true,
  },
  {
    id: "2",
    name: "Shopping List",
    creationDate: "April 20, 2022",
    category: "Task",
    content: "Tomatoes, bread",
    dates: "",
    isActive: false,
  },
  {
    id: "3",
    name: "Else",
    creationDate: "April 20, 2022",
    category: "Idea",
    content: "Tomatoes, bread",
    dates: "",
    isActive: true,
  },
  {
    id: "4",
    name: "Tyler Derden",
    creationDate: "April 28, 2022",
    category: "Quote",
    content: "It’s only after we’ve lost",
    dates: "",
    isActive: true,
  },
  {
    id: "5",
    name: "new feature",
    creationDate: "May 05, 2021",
    category: "Idea",
    content: "Invent someth",
    dates: "10/5/2021",
    isActive: true,
  },
  {
    id: "6",
    name: "Some stuff",
    creationDate: "April 20, 2022",
    category: "Random Thought",
    content: "lorem ipsum...",
    dates: "22/04/2021",
    isActive: false,
  },
];

function generateNotesList(list) {
  const tableData = list.map((value) => {
    if (value.isActive) {
      return `<tr>
                <td>${value.name}</td>
                <td>${value.creationDate}</td>
                <td>${value.category}</td>
                <td>${value.content}</td>
                <td>${value.dates}</td>
            </tr>`;
    }
  });
  const tableBody = document.getElementById("notesList");
  tableBody.innerHTML = tableData;
}
function generateArchivedList(list) {
  let filtered = list.filter((note) => !note.isActive);
  let archieved = [
    filtered.filter((note) => note.category === "Task"),
    filtered.filter((note) => note.category === "Quote"),
    filtered.filter((note) => note.category === "Idea"),
    filtered.filter((note) => note.category === "Random Thought"),
  ];
  const tableData = archieved
    .filter((el) => el.length > 0)
    .map((el) => {
      return `<tr>
                    <td>${el[0].category}</td>
                    <td>${el.length}</td>
                </tr>`;
    });
  const tableBody = document.getElementById("archList");
  tableBody.innerHTML = tableData;
}
generateNotesList(state);
generateArchivedList(state);


// MODAL WINDOW

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
////
////Adding note functionality
let addBtn = document.getElementById('submitBTN')
addBtn.addEventListener('click', (e) => {
    
})