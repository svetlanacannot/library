class Auth {
    constructor(){
        this.name = null;
        this.role = null;
        this.id = null;
        this.photo = null;
        this.isLogged = false;
    }

    login(id, name, role, photo){
        this.isLogged = true;
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.role = role;
    }

    logout(){
        this.isLogged = false;
        this.id = null;
        this.name = null;
        this.photo = null;
        this.role = null;
    }

    isAuthenticated(){
        return this.isLogged;
    }
}

export default new Auth()