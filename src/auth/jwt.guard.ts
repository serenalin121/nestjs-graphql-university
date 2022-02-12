import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

/**
 * Nestjs created AuthGuard based on RESRful api (e.g. NestJS's ExecutionContext (express' request/response))
 * Since Graphql context is different, we need to map request in graphql's context to the request the AuthGuard is looking for
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(excutionContext: ExecutionContext) {
    const context = GqlExecutionContext.create(excutionContext);
    return context.getContext().req;
  }
}
