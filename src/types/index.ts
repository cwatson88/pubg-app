export interface GoogleProfile {
  email: string;
  displayName: string;
  uid: string;
}

export interface UserDatabaseDetails extends firebase.firestore.DocumentData {
  friends?: Array<string>;
  gamerTag?: string;
  [x: string]: any;
}

export interface PUBGStats {
  "total-stats": Array<{
    friendly_name: string;
    value: number;
    category: string;
  }>;
}

export interface FriendProps {
  currentFriends: Array<string>;
  uid: string;
}

export interface LastUpdated {
  weaponStats: string;
}
