const container = document.querySelector('.container')
// let cellSize = 40
const rows = Math.floor(container.clientHeight/45);
const cols = Math.floor(container.clientWidth/45);
console.log("Cloumns = "+cols);

const totalCells = rows*cols;

for(let i=0; i<totalCells; i++)
{
    let cell = document.createElement('div')
    cell.classList.add('cell')
    container.appendChild(cell);
}
const cells = document.querySelectorAll('.cell')

container.addEventListener('mousemove', (e) => {
    const cell = e.target;
    if(!cell.classList.contains('cell')) return;
    
    const index = [...cells].indexOf(cell);
    cell.classList.add("active");
    
    if(!((index+1)%cols == 0))
    {
        cells[index+1].classList.add("fade")
        
    }
    if(!(index%cols == 0))
    {
        cells[index-1].classList.add("fade")
        
    }
    if(index-cols >= 0){
        cells[index-cols].classList.add("fade")
    }
    if(index+cols <= totalCells){
        cells[index+cols].classList.add("fade")
    }
    
    
    setTimeout(() => {
        cell.classList.remove("active");
        cells[index-1].classList.remove("fade")
        cells[index+1].classList.remove("fade")
        cells[index-cols].classList.remove("fade")
        cells[index+cols].classList.remove("fade")
        
    },400)

    
})

