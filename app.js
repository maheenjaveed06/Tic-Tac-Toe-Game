let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn0 = true;
let newB = document.querySelector("#restart");
let msg = document.querySelector("#msg"); 
let msgC = document.querySelector(".msg-c");

const winP=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4 ,7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetG = ()=>{
    turn0 = true;
    enableB();
    msgC.classList.add("hide");
    
}
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn0===true){
        box.innerText="O";
        turn0= false; 
    }else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    chk();
});
});
const isDraw = () => {
    let allFilled = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });
    if(allFilled){
        msg.innerText = "Game is draw";
        msg.classList.remove("hide");
        disableB();
    }
}
const disableB =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableB = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
    };
const showW =(winner)=>{
msg.innerText = `Congratulations, Winner is ${winner}`;
msgC.classList.remove("hide");
disableB();
}
const chk =()=>{
for(let pattren of winP){
    let pos1Val =boxes[pattren[0]].innerText;
    let pos2Val = boxes[pattren[1]].innerText;
    let pos3Val = boxes[pattren[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val=== pos2Val && pos2Val === pos3Val){
        console.log("Winner " ,pos1Val);
        showW(pos1Val);
        return;
    }
}
}
isDraw();
};
newB.addEventListener("click", resetG);
reset.addEventListener("click", resetG);