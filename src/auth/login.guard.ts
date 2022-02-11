import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LoginGuard extends AuthGuard('local') {
  getRequest(excutionContext: ExecutionContext) {
    const context = GqlExecutionContext.create(excutionContext);
    const request = context.getContext();
    request.body = context.getArgs().loginInput;
    return request;
  }
}
