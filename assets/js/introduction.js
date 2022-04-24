const tooltipElements = document.querySelectorAll('.tooltip')

tooltipElements.forEach(function(span) {

    const aElement = document.createElement('a')
    const spanElement = document.createElement('span')

    // ----------------- a attributes created ------------------------
    aElement.innerHTML = span.innerText
    aElement.href = span.dataset.url
    span.innerHTML = ''
    // --------------------------------------------------------------

    // ----------------- span attributes created ---------------------
    if (span.dataset.tooltipType === 'image') {

        spanElement.classList.add('tooltip__box', 'tooltip__box--image')

        const imgElement = document.createElement('img')
        imgElement.classList.add('tooltip__image')
        imgElement.src = span.dataset.tooltipContent
        spanElement.appendChild(imgElement)

    } else {

        spanElement.classList.add('tooltip__box', 'tooltip__box--text')
        spanElement.innerHTML = span.dataset.tooltipContent

    }
    // --------------------------------------------------------------

    span.appendChild(aElement)
    span.appendChild(spanElement)

})