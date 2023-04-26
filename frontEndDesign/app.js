const app = Vue.createApp({
    data() {
        return {
            Name: null,
            Username: "",
            Email: "",
            UsernameOrEmail: "", //temp
            Password: "",
            InputYear: null, 
            Age: 0,
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
            this.Age = 2023-this.InputYear;
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
            this.Name = "",
            this.InputYear = null,
            this.Username = "",
            this.Email = "",
            this.Password = "",
            this.UsernameOrEmail = ""
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