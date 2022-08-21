import {db} from "../conection";
import { ICliente } from '../model/client';
import { OkPacket, RowDataPacket } from "mysql2";

export const create = async (client: ICliente, callback: Function) => {
    try {
        const queryString = "INSERT INTO clientes (name, mail, phone, notification) VALUES (?, ?, ?, ?)";
        db.query(
          queryString,
          [client.name, client.mail, client.phone, client.notification],
          (err: any, result: OkPacket) => {
            if (err) {
                callback(err, 0);
                return
            };
      
            const insertId = (<OkPacket> result).insertId;
    
            callback(null, insertId);
          }
        );
        
    } catch (error) {
        callback(error, 0);
    }
  };