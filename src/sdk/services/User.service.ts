import { User } from "../@types";
import Service from "../Service";

class UserService extends Service {

    static getAllEditors () {
        return this.Http
            .get<User.EditorSummary[]>('/users/editors')
            .then(this.getData)
    }
    
    static getExistingEditor (id: number) {
        return this.Http
            .get<User.EditorDetailed>(`/users/editors/${id}`)
            .then(this.getData)
    } 
   

}

export default UserService