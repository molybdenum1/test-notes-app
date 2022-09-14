let state = [
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
    isActive: false,
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
    isActive: false,
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
                <td>
                  <button class='delete' onclick="remove(${value.id})">
                    <img src='assets/dlt.png' alt='delete'>
                  </button>
                  <button id='edit' onclick="edit(${value.id})">
                    <img src='assets/edit.png' alt='edit'>
                  </button>
                  <button class='arch' onclick="archieve(${value.id})">
                    <img src='assets/arch.png' alt='archieve'>
                  </button>
                </td>
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
                <table>
                  <thead>
                    <td><h3>${el[0].category}</h3></td>
                    <td><h3>${el.length}</h3></td>
                  </thead>
                    `+el.map(one =>`
                      <tbody>
                        <td>${one.name}</td>
                        <td>${one.content}</td>
                        <td>
                          <button>
                            <img onclick="unarchive(${one.id})" src='assets/arch.png' alt='unarch'>
                          </button>
                        </td>
                      </tbody>
                    `) + ` 
                </table>      
              </tr>`;
    });
  const tableBody = document.getElementById("archList");
  tableBody.innerHTML = tableData;
}
// generateNotesList(state);
// generateArchivedList(state);
function start() {
  generateNotesList(state);
  generateArchivedList(state);
}
start()
// MODAL WINDOW

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

////
////Adding note functionality
let addBtn = document.getElementById("submitBTN");
let EditBtn = document.getElementById("submitEdit");
EditBtn.style.display = "none";
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let note = {};
  note.id = Math.floor(Math.random() * 100);
  note.name = document.getElementById("FormControlInput1").value;
  note.creationDate = document.getElementById("FormControlInput2").value;
  note.category = document.getElementById("FormControlSelect").value;
  note.content = document.getElementById("FormControlInput3").value;
  note.dates = document.getElementById("FormControlInput4").value
    ? document.getElementById("FormControlInput4").value
    : "";
  note.isActive = true;
  state.push(note);
  modal.style.display = "none";
  document.forms["form"].reset();
  generateNotesList(state);
});

///
/// DELETE El
function remove(id) {
  state = state.filter((obj) => obj.id != id);
  generateNotesList(state);
}

//
// ARCHIEVATE El
function archieve(id) {
  let objState = state.filter((obj) => obj.id == id);
  state = state.filter((obj) => obj.id != id);
  objState[0].isActive = false;
  state.push(objState[0]);
  generateArchivedList(state);
  generateNotesList(state);
}
function unarchive(id) {
  let objState = state.filter((obj) => obj.id == id);
  objState[0].isActive = true;
  state = state.filter((obj) => obj.id != id);
  state.push(objState[0]);
  generateArchivedList(state);
  generateNotesList(state);
}

///
///editting el
function edit(id) {
  modal.style.display = "block";
  let objState = state.filter((obj) => obj.id == id);
  state = state.filter((obj) => obj.id != id);
  document.getElementById("FormControlInput1").value = objState[0].name;
  document.getElementById("FormControlInput2").value = objState[0].creationDate;
  document.getElementById("FormControlSelect").value = objState[0].category;
  document.getElementById("FormControlInput3").value = objState[0].content;
  document.getElementById("FormControlInput4").value = objState[0].dates;
  EditBtn.style.display = "none";
  addBtn.innerText = "Edit";
  EditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let note = {};
    note.id = objState[0].id;
    note.name = document.getElementById("FormControlInput1").value;
    note.creationDate = document.getElementById("FormControlInput2").value;
    note.category = document.getElementById("FormControlSelect").value;
    note.content = document.getElementById("FormControlInput3").value;
    note.dates = document.getElementById("FormControlInput4").value
      ? document.getElementById("FormControlInput4").value
      : "";
    note.isActive = true;
    state.push(note);
    modal.style.display = "none";
    document.forms["form"].reset();
  });
}
