export class Customer {
    constructor(
        public id: number | null,
        public name: string,
        public email: string,
        public age: number,
        public source: string
    ){}
}