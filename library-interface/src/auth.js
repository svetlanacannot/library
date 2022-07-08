class Auth {
    constructor(){
        this.name = null;
        this.surname = null;
        this.patronymic = null;
        this.role = null;
        this.id = null;
        this.photo = null;
        this.phone = null;
        this.email = null;
        this.date = null;
        this.isLogged = false;
    }

    login(user){
        this.isLogged = true;
        this.id = user.id;
        this.name = user.name;
        this.surname = user.surname;
        this.patronymic = user.patronymic;
        if(user.photo == null){
            this.photo = 'placeholder.png'
        } else {
            this.photo = user.photo;
        }
        this.role = user.role;
        this.phone = user.phone;
        this.email = user.email;
        this.date = user.date;
    }

    logout(){
        this.isLogged = false;
        this.id = null;
        this.name = null;
        this.surname = null;
        this.patronymic = null;
        this.photo = null;
        this.role = null;
        this.phone = null;
        this.email = null;
        this.date = null;
    }

    isAuthenticated(){
        return this.isLogged;
    }
}

export default new Auth()