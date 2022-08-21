import { base } from './defaut';

export interface ICliente extends base {
    name: string,
    mail: string,
    phone: string,
    notification: boolean
}
