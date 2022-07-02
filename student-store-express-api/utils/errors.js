class ExpressError extends Error {
    constructor (mesage, status) {
        super();
        this.message = mesage;
        this.status = status;
    }
}

class BadRequestError extends ExpressError {
    constructor (mesage){
        super(mesage || 'Bad Request', 400)
    }
}

class NotFoundError extends ExpressError {
    constructor (mesage){
        super(mesage || 'Not Found', 400)
    }
}

module.exports = {
    ExpressError, 
    BadRequestError, 
    NotFoundError}