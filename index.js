// const newElement = document.createElement('div')
// document.body.append(newElement)

// document.body.append(element)

// const ul = document.createElement('ul');
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li')
//     li.textContent = (i + 1).toString();
//     ul.append(li)
// }
// createElement.append(ul)

let main = document.querySelector('main#main') //found a <main> tag with id of 'main' and removed it
main.remove()

const newHeader = document.createElement('h1') //created an element <h1> and assigned it a variable newHeader. Gave it an id of victory
newHeader.id = 'victory'
newHeader.textContent = 'Kameron is the champion'

