import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { ProductsModule } from './products/products.module';
// import { } from '@nestjs/typeorm'

@Module({
  imports: [RolesModule, ProductsModule],
  controllers: [AppController, RolesController, TodosController],
  providers: [AppService, RolesService, TodosService],
})
export class AppModule {}
