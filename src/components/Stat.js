import * as React from "react";

const Skull = () => (
  <g fill="#000">
    <path d="M35.922 29.934c0-1.001-.368-1.967-1.034-2.714a10.943 10.943 0 001.033-4.626C35.921 16.201 30.331 11 23.46 11 16.59 11 11 16.201 11 22.594c0 1.593.355 3.175 1.032 4.626A4.078 4.078 0 0011 29.934c0 1.992 1.458 3.67 3.42 4.129-.01.04-.019.081-.027.122-.158.81.061 1.634.616 2.313.693.849 1.838 1.38 2.998 1.393.069.006.202.012.352.012.392 0 .834-.039 1.192-.313l.002.002c.536.492 1.37.596 1.977.596.59 0 1.396-.098 1.93-.556.537.458 1.342.556 1.931.556.607 0 1.441-.104 1.975-.595l.002-.003c.359.274.801.313 1.192.313.152 0 .285-.007.354-.012 1.159-.012 2.303-.543 2.996-1.391.556-.68.775-1.503.618-2.317-.008-.035-.015-.074-.027-.12 1.962-.46 3.42-2.137 3.42-4.13zm-4.506 3.111a3.44 3.44 0 01-.52-.038c.213.487.461 1.09.52 1.394.247 1.277-1.14 2.349-2.546 2.349 0 0-.142.011-.31.011-.2 0-.438-.016-.517-.09-.527-.484 0-2.665 0-2.665 0-.367-.323-.665-.722-.665-.396 0-.72.298-.72.665 0 0 .525 2.258 0 2.744-.214.197-.712.295-1.21.295-.499 0-.997-.099-1.211-.295-.525-.485 0-2.744 0-2.744 0-.367-.321-.665-.72-.665-.398 0-.72.298-.72.665 0 0 .526 2.258 0 2.744-.214.197-.712.295-1.21.295-.5 0-.997-.099-1.212-.295-.524-.485 0-2.744 0-2.744 0-.367-.32-.665-.719-.665-.4 0-.722.298-.722.665 0 0 .525 2.181 0 2.665-.08.074-.317.09-.518.09-.168 0-.31-.011-.31-.011-1.405 0-2.793-1.072-2.544-2.349.057-.303.305-.907.517-1.394a3.413 3.413 0 01-.517.038c-1.862 0-3.372-1.392-3.372-3.111 0-1 .511-1.892 1.309-2.461a9.749 9.749 0 01-1.31-4.879c0-5.773 5.07-10.452 11.328-10.452 6.257 0 11.328 4.68 11.328 10.452a9.761 9.761 0 01-1.309 4.879c.796.569 1.31 1.46 1.31 2.46 0 1.72-1.51 3.112-3.373 3.112z" />
    <path d="M17.473 24.347c-2.73.15.57 3.757 1.844 4.62 1.272.859 4.33-.743 4.154-1.788-.262-1.535-4.317-2.925-5.998-2.832zM25.5 29.293c-.494 0-.697.636-1.098 1.339-.348.604-1.348 1.034-.74 1.597.649.599 3.025.599 3.673 0 .595-.548-.393-.993-.739-1.598-.401-.703-.603-1.338-1.096-1.338zM33.527 24.347c-1.681-.094-5.736 1.297-5.998 2.832-.177 1.045 2.882 2.647 4.155 1.787 1.271-.862 4.572-4.469 1.843-4.62z" />
  </g>
);

