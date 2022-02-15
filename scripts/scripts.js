document.addEventListener('DOMContentLoaded', (e) => {
    
    /* Hiding nav-items onclick */
    const navItems = document.querySelectorAll('.nav-link')
    const navbarCollapse = document.querySelector('#navbar_supported_content')


    navItems.forEach((element) => {
        element.addEventListener('click', () => {
            navbarCollapse.classList.remove('show')
        })
    })

    




});