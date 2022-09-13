const state = [
    {
        id: '1',
        name: 'Shopping List',
        creationDate: 'April 20, 2022',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '',
        isActive: true
    },
    {
        id: '2',
        name: 'Shopping List',
        creationDate: 'April 20, 2022',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '',
        isActive: true
    },
]

function generateNotesList(list) {
    const tableData = list.map((value) => {
        return (
            `<tr>
                <td>${value.name}</td>
                <td>${value.creationDate}</td>
                <td>${value.category}</td>
                <td>${value.content}</td>
                <td>${value.dates}</td>
            </tr>`
        )
    })
    const tableBody = document.getElementById('notesList')
    tableBody.innerHTML = tableData
}

generateNotesList(state)