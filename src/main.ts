import * as $ from 'jquery'

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
    }
}

$(function() {
    const app = new Main()
})

