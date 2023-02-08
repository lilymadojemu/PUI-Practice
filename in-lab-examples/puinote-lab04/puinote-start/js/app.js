class notecard{

    constructor(imageURL,title,body, elementID){
        console.log('Creating a new notecard!!!')
        // Can test in developer console with const NoteCardOne = new notecard('test-image','test-title','test-body')
        // The this keyword refers to the notecard object that the constructor function creates.
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;

        this.element = document.querySelector(elementID);

        this.updateElement();

        const btnDelete = this.element.querySelector('.icon-delete');
        btnDelete.onclick = this.deleteNote;
    }

    updateElement() {
        console.log('We updating that HTML!');

        const noteImageElement = this.element.querySelector('.notecard-thumbnail');
        const noteTitleElement = this.element.querySelector('.note-title');
        const noteBodyElement = this.element.querySelector('.note-body');

        console.log(noteImageElement);
        noteImageElement.src = this.noteImageURL;
        noteTitleElement.innerText = this.noteTitle;
        noteBodyElement.innerText = this.noteBody;

    }

    deleteNote() {
        console.log('DELETED');
        console.log(this);
        // this.element.remove();
        const noteCardElement = this.closest('.notecard');
        noteCardElement.remove();

    }
}

const noteCardOne = new notecard (
    'assets/warhol-butterfly.png',
    'Butterfly 1st Card',
    'body text for butterflies',
    
    // Corresponding Id
    '#notecard-one'
)

const noteCardTwo = new notecard (
    'assets/warhol-frog.png',
    'Frog 2nd Card',
    'body text for frogs',

    '#notecard-two'


)

const noteCardThree = new notecard (
    'assets/warhol-tiger.png',
    'Tiger 3rd Card',
    'body text for tigers',

    '#notecard-three'
)
