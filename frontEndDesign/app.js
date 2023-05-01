const app = Vue.createApp({
    data() {
        return {
            name: null,
            username: null,
            email: null,
            usernameOrEmail: null, //temp
            password: null,
            inputYear: null, 
            age: 0,
            cookingExperience: null,
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
        calcAge() {
            this.age = 2023-this.inputYear;
        },
        togglePNG(){
            this.showPNG = !this.showPNG,
            this.showSuLi = !this.showSuLi
        },
        toggleSuLi(){
            this.calcAge(),
            this.showHome = !this.showHome,
            this.showLogIn = false,
            this.showSignUp = false,
            this.showSuLi = !this.showSuLi
        },
        toggleLogOut(){
            this.showHome = !this.showHome,
            this.showLogIn = false,
            this.showSignUp = false,
            this.showSuLi = !this.showSuLi,
            this.showHome = false,
            this.showProfile = false,
            this.showRecipes = false,
            this.showFeed = false,
            this.showOptions = false
            this.name = null,
            this.inputYear = null,
            this.username = null,
            this.email = null,
            this.password = null,
            this.usernameOrEmail = null,
            this.cookingExperience = null
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