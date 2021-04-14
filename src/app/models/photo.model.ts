export class Photo {
    downloadUrl: string;
    alt: string;
    user?: object;

    constructor(photoObj) {
        this.user = photoObj.user;
        this.downloadUrl = photoObj.downloadUrl;
        this.alt = photoObj.alt;
    }
}