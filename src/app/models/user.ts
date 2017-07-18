export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role:string;
    public state?: string;

    constructor
        (
        id?: number,
        firstName?: string,
        lastName?: string,
        email?: string,
        password?: string,
        role?: string,
        state?: string
        ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.state = state;
    }
}
