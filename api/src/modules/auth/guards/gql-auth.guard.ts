import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

export class GqlAuthGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }

  getRequest(context: ExecutionContext) {
    console.log("my contrauctr 2")

    const ctx = GqlExecutionContext.create(context).getContext();
    return ctx.getContext().req;
  }

  canActivate(context: ExecutionContext) {
    console.log("my contrauctr")

    const ctx = GqlExecutionContext.create(context);
    return super.canActivate(context);
  }
  
  validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    const token = auth.split(' ')[1];

    try {
        return this.jwtService.verify(token, { secret:  process.env.JWT_KEY })
    } catch(err) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
