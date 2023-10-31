import { Controller, Post, Body } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Post()
  async criarPost(@Body() postData: any) {
    console.log('aqui');
    // Aqui você pode processar os dados recebidos no corpo da solicitação POST
    // A variável "postData" conterá os dados enviados no corpo da solicitação

    // Exemplo de resposta
    console.log(postData);
    return {
      message: 'Post criado com sucesso!',
      data: postData,
    };
  }
}
