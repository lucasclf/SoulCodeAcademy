export class Patient{
    constructor(
        public id?: number,
        public name?: string,
        public age?: string,
        public cpf?: string,
        public priority?: number,
        public attend?: boolean,
        public active?: boolean
    ) {

    }
}