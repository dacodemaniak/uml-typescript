import { Adresse } from "./adresse";

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

    public constructor() {
        this.adresses = [] // Initialise le tableau des adresses d'un contact
    }

    /**
     * @param Number numéro à affecter à l'objet courant
     * @return Contact Retourne l'objet courant
     */
    public setNumero(numero: Number): Contact {
        if (numero >= 100) {
           this.numero = numero // Range le param numero dans l'attribut numero
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
     * @param String Prénom du contact
     * @return Contact
     */
    public setPrenom(prenom: String): Contact {
        this.prenom = prenom
        return this
    }

    /**
     * @param Adresse - Adresse à ajouter au contact
     * @return Contact
     */
    public addAdresse(adresse: Adresse): Contact {
        this.adresses.push(adresse)

        return this
    }
}