const Controllers = () => (
  <g style={{ transform: "translate(8px, 11px) scale(1.1)" }}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.2946 6.56936C15.4977 6.82223 16.6236 7.22815 17.2691 7.87362C17.8108 8.41662 18.3059 9.27105 18.7251 10.2319C19.151 11.2075 19.5223 12.3494 19.7965 13.5139C20.0706 14.6784 20.249 15.8829 20.2809 16.9822C20.3128 18.0669 20.2024 19.1143 19.8444 19.9234C19.6811 20.2867 19.4073 20.5891 19.0619 20.7875C18.7165 20.9859 18.3173 21.0701 17.9212 21.0281C17.0748 20.9389 16.4373 20.5037 15.9076 19.9993C15.5626 19.6565 15.2343 19.2972 14.9241 18.9226C14.7564 18.727 14.5914 18.5353 14.4343 18.361C13.4655 17.291 12.3089 16.3287 10.1436 16.3287C7.97822 16.3287 6.82168 17.291 5.8528 18.361C5.69442 18.5353 5.53072 18.727 5.36303 18.9226C5.03963 19.2993 4.70557 19.6892 4.37951 20.0006C3.84981 20.5037 3.21232 20.9389 2.36588 21.0281C1.96982 21.0701 1.57061 20.9859 1.22524 20.7875C0.879878 20.5891 0.606015 20.2867 0.442753 19.9234C0.0834146 19.1143 -0.0257179 18.0669 0.00489239 16.9822C0.0368336 15.8829 0.217834 14.6798 0.490665 13.5139C0.764827 12.3494 1.13747 11.2075 1.56203 10.2319C1.98125 9.27105 2.47634 8.41662 3.01801 7.87362C3.66482 7.22815 4.78942 6.82223 5.99254 6.56936C7.23292 6.30851 8.69423 6.18074 10.1436 6.18074C11.5929 6.18074 13.0542 6.30851 14.2946 6.56936ZM6.2667 7.87229C5.09951 8.11851 4.31163 8.46187 3.96028 8.81456C3.59295 9.18188 3.17905 9.85664 2.78245 10.7643C2.3617 11.7513 2.02859 12.7733 1.78695 13.8187C1.53168 14.8686 1.38056 15.9412 1.33578 17.0208C1.3065 18.0256 1.41829 18.8414 1.65918 19.3844C1.70851 19.4902 1.78971 19.5779 1.89139 19.6351C1.99306 19.6924 2.11012 19.7165 2.22614 19.7038C2.66134 19.6586 3.03798 19.439 3.46253 19.0357C3.74468 18.7669 3.99488 18.4728 4.28102 18.1387C4.45803 17.9311 4.64834 17.7089 4.86661 17.4666C5.96592 16.2542 7.45252 14.9978 10.1436 14.9978C12.8346 14.9978 14.3212 16.2529 15.4205 17.4666C15.6388 17.7089 15.8291 17.9324 16.0061 18.1387C16.2909 18.4714 16.5425 18.7669 16.8246 19.0357C17.2478 19.439 17.6245 19.6586 18.061 19.7052C18.1772 19.7177 18.2943 19.6935 18.396 19.6359C18.4977 19.5784 18.5788 19.4904 18.6279 19.3844C18.8675 18.8414 18.9806 18.0269 18.9514 17.0208C18.9065 15.9412 18.7554 14.8686 18.5002 13.8187C18.2585 12.7733 17.9254 11.7513 17.5047 10.7643C17.1081 9.85664 16.6928 9.18055 16.3268 8.81456C15.9755 8.46187 15.1876 8.11851 14.0204 7.87229C12.8892 7.63407 11.5224 7.51295 10.1436 7.51295C8.76477 7.51295 7.39795 7.63407 6.2667 7.87229Z"
      fill="black"
    />
    <path
      d="M14.8017 11.0052C14.8017 11.1817 14.7316 11.3509 14.6068 11.4757C14.482 11.6005 14.3127 11.6706 14.1362 11.6706C13.9597 11.6706 13.7905 11.6005 13.6657 11.4757C13.5409 11.3509 13.4708 11.1817 13.4708 11.0052C13.4708 10.8287 13.5409 10.6595 13.6657 10.5347C13.7905 10.4099 13.9597 10.3398 14.1362 10.3398C14.3127 10.3398 14.482 10.4099 14.6068 10.5347C14.7316 10.6595 14.8017 10.8287 14.8017 11.0052ZM13.4708 12.3361C13.4708 12.5126 13.4007 12.6818 13.2759 12.8066C13.1511 12.9314 12.9818 13.0015 12.8053 13.0015C12.6288 13.0015 12.4596 12.9314 12.3348 12.8066C12.21 12.6818 12.1399 12.5126 12.1399 12.3361C12.1399 12.1596 12.21 11.9903 12.3348 11.8655C12.4596 11.7408 12.6288 11.6706 12.8053 11.6706C12.9818 11.6706 13.1511 11.7408 13.2759 11.8655C13.4007 11.9903 13.4708 12.1596 13.4708 12.3361ZM16.1325 12.3361C16.1325 12.5126 16.0624 12.6818 15.9376 12.8066C15.8128 12.9314 15.6436 13.0015 15.4671 13.0015C15.2906 13.0015 15.1214 12.9314 14.9966 12.8066C14.8718 12.6818 14.8017 12.5126 14.8017 12.3361C14.8017 12.1596 14.8718 11.9903 14.9966 11.8655C15.1214 11.7408 15.2906 11.6706 15.4671 11.6706C15.6436 11.6706 15.8128 11.7408 15.9376 11.8655C16.0624 11.9903 16.1325 12.1596 16.1325 12.3361ZM14.8017 13.667C14.8017 13.8435 14.7316 14.0127 14.6068 14.1375C14.482 14.2623 14.3127 14.3324 14.1362 14.3324C13.9597 14.3324 13.7905 14.2623 13.6657 14.1375C13.5409 14.0127 13.4708 13.8435 13.4708 13.667C13.4708 13.4905 13.5409 13.3212 13.6657 13.1964C13.7905 13.0716 13.9597 13.0015 14.1362 13.0015C14.3127 13.0015 14.482 13.0716 14.6068 13.1964C14.7316 13.3212 14.8017 13.4905 14.8017 13.667ZM5.48547 10.3398H6.81636V14.3324H5.48547V10.3398Z"
      fill="black"
    />
    <path
      d="M4.15459 11.6706H8.14724V13.0015H4.15459V11.6706ZM3.55702 7.32397C3.53429 7.23947 3.52845 7.15131 3.53983 7.06454C3.55122 6.97778 3.5796 6.89411 3.62337 6.81833C3.66713 6.74255 3.72541 6.67615 3.79487 6.62292C3.86433 6.56969 3.9436 6.53069 4.02816 6.50814L6.59942 5.81874C6.7688 5.77653 6.94798 5.80256 7.09835 5.89122C7.24871 5.97988 7.35821 6.12408 7.40326 6.29272C7.4483 6.46137 7.42527 6.64096 7.33914 6.79279C7.253 6.94461 7.11066 7.05652 6.94279 7.10437L4.37152 7.79377C4.20104 7.83928 4.01946 7.81521 3.86672 7.72686C3.71398 7.63851 3.60258 7.49311 3.55702 7.32264V7.32397ZM16.8339 7.32397C16.8567 7.23955 16.8626 7.15148 16.8513 7.06479C16.84 6.97809 16.8117 6.89447 16.7681 6.8187C16.7244 6.74294 16.6663 6.67651 16.597 6.62323C16.5277 6.56994 16.4486 6.53083 16.3641 6.50814L13.7928 5.81874C13.6224 5.77303 13.4407 5.79692 13.2878 5.88515C13.135 5.97338 13.0234 6.11872 12.9777 6.28921C12.932 6.45969 12.9559 6.64136 13.0441 6.79423C13.1323 6.9471 13.2777 7.05867 13.4482 7.10437L16.0194 7.79377C16.1899 7.83928 16.3715 7.81521 16.5242 7.72686C16.677 7.63851 16.7884 7.49311 16.8339 7.32264V7.32397Z"
      fill="black"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="10"
      y="0"
      width="21"
      height="16"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.4377 0.773323C25.6408 1.02619 26.7667 1.43211 27.4122 2.07759C27.9539 2.62059 28.4489 3.47502 28.8682 4.43591C29.2941 5.41145 29.6654 6.55335 29.9395 7.71787C30.2137 8.8824 30.392 10.0868 30.424 11.1862C30.4559 12.2708 30.3454 13.3182 29.9874 14.1274C29.8242 14.4907 29.5503 14.7931 29.205 14.9915C28.8596 15.1899 28.4604 15.2741 28.0643 15.232C27.2179 15.1429 26.5804 14.7077 26.0507 14.2033C25.7056 13.8605 25.3774 13.5012 25.0672 13.1266C24.8995 12.9309 24.7344 12.7393 24.5774 12.565C23.6085 11.4949 22.452 10.5327 20.2866 10.5327C18.1213 10.5327 16.9647 11.4949 15.9959 12.565C15.8375 12.7393 15.6738 12.9309 15.5061 13.1266C15.1827 13.5032 14.8486 13.8932 14.5226 14.2046C13.9929 14.7077 13.3554 15.1429 12.5089 15.232C12.1129 15.2741 11.7137 15.1899 11.3683 14.9915C11.0229 14.7931 10.7491 14.4907 10.5858 14.1274C10.2265 13.3182 10.1173 12.2708 10.148 11.1862C10.1799 10.0868 10.3609 8.88373 10.6337 7.71787C10.9079 6.55335 11.2805 5.41145 11.7051 4.43591C12.1243 3.47502 12.6194 2.62059 13.1611 2.07759C13.8079 1.43211 14.9325 1.02619 16.1356 0.773323C17.376 0.512469 18.8373 0.384705 20.2866 0.384705C21.736 0.384705 23.1973 0.512469 24.4377 0.773323ZM16.4098 2.07626C15.2426 2.32247 14.4547 2.66584 14.1033 3.01852C13.736 3.38585 13.3221 4.0606 12.9255 4.96827C12.5048 5.95524 12.1717 6.9773 11.93 8.02265C11.6747 9.07259 11.5236 10.1451 11.4788 11.2248C11.4496 12.2296 11.5614 13.0454 11.8022 13.5884C11.8516 13.6942 11.9328 13.7818 12.0345 13.8391C12.1361 13.8964 12.2532 13.9204 12.3692 13.9078C12.8044 13.8626 13.181 13.643 13.6056 13.2397C13.8877 12.9709 14.1379 12.6767 14.4241 12.3427C14.6011 12.1351 14.7914 11.9128 15.0097 11.6706C16.109 10.4582 17.5956 9.20181 20.2866 9.20181C22.9777 9.20181 24.4643 10.4568 25.5636 11.6706C25.7818 11.9128 25.9722 12.1364 26.1492 12.3427C26.434 12.6754 26.6855 12.9709 26.9677 13.2397C27.3909 13.643 27.7675 13.8626 28.2041 13.9091C28.3202 13.9216 28.4374 13.8974 28.5391 13.8399C28.6408 13.7824 28.7219 13.6944 28.771 13.5884C29.0106 13.0454 29.1237 12.2309 29.0944 11.2248C29.0496 10.1451 28.8985 9.0726 28.6432 8.02265C28.4016 6.97731 28.0685 5.95525 27.6477 4.96827C27.2511 4.0606 26.8359 3.38452 26.4699 3.01852C26.1186 2.66584 25.3307 2.32247 24.1635 2.07626C23.0322 1.83803 21.6654 1.71692 20.2866 1.71692C18.9078 1.71692 17.541 1.83803 16.4098 2.07626Z"
        fill="black"
      />
      <path
        d="M24.9447 5.20916C24.9447 5.38564 24.8746 5.5549 24.7498 5.6797C24.625 5.80449 24.4558 5.8746 24.2793 5.8746C24.1028 5.8746 23.9335 5.80449 23.8087 5.6797C23.684 5.5549 23.6138 5.38564 23.6138 5.20916C23.6138 5.03267 23.684 4.86341 23.8087 4.73862C23.9335 4.61383 24.1028 4.54372 24.2793 4.54372C24.4558 4.54372 24.625 4.61383 24.7498 4.73862C24.8746 4.86341 24.9447 5.03267 24.9447 5.20916ZM23.6138 6.54004C23.6138 6.71653 23.5437 6.88579 23.4189 7.01058C23.2941 7.13537 23.1249 7.20548 22.9484 7.20548C22.7719 7.20548 22.6027 7.13537 22.4779 7.01058C22.3531 6.88579 22.283 6.71653 22.283 6.54004C22.283 6.36356 22.3531 6.1943 22.4779 6.0695C22.6027 5.94471 22.7719 5.8746 22.9484 5.8746C23.1249 5.8746 23.2941 5.94471 23.4189 6.0695C23.5437 6.1943 23.6138 6.36356 23.6138 6.54004ZM26.2756 6.54004C26.2756 6.71653 26.2055 6.88579 26.0807 7.01058C25.9559 7.13537 25.7867 7.20548 25.6102 7.20548C25.4337 7.20548 25.2644 7.13537 25.1396 7.01058C25.0148 6.88579 24.9447 6.71653 24.9447 6.54004C24.9447 6.36356 25.0148 6.1943 25.1396 6.0695C25.2644 5.94471 25.4337 5.8746 25.6102 5.8746C25.7867 5.8746 25.9559 5.94471 26.0807 6.0695C26.2055 6.1943 26.2756 6.36356 26.2756 6.54004ZM24.9447 7.87093C24.9447 8.04741 24.8746 8.21667 24.7498 8.34146C24.625 8.46626 24.4558 8.53637 24.2793 8.53637C24.1028 8.53637 23.9335 8.46626 23.8087 8.34146C23.684 8.21667 23.6138 8.04741 23.6138 7.87093C23.6138 7.69444 23.684 7.52518 23.8087 7.40039C23.9335 7.27559 24.1028 7.20548 24.2793 7.20548C24.4558 7.20548 24.625 7.27559 24.7498 7.40039C24.8746 7.52518 24.9447 7.69444 24.9447 7.87093ZM15.6285 4.54372H16.9594V8.53637H15.6285V4.54372Z"
        fill="black"
      />
      <path
        d="M14.2977 5.8746H18.2903V7.20548H14.2977V5.8746ZM13.7001 1.52794C13.6774 1.44343 13.6715 1.35527 13.6829 1.26851C13.6943 1.18174 13.7227 1.09807 13.7664 1.02229C13.8102 0.946514 13.8685 0.88011 13.9379 0.826883C14.0074 0.773656 14.0867 0.734652 14.1712 0.712103L16.7425 0.0227055C16.9119 -0.0195083 17.091 0.00652146 17.2414 0.0951839C17.3918 0.183846 17.5013 0.328041 17.5463 0.496688C17.5914 0.665334 17.5683 0.844926 17.4822 0.996752C17.3961 1.14858 17.2537 1.26048 17.0859 1.30834L14.5146 1.99774C14.3441 2.04324 14.1625 2.01918 14.0098 1.93083C13.857 1.84248 13.7456 1.69708 13.7001 1.5266V1.52794ZM26.977 1.52794C26.9997 1.44352 27.0056 1.35545 26.9943 1.26875C26.983 1.18205 26.9548 1.09843 26.9111 1.02267C26.8675 0.946903 26.8094 0.880478 26.7401 0.82719C26.6708 0.773902 26.5916 0.734794 26.5072 0.712103L23.9359 0.0227055C23.7654 -0.0230044 23.5838 0.000883136 23.4309 0.0891129C23.278 0.177343 23.1665 0.322687 23.1208 0.493173C23.075 0.663659 23.0989 0.84532 23.1872 0.998193C23.2754 1.15107 23.4207 1.26263 23.5912 1.30834L26.1625 1.99774C26.333 2.04324 26.5145 2.01918 26.6673 1.93083C26.82 1.84248 26.9314 1.69708 26.977 1.5266V1.52794Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M33.586 -1.48051L17.2846 -3.62253L7.96956 1.73251L11.2298 6.88279L17.2846 9.05631L22.8219 18.1126L40.5723 11.3716L33.586 -1.48051Z"
        fill="black"
        stroke="black"
      />
    </g>
  </g>
);

