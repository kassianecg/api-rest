import { Request, Response, request } from 'express';
import { AppError } from '../utils/app-error';
import { z } from 'zod';

class ProductsController {
/**
 * index - GRT para listar vários registros
 * show - GET para exibir um registro específico
 * create - POST para criar um registro
 * update - PUT para atualizar um registro
 * delete - DELETE para remover um registro
 */


index(request: Request, response: Response) {
    const { page, limit } = request.query
  //         /products?page=1&limit=10
    response.send(`Pagina ${page} de ${limit}`)
}

create(request: Request, response: Response) {
   const bodySchema = z.object ({
    name: z.string( { required_error: "O nome é obrigatório!!!" }).trim().min(6, { message: "O nome deve ter pelo menos 6 caracteres!!!" }),
    price: z.number({ required_error: "O preço é obrigatório!!!" }).positive({ message: "O preço deve ser maior que zero!!!" }) // .nullish(), pode ser nulo ou undefined
   })

  const { name, price } = bodySchema.parse(request.body)

   /*
   if (!name) {
    throw new AppError("O nome é obrigatório!!!", 401)
   }

   if (name.trim().length < 6) {
    throw new AppError("O nome deve ter pelo menos 6 caracteres!!!", 401)
   }

   if (!price) {
    throw new AppError("O preço é obrigatório!!!", 401)
   }

   if (price <= 0) {
    throw new AppError("O preço deve ser maior que zero!!!", 401)
   }

*/

 //  throw new Error("Erro ao criar produto")
 // throw new AppError("Erro ao criar produto!!!")

 // response.send(`Produto ${name} com preço ${price} criado com sucesso!`)
 response.status(201).json({name, price, user_id: request.user_id})
}
}

export { ProductsController }

