import { IUserRepository, LoginData } from "@/domain/repository/Iuser.repository";
import { Service } from "typedi";

@Service()
export class UserRespositoryImpl implements IUserRepository {
    constructor() { }
    async login(data: LoginData): Promise<any> {
        // Api call and return
        return null;
    }

}