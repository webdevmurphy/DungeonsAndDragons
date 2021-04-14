
export interface Roles{
    isDungeonMaster?: boolean;
    admin?: boolean;
    subscriber?: boolean;
}

export interface User{
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    roles: Roles;
}