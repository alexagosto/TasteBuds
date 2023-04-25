const app = Vue.createApp({
    data() {
        return {
            showPNG: true,
            showSuLi: false,
            showSignUp: false,
            showLogIn: false,
            showHome: false,
            showRecipes: false,
            showProfile: false,
            showOptions: false,
            showFeed: false,
            showYourRecipes: false
        }
    },
    methods: {
        togglePNG(){
            this.showPNG = !this.showPNG,
            this.showSuLi = !this.showSuLi
        },
        toggleSuLi(){
            this.showHome = !this.showHome,
            this.showLogIn = false,
            this.showSignUp = false,
            this.showSuLi = !this.showSuLi
        },
        toggleSignUp(){
            this.showSignUp = !this.showSignUp,
            this.showLogIn = false
        },
        toggleLogIn(){
            this.showLogIn = !this.showLogIn,
            this.showSignUp = false
        },
        toggleYourRecipes(){
            this.showYourRecipes = !this.showYourRecipes,
            this.showHome = !this.showHome
        },
        toggleProfile(){
            this.showProfile = !this.showProfile
        },
        toggleRecipes(){
            this.showRecipes =!this.showRecipes
        },
        toggleFeed(){
            this.showFeed = !this.showFeed
        },
        toggleOptions(){
            this.showOptions = !this.showOptions
        }
    }
})

app.mount('#app')