const Jester = () => (
  <g style={{ transform: "translate(9px,11px) scale(1.2)" }}>
    <path
      d="M23.201 10.9022C23.0756 9.84813 22.3223 6.58064 17.8065 6.58064C16.74 6.58064 15.8551 6.85935 15.1177 7.30103C15.2218 5.49097 15.9635 3.93871 17.4468 2.45535L17.693 2.20916L17.683 2.1991C17.8378 2.27574 18.0097 2.32258 18.1935 2.32258C18.8338 2.32258 19.3548 1.80155 19.3548 1.16129C19.3548 0.521032 18.8338 0 18.1935 0C17.688 0 17.261 0.32671 17.1023 0.778839C13.2302 0.826065 10.435 1.73419 8.79716 3.48503C7.644 4.71716 7.40671 6.02013 7.36258 6.63484C7.10942 6.59923 6.8489 6.58064 6.58064 6.58064C2.56916 6.58064 1.09471 9.25394 0.815226 10.8972C0.344516 11.0454 0 11.4809 0 12C0 12.6403 0.521032 13.1613 1.16129 13.1613C1.80155 13.1613 2.32258 12.6403 2.32258 12C2.32258 11.6501 2.16387 11.34 1.91845 11.1267C2.29781 10.6854 2.94232 10.4516 3.81445 10.4516C4.34787 10.4516 4.73458 10.6095 4.99742 10.9343C5.52155 11.5827 5.43794 12.7154 5.36903 13.2155C4.51277 13.4148 3.87097 14.1805 3.87097 15.0968L5.13135 19.3548H18.8686L20.1128 15.2079L20.129 15.0968C20.129 14.1801 19.4868 13.4141 18.6294 13.2151C18.5466 12.6248 18.5137 11.5405 19.0014 10.9355C19.2643 10.6099 19.6514 10.4516 20.1855 10.4516C21.0577 10.4516 21.7026 10.6854 22.0815 11.1267C21.8361 11.34 21.6774 11.6501 21.6774 12C21.6774 12.6403 22.1985 13.1613 22.8387 13.1613C23.479 13.1613 24 12.6403 24 12C24 11.4867 23.6632 11.0555 23.201 10.9022ZM18.1935 0.774194C18.4072 0.774194 18.5806 0.948 18.5806 1.16129C18.5806 1.37458 18.4072 1.54839 18.1935 1.54839C17.9799 1.54839 17.8065 1.37458 17.8065 1.16129C17.8065 0.948 17.9799 0.774194 18.1935 0.774194ZM9.36232 4.01381C10.8503 2.42361 13.4563 1.59794 17.105 1.55303C17.1197 1.59406 17.1368 1.63355 17.1557 1.67226L17.1457 1.66219L16.8995 1.90839C15.1413 3.66581 14.3226 5.51961 14.3226 7.74194V7.88245C13.1295 8.93961 12.4425 10.4427 12.0592 11.6295C11.935 11.1546 11.7646 10.6293 11.5316 10.1017C10.7655 8.36594 9.60503 7.24761 8.12826 6.80129C8.14142 6.39677 8.27613 5.17471 9.36232 4.01381ZM1.16129 12.3871C0.947613 12.3871 0.774194 12.2133 0.774194 12C0.774194 11.7867 0.947613 11.6129 1.16129 11.6129C1.37497 11.6129 1.54839 11.7867 1.54839 12C1.54839 12.2133 1.37497 12.3871 1.16129 12.3871ZM5.70697 18.5806L4.64632 15.0437C4.67381 14.4279 5.184 13.9355 5.80645 13.9355C6.44671 13.9355 6.96774 14.4565 6.96774 15.0968H6.96929V15.1355L7.31381 18.5806H5.70697ZM10.0645 18.5806H8.09226L7.74194 15.0968C7.74194 14.4565 8.26297 13.9355 8.90323 13.9355C9.54348 13.9355 10.0645 14.4565 10.0645 15.0968V18.5806ZM10.4516 13.9366C10.0982 13.4663 9.53574 13.1613 8.90323 13.1613C8.27071 13.1613 7.70826 13.4663 7.35484 13.9366C7.06761 13.5542 6.64103 13.2844 6.15213 13.1957C6.22877 12.5361 6.26632 11.2754 5.60129 10.4497C5.18787 9.93716 4.5871 9.67742 3.81445 9.67742C2.90865 9.67742 2.27535 9.88877 1.83019 10.1795C2.29316 9.02206 3.49432 7.35484 6.58064 7.35484C8.49406 7.35484 9.91897 8.37832 10.8151 10.3966C11.3121 11.5161 11.5057 12.6492 11.5761 13.2101C11.1201 13.3126 10.7234 13.5747 10.4516 13.9366ZM13.1613 18.5806H10.8387V15.0968C10.8387 14.4565 11.3597 13.9355 12 13.9355C12.6403 13.9355 13.1613 14.4565 13.1613 15.0968V18.5806ZM19.3537 15.0437L18.2926 18.5806H16.6858L16.7594 17.8452L15.989 17.7681L15.9077 18.581H13.9355V15.0972C13.9355 14.4569 14.4565 13.9359 15.0968 13.9359C15.7339 13.9359 16.2519 14.4515 16.2569 15.0875L16.0665 16.9935L16.8368 17.0706L17.0323 15.0968C17.0323 14.4565 17.5533 13.9355 18.1935 13.9355C18.816 13.9355 19.3262 14.4279 19.3537 15.0437ZM20.1855 9.67742C19.4133 9.67742 18.8121 9.93716 18.3991 10.4497C17.7337 11.275 17.7716 12.5361 17.8483 13.1957C17.3594 13.2844 16.9328 13.5542 16.6455 13.9366C16.2917 13.4663 15.7293 13.1613 15.0968 13.1613C14.4643 13.1613 13.9018 13.4663 13.5484 13.9366C13.2809 13.5805 12.8934 13.32 12.4463 13.2139C12.552 12.6465 12.8129 11.5235 13.3711 10.4137C14.3919 8.38413 15.8841 7.35484 17.8065 7.35484C20.9582 7.35484 21.9716 9.12 22.2972 10.2685C21.8481 9.93252 21.1812 9.67742 20.1855 9.67742ZM22.8387 12.3871C22.625 12.3871 22.4516 12.2133 22.4516 12C22.4516 11.7867 22.625 11.6129 22.8387 11.6129C23.0524 11.6129 23.2258 11.7867 23.2258 12C23.2258 12.2133 23.0524 12.3871 22.8387 12.3871Z"
      fill="black"
    />
  </g>
);

