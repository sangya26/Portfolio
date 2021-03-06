let themeDots = document.getElementsByClassName('themeDot')
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

for(let i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if(this.mode == 'light'){
        document.getElementById('themeStyle').href = 'style.css'
    }
    if(this.mode == 'blue'){
        document.getElementById('themeStyle').href = "blue.css"
    }
    if(this.mode == 'green'){
        document.getElementById('themeStyle').href = 'green.css'
    }
    if(this.mode == 'purple'){
        document.getElementById('themeStyle').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)
}