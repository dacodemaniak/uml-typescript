import { FixedPhone } from './model/fixed-phone';
import { CellPhone } from './model/cell-phone';
import { Telephone } from './model/telephone';
import { Email } from './model/e-mail';
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

        const contacts: Contact[] = []

        // Create a Contact instance
        const jeanLuc: Contact = new Contact()
        jeanLuc.setNumero(100)
        jeanLuc.setNom('Aubert')
        jeanLuc.setPrenom('Jean-Luc')

        const myEmail = new Email()
        myEmail.setEmail('jla@truc.com')
        jeanLuc.addEmail(myEmail) // Add an email to jeanluc object

        const myCellPhone: CellPhone = new CellPhone()
        myCellPhone.setPhoneNumber('0623568974')

        jeanLuc.addPhone(myCellPhone) // Add a phone for jeanluc Contact object

        const fixedPhone: FixedPhone = new FixedPhone()
        fixedPhone.setPhoneNumber('0563214578')

        jeanLuc.addPhone(fixedPhone) // Add a fixed phone number to jeanluc Contact object

        const undefinedTypePhone: Telephone = new Telephone()
        undefinedTypePhone.setPhoneNumber('x-files number')
        

        // Create an Adress instance
        const chezMoi: Adresse = new Adresse()
        chezMoi.setAdressePostale('12, rue du code\n31000 Toulouse')

        // Create second address... jeanLuc is rich !
        const mySweetHome: Adresse = new Adresse()
        mySweetHome.setAdressePostale('rue de la plage\nCopacabana')

        // Add the address for jeanLuc
        jeanLuc.addAdresse(chezMoi)
        jeanLuc.addAdresse(mySweetHome)

        // Add contact to contact list
        contacts.push(jeanLuc)

        // Define Trudy Latte
        const trudy: Contact = new Contact()
        trudy
            .setNumero(101)
            .setNom('Latte')
            .setPrenom('Trudy')

        // Sets a new address
        const trudysHome: Adresse = new Adresse()
        trudysHome.setAdressePostale('Le fond du trou\nBâle\nSuisse')
        trudy.addAdresse(trudysHome)

        contacts.push(trudy)

        // Afficher les informations des contacts
        const uiCollection: JQuery = ($('<ul>'))
            .addClass('collection')

        for (let contact of contacts) {
            const avatar: JQuery = contact.getAvatar()
            // Add secondary content
            const secondaryContent: JQuery = $('<a>')
                .addClass('secondary-content')
            const icon: JQuery = $('<i>')
                .addClass('material-icons')
                .html('face')
                .appendTo(secondaryContent)
            avatar.append(secondaryContent)
            uiCollection.append(avatar)
        }
        $('body').append(uiCollection)
    }
}

$(function() {
    const app = new Main()
})

