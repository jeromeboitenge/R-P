import { userRoles } from "src/enums"

export class CreateSignupDto {
    name: string
    email: string
    password: string
    role?: userRoles
    department: string
}
