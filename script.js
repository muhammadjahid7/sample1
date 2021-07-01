
const tabContainer = document.querySelector('.operations__tab-container')
const tabComponents = document.querySelectorAll('.operations__tab')
const tabContents = document.querySelectorAll('.operations__content')
console.log(tabContents);
tabContainer.addEventListener('click' , function(ele){
    if(ele.target.classList.contains('operations__tab')){
        tabComponents.forEach((co) => co.classList.remove('operations__tab--active'))
        ele.target.classList.add('operations__tab--active')

        const tabdata = ele.target.dataset.tab
        // console.log(tabdata);
        tabContents.forEach((el) => el.classList.remove('operations__content--active'))
        const activeContent = document.querySelector(`.operations__content--${tabdata}`)
        console.log(activeContent);
        activeContent.classList.add('operations__content--active')
    }
})