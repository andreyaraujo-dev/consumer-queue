import { Injectable } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { ConstantKeys } from '../../config/constant-keys.enum';

@Injectable()
export class SecretService {
  constructor(private loggerService: LoggerService) {
    this.loggerService.setContext(SecretService.name);
  }

  private fetchEnvVar(key: ConstantKeys): string | undefined {
    if (key in process.env) {
      return process.env[key];
    }

    return undefined;
  }

  async fetchEnvSecret(key: ConstantKeys): Promise<string> {
    this.loggerService.debug(`Fetching secret ${key}`);

    const secret = this.fetchEnvVar(key);

    if (!secret) {
      this.loggerService.error(`${key} NAO ENCONTRADO`);
    }

    this.loggerService.debug(`${key} resolved`);
    return secret;
  }
}
