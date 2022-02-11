import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(excutionContext: ExecutionContext) {
    const context = GqlExecutionContext.create(excutionContext);
    return context.getContext().req;
  }
}
