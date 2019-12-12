import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateRoleDto, UpdateRoleDto, ListAllEntities } from './roles.dto';
import { RolesService } from './roles.service';
import { Role } from './roles.interface';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    this.rolesService.create(createRoleDto);
    // return 'This action adds a new role';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all roles (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} role`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} role`;
  }
}

/*
import {
  Controller,
  Get,
  Req,
  Redirect,
  Query,
  Param,
  Body,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import G = require('glob');
import { CreateRoleDto } from './roles.dto';

@Controller('roles')
export class RolesController {
  @Get()
  findAll(@Req() request: Request): string {
    const result = 'This action returns all cats';
    return result;
  }

  @Get('/hello')
  hello() {
    const yo = { name: 'hola' };
    return yo;
  }

  @Get('/nest')
  @Redirect('https://docs.nestjs.com', 301)
  doc() {
    const yo = { name: 'hola' };
    return yo;
  }

  @Get('/doc')
  @Redirect('https://docs.nestjs.com', 301)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      // http://localhost:3000/roles/doct?version=5
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('/async')
  async async(): Promise<any[]> {
    // https://api.paseonetwork.com/api/v1/countries?access_token=uC2hv3D3aodDbnzUEOdOQuJhcg-bOWKVQHrttXJV3cg
    return [];
  }
  
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
 
  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
    console.log(createRoleDto.name);
    return 'This action adds a new cat';
  }

  @Post('/chundo')
  createChundo(@Res() res: Response) {
    res.status(HttpStatus.OK).send();
  }
}
*/
