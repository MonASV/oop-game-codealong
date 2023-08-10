class Player {
    constructor(){
        this.domElement = null;
        this.positionX = 40;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;

        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement("div");
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX +"vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
    moveLeft(){
        this.positionX--;//modify info
        this.domElement.style.left = this.positionX +"vw"; //update user interface
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX +"vw";    
    }
}

const player = new Player();


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }

});