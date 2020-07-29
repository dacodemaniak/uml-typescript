import { Telephone } from './telephone';
import { Email } from './e-mail';
import { Adresse } from "./adresse";

import * as $ from 'jquery'

/**
 * @name Contact
 * @author ADRAR - Juil. 2020
 * @version 1.0.0
 * @abstract Contact model from UML design
 */
export class Contact {
    /**
     * @var Number
     * 
     * N° du contact
     */
    private numero: Number;

    /**
     * @var String
     * 
     * Nom du contact
     */
    protected nom: String;

    /**
     * @var String
     * 
     * Prénom du contact
     */
    protected prenom: String;

    /**
     * @var Adresse[] Adresses du contact
     */
    private adresses: Adresse[]

    /**
     * @var Email[]
     * @see Email
     */
    private emails: Email[];

    /**
     * @var Telephone[]
     */
    private phones: Telephone[]

    public constructor() {
        this.adresses = [] // Initialise le tableau des adresses de ce (this) contact
        this.emails = []; // Sets emails array of (this) ce contact
        this.phones = []; // Sets phones array
    }

    /**
     * @param Number numéro à affecter à l'objet courant
     * @return Contact Retourne l'objet courant
     */
    public setNumero(numero: Number): Contact {
        if (numero >= 100) {
           this.numero = numero // Range le param numero dans l'attribut numero de CE contact
           return this
        }
            
        throw new Error('Contact cannot have number lower than 100') // Raised an exception
    }

    /**
     * @param String Nom du contact
     * @return Contact
     */
    public setNom(nom: String): Contact {
        this.nom = nom.toUpperCase()
        return this
    }

    /**
     * @return String
     */
    public getNom(): string {
        return this.nom.toString()
    }

    /**
     * @param String Prénom du contact
     * @return Contact
     */
    public setPrenom(prenom: String): Contact {
        this.prenom = prenom
        return this
    }

    public definirPrenom(prenom: String): Contact {
        this.prenom = prenom

        return this
    }

    public getPrenom(): string {
        return this.prenom.toString()
    }

    public getAvatar(): JQuery {
        const content: JQuery = $('<li>')
            .addClass('collection-item')
            .addClass('avatar')
        const avatar: JQuery = $('<i>')
        avatar.html((this.prenom[0] + this.nom[0]).toUpperCase())
        avatar
            .addClass('circle')
            .addClass('avatar')
            .addClass('light')
            .css('margin-right', '.3em')

        content
            .append(avatar)
            .append('<span class="title">' + this.prenom.toString() + ' ' + this.nom.toString() + "</span>")

        const address: JQuery = $('<ul>') // Equiv createElement('ul')
        this.adresses.forEach((adresse) => {
            const addressLi: JQuery = $('<li>')
            addressLi.html(adresse.getAdressePostale()) // Equiv textContent()
            addressLi.appendTo(address) // JS Natif : appendChild
        })
        
        content.append(address)

        return content
    }

    /**
     * @param Adresse - Adresse à ajouter au contact
     * @return Contact
     */
    public addAdresse(adresse: Adresse): Contact {
        this.adresses.push(adresse)

        return this
    }

    public addEmail(email: Email): Contact {
        this.emails.push(email)

        return this
    }

    public addPhone(phone: Telephone): Contact {
        this.phones.push(phone)

        return this
    }
}