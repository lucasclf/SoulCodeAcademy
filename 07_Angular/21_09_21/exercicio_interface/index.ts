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

    constructor(firstName: string, public lastName: string, public username: string, public email: string, public password: string, public cpf: string, public contact: string, public isAdmin: boolean) {
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

}

let lucas = new User("Lucas", "Coquenão", "lucas_cqn", "teste@teste.com", "teste", "111.111.111-11", "(11)-11111-1111", true)

console.log(lucas.escreverPropriedades())