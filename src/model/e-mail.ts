/**
 * @name Email
 */
export class Email {
    private id: number;

    private email: string;

    public setEmail(email: string): Email {
        // Your logic here
            // Check for email pattern through regex
            const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            // if true, store it
            if (email.match(pattern)) {
                this.email = email
                return this
            }

            throw new Error(`${email} is not a valid email !`)
    }

    public getEmail(): string {
        return this.email
    }
}