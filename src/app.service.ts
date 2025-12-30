import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello! This is a backend node.js/nestjs framework server, running inside DeployBase servers, and is deployed from github repository where this code is originated from as a testing backend app';
  }

  getPing(): string {
    return 'Hi from the next path/route!';
  }
}
