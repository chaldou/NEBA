/*import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Roles } from "./role.enum";

//to ensure that only people with a specific role can perform some services

export class RolesGuard implements CanActivate{
    constructor ( private reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

       
        //extract the required roles
        const requireRoles = this.reflector.getAllAndOverride<Roles[]>('roles', [
            context.getHandler(),
            context.getClass()
        ])

        if (!requireRoles){
            return true
        }

        //does the current user making the request have the required roles
        const {User} = context.switchToHttp().getRequest(); //to tell which user is making the request but this should be done after the authentication

    //does at least one of the require roles a role that the user has
        return requireRoles.some((role) => User.roles.includes(role));
    }
}*/