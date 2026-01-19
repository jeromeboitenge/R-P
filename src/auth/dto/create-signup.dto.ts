import { userRoles } from "src/enums"

export class CreateSIgnupDto {
    name: string
    email: string
    password: string
    role?: userRoles
    department: string
}
