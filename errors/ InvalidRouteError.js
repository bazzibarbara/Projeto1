/**
 * O parâmetro passado não atende aos requerimentos exigidos.
 */
class InvalidRouteError extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'InvalidRouteError';
    }
}
  
module.exports = InvalidRouteError;