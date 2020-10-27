import * as React from "react";

function Home(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9H1l10.327-9.388a1 1 0 011.346 0L23 11h-3v9z" />
    </svg>
  );
}

const MemoHome = React.memo(Home);
export default MemoHome;