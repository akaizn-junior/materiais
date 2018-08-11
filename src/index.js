//import the components
import barraDeProgresso from '../barra_de_progresso/bdp.js';
import blocoDeCodigo from '../bloco_de_codigo/bdc.js';

/**
 * Objectivos - Componentes a caminho e completos.
 *
 * [x] Barra de progresso
 * []  Foto de perfil redonda
 * []  Acordiao
 * []  Banner
 * [x] Bloco de codigo
 * []  Calendario
 */

export default function materiais() {
    /**
     * barraDeProgresso
     * Cria uma barra de progresso de acordo a dados passado a um elemento com classes 'mat bdp'
     * @author Simao Nziaka
     * @version 0.0.1
     */
    barraDeProgresso();

    /**
     * blocoDeCodigo
     * Pega uma div com codigo e torna aquilo num bloco de codigo com numero de linhas
     * @author Simao Nziaka
     * @version 0.0.1
     */
    blocoDeCodigo();
}

//run automatically
materiais();

//for commonjs systems
module.exports = materiais;
