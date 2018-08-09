//import the components
import barraDeProgresso from '../barra_de_progresso/bdp.js';

export default function materiais() {
    /**
     * barraDeProgresso
     * Cria uma barra de progresso de acordo a dados passado a um elemento com classes 'mat bdp'
     * @author Simao Nziaka
     */
    barraDeProgresso();
}

//run automatically
materiais();

//for commonjs systems
module.exports = materiais;
