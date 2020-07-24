/**
 * @name Adresse
 * @author ADRAR
 * @version 1.0.0
 * @abstract Modèle pour les adresses postales
 */
export class Adresse {
    /**
     * @var String Adresse postale
     */
    protected adressePostale: String

    /**
     * @param String adressePostale - Adresse complète
     * @return Adresse
     */
    public setAdressePostale(adressePostale: String): Adresse {
        this.adressePostale = adressePostale
        return this
    }
}