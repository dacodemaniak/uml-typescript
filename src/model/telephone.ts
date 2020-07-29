/**
 * @name Telephone
 * @abstract Generalization of all phone number
 */
export abstract class Telephone {
    /**
     * @var string Phone number
     */
    protected phoneNumber: string

    public setPhoneNumber(phoneNumber: string): Telephone {
        // @todo Check for phoneNumber length and pattern (Dette Technique)
        this.phoneNumber = phoneNumber
        return this
    }

    public getPhoneNumber(): string {
        return this.phoneNumber
    }
}