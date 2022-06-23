


//adding new items//
//let sheild = document.createElement('img')
//sheild.src = 'assets/sheild.png'
//sheild.style.position = 'fixed'
//sheild.style.left = '165px'
//sheild.style.bottom = '185px'
//document.body.append(sheild)

//let staff = document.createElement('img')
//staff.src = 'assets/staff.png'
//staff.style.position = 'fixed'
//staff.style.left = '600px'
//staff.style.bottom = '100px'
//document.body.append(staff)

//let sword = document.createElement('img')
//sword.src = 'assets/sword.png'
//sword.style.position = 'fixed'
//sword.style.left = '500px'
//sword.style.bottom = '405px'
//document.body.append(sword)





function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}
//background imaging//
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

//invoking images that will not move. Left , Bottom px in order//
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
//below associated with the double click function//
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)