import { Adresse } from './model/adresse';
import * as $ from 'jquery'

// Import Contact model
import { Contact } from './model/contact'

import './scss/main.scss'

/**
 * @name Main
 * @author IDea Factory - Juil. 2020 - jean-luc.a@ideafactory.fr
 * @version 1.0.0
 * @abstract Main application entry point
 */
class Main {
    public constructor() {
        console.log('Application is ready')

        // Create a Contact instance
        const jeanLuc: Contact = new Contact()
        jeanLuc.setNumero(100)
        jeanLuc.setNom('Aubert')
        jeanLuc.setPrenom('Jean-Luc')

        // Create an Adress instance
        const adresse: Adresse = new Adresse()
        adresse.setAdressePostale('12, rue du code\n31000 Toulouse')

        // Set the address for jeanLuc
        jeanLuc.addAdresse(adresse)
    }
}

$(function() {
    const app = new Main()
})

