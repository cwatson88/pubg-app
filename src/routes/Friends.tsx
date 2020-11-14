import React from "react";
import FindFriends from "../components/FindFriends";
import type { FriendProps } from "../types";

export default function Friends({ currentFriends = [], uid }: FriendProps) {
  return (
    <div>
      <FindFriends currentFriends={currentFriends} uid={uid} />
    </div>
  );
}
