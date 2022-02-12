import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
/**
 * Nestjs created AuthGuard based on RESRful api (e.g. NestJS's ExecutionContext (express' request/response))
 * Since Graphql context is different, we need to map input in graphql's context to the request the AuthGuard is looking for
 */
@Injectable()
export class LoginGuard extends AuthGuard('local') {
  getRequest(excutionContext: ExecutionContext) {
    const context = GqlExecutionContext.create(excutionContext);
    const request = context.getContext();
    request.body = context.getArgs().loginInput;
    return request;
  }
}
