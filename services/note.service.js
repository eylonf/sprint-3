import { storageService } from './storage.service.js'

export const noteService = {
    query,
}

const STORAGE_KEY = 'noteDB'

const gNotes = [
    {
     id: "n101",
     type: "note-txt",
     isPinned: true,
     info: {
     txt: "Fullstack Me Baby!"
     }
    },
    {
     id: "n102",
     type: "note-img",
     info: {
     url: "http://some-img/me",
     title: "Bobi and Me"
     },
     style: {
     backgroundColor: "#00d"
     }
    },
    {
     id: "n103",
     type: "note-todos",
     info: {
     label: "Get my stuff together",
     todos: [
     { txt: "Driving liscence", doneAt: null },
     { txt: "Coding power", doneAt: 187111111 }
     ]
     }
    }
    ];


    _createNotes()

    function query(filterBy=null) {
        const notes = _loadNotesFromStorage()
        if (!filterBy) return Promise.resolve(notes) 
    }

    function _createNotes(){
        let notes = _loadNotesFromStorage()
        if (!notes || !notes.length) {
            notes = gNotes
        }
        _saveNotesToStorage(notes)
    }

    
function _saveNotesToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, notes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}