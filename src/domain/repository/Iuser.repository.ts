export interface LoginData {
}

export abstract class IUserRepository {
    abstract login(data: LoginData): Promise<any>
}