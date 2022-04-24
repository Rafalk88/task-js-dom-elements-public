const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];

// -------------------------- Problem 2 ---------------------------

// ---------------------- Main list created -----------------------

const listSection = document.querySelector('.article__list')
const ulElement = document.createElement('ul')

listSection.appendChild(ulElement)

list.forEach(function(object) {

    if (object.parentId === null) {
        const liElement = document.createElement('li')
        const aElement = document.createElement('a')

        liElement.dataset.id = object.id
        aElement.href = object.link
        aElement.innerHTML = object.text
        
        ulElement.appendChild(liElement)
        liElement.appendChild(aElement)
    }

})

// -----------------------------------------------------------------

// ----------------------- Sub list created ------------------------

const menu = document.querySelectorAll('li')

menu.forEach(function(item) {

    const id = Number(item.dataset.id)

    const children = list.filter(function(element) {

        return element.parentId === id
    
    })

    if (children.length) {

        const subUlElement = document.createElement('ul')
        item.appendChild(subUlElement)

        children.forEach(function(object) {

            const subLiElement = document.createElement('li')
            const subAElement = document.createElement('a')

            subAElement.href = object.link
            subAElement.innerHTML = object.text

            subUlElement.appendChild(subLiElement)
            subLiElement.appendChild(subAElement)

        })

    } 
    
})

// -----------------------------------------------------------------

// -----------------------End of problem 2 ------------------------