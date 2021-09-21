interface UserProps{
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    cpf: string
    contact: string
    isAdmin: boolean
}

class User implements UserProps{

    constructor(public firstName: string, public lastName: string, public username: string, public email: string, public password: string, public cpf: string, public contact: string, public isAdmin: boolean) {
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.email = email
        this.password = password
        this.cpf = cpf
        this.contact = contact
        this.isAdmin = isAdmin
    }

    escreverPropriedades(){
        console.log(this.firstName)
        console.log(this.lastName)
        console.log(this.username)
        console.log(this.email)
        console.log(this.password)
        console.log(this.cpf)
        console.log(this.contact)
        console.log(this.isAdmin)
    }

    setFirstName(firstName: string){
        this.firstName = firstName;
    }

    setLastName(lastName: string){
        this.lastName = lastName;
    }

    setUsername(username: string){
        this.username = username;
    }

    setEmail(email: string){
        this.email = email;
    }

    setPassword(password: string){
        this.password = password;
    }

    setCpf(cpf: string){
        this.cpf = cpf;
    }

    setContact(contact: string){
        this.contact = contact;
    }

    setIsAdmin(isAdmin: boolean){
        this.isAdmin = isAdmin;
    }

    setAllInfo(firstName: string, lastName: string, username: string, email: string, password: string, cpf: string, contact: string, isAdmin: boolean){
        this.setFirstName(firstName)
        this.setLastName(lastName)
        this.setUsername(username)
        this.setEmail(email)
        this.setPassword(password)
        this.setCpf(cpf)
        this.setContact(contact)
        this.setIsAdmin(isAdmin)   
    }
}

let lucas = new User("", "", "n", "", "", "", "", false)

lucas.setAllInfo("Lucas", "Coquenão", "lucas_cqn", "teste@a.com", "teste", "111.111.111-11", "(11)111111-1111", true)

console.log(lucas.escreverPropriedades())