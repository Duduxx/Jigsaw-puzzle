// Enable drag functionality for all 9 jigsaw pieces
dragElement(document.getElementById('jigsaw1'));
dragElement(document.getElementById('jigsaw2'));
dragElement(document.getElementById('jigsaw3'));
dragElement(document.getElementById('jigsaw4'));
dragElement(document.getElementById('jigsaw5'));
dragElement(document.getElementById('jigsaw6'));
dragElement(document.getElementById('jigsaw7'));
dragElement(document.getElementById('jigsaw8'));
dragElement(document.getElementById('jigsaw9'));


function givePieces(){
    let jigsawImg = document.getElementsByClassName("jigsaw");
    let jigsawPiece = document.getElementsByClassName("jigsaw-piece");
    let folder = Math.floor(Math.random() * 3) + 1;

    let top = 0;
    let left = 0;

    for(let i = 0; i < jigsawImg.length; i++){
        jigsawImg[i].src = `./images/${folder}/jigsaw${i+1}.png`;

        top = Math.floor(Math.random() * 40) + '%';
        left = Math.floor(Math.random() * 30) + '%';

        //Give them a random offset within piece-container
        jigsawPiece[i].style.top = top;
        jigsawImg[i].style.top = top;
        jigsawPiece[i].style.left = left;
        jigsawImg[i].style.left = left;
    }
}

function dragElement(terrariumElement){
    let pos1 = 0,   //Prev mouse X pos
        pos2 = 0,   //Prev mouse Y pos
        pos3 = 0,   //Current mouse X pos
        pos4 = 0;   //Current mouse Y pos

    //Initial drag event listener
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e){
        //Prevent default browser behavior
        e.preventDefault();

        //Initial mouse/touch positions
        pos3 = e.clientX;
        pos4 = e.clientY;

        //Event listeners for the dragging porcess
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e){
        //Calculate the distance moved since the last event
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        
        //Update the current position tracking
        pos3 = e.clientX;
        pos4 = e.clientY;

        //Apply the movment to the element's position
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag(e){
        //Remove the document-level event listeners
        document.onpointerup = null;
        document.onpointermove = null;
    }

}