

module.exports = class ServiceController{
    async getALL(request, response){

        const msg = {
            message: 'Resposta padrão para teste de rota',
            data: {
              example: 'valor de exemplo'
            }
          };
        
          response.json(msg);
    }

    async create(request, response){
        const msg = {
            message: 'Resposta padrão para teste de rota',
            data: {
              example: 'valor de exemplo'
            }
          };
        
          response.json(msg);
    } 
}