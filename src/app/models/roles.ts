export interface User {
    uid: string;
    email: string;
    displayName?: string;
    roles: Roles;
}

export interface Roles {
   isDungeonMaster?:boolean; 
   subscriber?: boolean;
   editor?: boolean;
   admin: boolean;
}