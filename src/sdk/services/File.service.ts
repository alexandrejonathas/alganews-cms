import { File } from "../@types";
import Service from "../Service";

class FileService extends Service {
    
    static getSignedUrl (fileInfo: File.UploadRequestInput) {
        return this.Http
            .post<File.UploadRequest>('/upload-requests', fileInfo)
            .then(this.getData)
            .then(res => res.uploadSignedUrl)
    }

    //Implementação para o GCP
    static uploadFileToSignedUrl (signedUrl: string, file: File) {
        return this.Http
            .put(signedUrl, file, {
                headers: { 'Content-Type': file.type }
            })
            .then(this.getData)
    }

}


export default FileService