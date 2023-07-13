/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { Module, forwardRef } from "@nestjs/common";
import { MorganModule } from "nest-morgan";
import { ACLModule } from "../../auth/acl.module";
import { AuthModule } from "../../auth/auth.module";
@Module({
  imports: [ACLModule, forwardRef(() => AuthModule), MorganModule],
  exports: [ACLModule, AuthModule, MorganModule],
})
export class ShoppingListModuleBase {}
