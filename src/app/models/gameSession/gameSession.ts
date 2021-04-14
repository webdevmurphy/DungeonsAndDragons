export class gameSession {
downloadUrl: string;
user?: object;
partyLeader: string;
isDungeonMaster: boolean;
selectedCharacters: Array<string>;
selectedMembers: Array<string>;

constructor(gamesession){
this.user = gamesession.user;
this.isDungeonMaster = gamesession.isDungeonMaster;
this.downloadUrl = gamesession.downloadUrl;
this.partyLeader = gamesession.partyLeader;
this.selectedCharacters = gamesession.selectedCharacters;
this.selectedMembers = gamesession.selectedMembers;

}




} 