/**
 *
 * @param {{statName,statValue}} props
 */
function SvgComponent(props) {
  let icon = null;
  let fillColor = "#FFD549";

  // set the icon and the text / highlight color
  switch (props.category) {
    case "KILLS":
      icon = <Skull />;
      fillColor = "#FFD549";
      break;
    case "MATCH":
      icon = <Controllers />;
      fillColor = "#41D3CA";
      break;
    case "FUN":
      icon = <Jester />;
      fillColor = "#75B907";
      break;

    default:
      icon = <Skull />;
      fillColor = "#FFD549";
      break;
  }

  return (
    <svg width={277} height={49} viewBox="0 0 277 49" fill="none" {...props}>
      <path
        d="M51.533 40c-5.1 0-9.754 2.6-14.08 5.3A24.386 24.386 0 0124.5 49C10.969 49 0 38.031 0 24.5S10.969 0 24.5 0c5.015 0 9.678 1.507 13.56 4.092C42.563 7.089 47.444 10 52.85 10H262c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15H51.533z"
        fill="#232323"
      />
      {/* this is the bullet at the end  */}
      {/* <path
        d="M225 40h37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15h-37v30z"
        fill="#FFD549"
      /> */}
      <circle cx={24} cy={24} r={19} fill={fillColor} fillOpacity={0.8} />
      <text
        fill={fillColor}
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Overpass"
        fontSize={12}
        fontWeight={600}
        letterSpacing={0}
        className="stat-value"
      >
        <tspan x={270} y={29.188} textAnchor="end">
          {props.statValue}
        </tspan>
      </text>
      <text
        fill={fillColor}
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Overpass"
        fontSize={12}
        fontWeight={300}
        letterSpacing={0}
      >
        <tspan x={65} y={29.188}>
          {props.statName}
        </tspan>
      </text>
      {icon}
    </svg>
  );
}

export default SvgComponent;
