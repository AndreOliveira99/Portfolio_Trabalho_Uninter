/* The following code makes the scroll smooth when clicking on anchor links,
    it also ajust the scroll position to the top of the section, considering 
    the fixed menu height. */

document.querySelectorAll('a[href^="#"]').forEach(anchorLink => {
    anchorLink.addEventListener('click', function (e) {
        e.preventDefault()

        // Get the section element
        const sectionId = this.getAttribute('href').substring(1)
        const sectionElement = document.getElementById(sectionId)

        // Calculates the scroll position considering the fixed menu height
        const menuHeight = document.getElementById('menu').offsetHeight
        const elementPosition = sectionElement.offsetTop
        const offsetPosition = elementPosition - menuHeight

        // Scrolls to the section
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})