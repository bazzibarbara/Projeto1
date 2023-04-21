const router = require('express').Router();
const statusCodes = require('../../constants/statusCodes');
const InvalidParamError = require('../../errors/InvalidParamError');

function errorHandler(error, req, res, /*next*/){
    let message = error.message;
    let status = statusCodes.internalServerError;
  
    if (error instanceof InvalidParamError) {
        status = statusCodes.badRequest;
    }

    console.log(error);
    res.status(status).json(message);
    
    // if(error.message == '401 Unauthorized Error'){
    //     /* ... tratamento de erros especifico para erros do tipo B ... */
    //     res.status(401);
    //     res.json('informações de login incorretas');
    //     console.log('Error status: ', error.status);
    //     console.log('Message: ', error.message);
    // }
    // if(error.message == '403 Forbidden Error'){
    //     /* ... tratamento de erros especifico para erros do tipo C ... */
    //     res.status(403);
    //     res.json('sem permissão para acessar o endereço');
    //     console.log('Error status: ', error.status);
    //     console.log('Message: ', error.message);
    // }
    // if(error.message == '404 Not Found Error'){
    //     /* ... tratamento de erros especifico para erros do tipo C ... */
    //     res.status(404);
    //     res.json('endereço não pode ser encontrado');
    //     console.log('Error status: ', error.status);
    //     console.log('Message: ', error.message);
    // }
    // if(error.message == '500 Internal Server Error'){
    //     /* ... tratamento de erros especifico para erros do tipo C ... */
    //     res.status(500);
    //     res.json('backend error');
    //     console.log('Error status: ', error.status);
    //     console.log('Message: ', error.message);
    // }
}

router.use(errorHandler);