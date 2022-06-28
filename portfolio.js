const contact = document.querySelector('.navContact')
const resume = document.querySelector('.navResume')
const project = document.querySelector('.navProject')
const main = document.querySelector('.navMain')
const contactPage = document.querySelector('.contact-page')
const mainPage = document.querySelector('.main-page')
const projectPage = document.querySelector('.project-page')
const submit = document.querySelector('.submitButton')

const submitHandler = function() {
    alert('I will reply you shortly!!')
}

const mainHandler = function() {
    mainPage.classList.remove('hide')
    contactPage.classList.add('hide')
    projectPage.classList.add('hide')
}

const contactHandler = function() {
    mainPage.classList.add('hide')
    projectPage.classList.add('hide')
    contactPage.classList.remove('hide')
}

const resumeHandler = function() {
    window.open('https://drive.google.com/file/d/1BjjD6tvf8ZnJjXjIVqqHccm7GYyec8kZ/view?usp=sharing')
}

const projectHandler =function() {
    mainPage.classList.add('hide')
    contactPage.classList.add('hide')
    projectPage.classList.remove('hide')
}

main.addEventListener('click', mainHandler)
contact.addEventListener('click', contactHandler)
resume.addEventListener('click', resumeHandler)
project.addEventListener('click', projectHandler)
submit.addEventListener('click', submitHandler)