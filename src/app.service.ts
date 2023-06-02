import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return `Hello World! ${this.configService.get('DATABASE_NAME')}`;
  }
 
  getConfig(): any {
    return  { 
      DATABASE_HOST: this.configService.get('DATABASE_HOST'),
      DATABASE_NAME: this.configService.get('DATABASE_NAME'),
      DATABASE_USERNAME: this.configService.get('DATABASE_USERNAME'),
      DATABASE_PASSWORD: this.configService.get('DATABASE_PASSWORD')
    }
    
  }
 
}
