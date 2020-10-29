import React from "react";
import FindFriends from "../components/FindFriends";

interface FriendProps {
  currentFriends: Array<string>;
  uid: string;
}

export default function Friends({ currentFriends = [], uid }: FriendProps) {
  return <div></div>;
}
