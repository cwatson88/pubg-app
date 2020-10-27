import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function GamerTagInput({ collection, uid }) {
  const [gamerTagInput, setGamerTagInput] = useState("");
  function updateGamerTag(gamerTag) {
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
        onChange={(e) => setGamerTagInput(e.target.value)}
        style={{ marginRight: "5px" }}
      />

      <Button label="Submit" onClick={() => updateGamerTag(gamerTagInput)} />
    </div>
  );
}
export default function Account({ collection, uid }) {
  return (
    <div>
      <GamerTagInput collection={collection} uid={uid}></GamerTagInput>
    </div>
  );
}
