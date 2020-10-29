import React, { useState } from "react";
import Button from "../components/Button";

interface AccountProps {
  collection: firebase.firestore.CollectionReference<
    firebase.firestore.DocumentData
  >;
  uid: string;
}
const InputText = (props: any) => <input {...props}></input>;
function GamerTagInput({ collection, uid }: AccountProps) {
  const [gamerTagInput, setGamerTagInput] = useState("");
  function updateGamerTag(gamerTag: string) {
    // will need to wrap this in a try catch and show that the gamertag has been added
    try {
      collection
        .doc(uid)
        .set(
          {
            gamerTag,
          },
          { merge: true }
        )
        .then(() => {
          // redirect to the stats page
        });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h3>Add your gamer tag to begin!</h3>
      <InputText
        id="gamer-tag-input"
        value={gamerTagInput}
        onChange={(e: any) => setGamerTagInput(e.target.value)}
        style={{ marginRight: "5px" }}
      />

      <Button onClick={() => updateGamerTag(gamerTagInput)}>Submit</Button>
    </div>
  );
}
export default function Account({ collection, uid }: AccountProps) {
  return (
    <div>
      <GamerTagInput collection={collection} uid={uid}></GamerTagInput>
    </div>
  );
}
