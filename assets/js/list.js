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



// -----------------------End of problem 2 ------------------------