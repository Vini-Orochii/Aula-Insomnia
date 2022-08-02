import { Client } from "../Models/Clientmodel.js";

export class ClientController{

    static listarTodos( req, res) {
        return res.status(200).json({
            msg : "Rota funcionando"

        })
    }

}