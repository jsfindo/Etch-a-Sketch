const container = document.createElement("div")
document.append(container)

const div = document.createElement("div")
function grid(){
    for(i=0; i<(16*16-1); i++)
        document.container.appendChild(div)
}

grid

container.style.display = "flex"
container.style.flexWrap = "wrap"

div.style.flex = "0 0 6.25%"
div.style.backgroundColor = "blue"
