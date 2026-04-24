const container = document.createElement("div")
document.body.append(container)

container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.width = "960px";
container.style.height = "960px";
container.style.border = "2px solid red";

const reset = document.createElement("button")
reset.innerText ="RESET"
document.body.append(reset)


 
let gridSize = prompt("how many boxes per row should the grid have?")
if(gridSize > 100){
    let gridSize = prompt("how many boxes per row should the grid have? Please input a value less than 100 ;)")
}
 



 let squareSize = 100/gridSize

 
    for(i=0; i<(gridSize * gridSize); i++){
        const div = document.createElement("div")
        
        div.style.flex = `0 0 ${squareSize}%`
        div.style.backgroundColor = "lightblue"
        div.style.border = "0.1px solid black";
        div.style.height = `${squareSize}%`;
        div.style.boxSizing ="border-box"

        div.addEventListener( 'mouseenter',(e)=>{
            div.style.backgroundColor = "darkblue"
        })

        div.addEventListener( 'mouseleave',(e)=>{
            div.style.backgroundColor = "blue"
        })

        reset.addEventListener("click", (e)=>{
        div.style.backgroundColor = "lightblue"
        })
        
        container.append(div)
    }
        






