// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $bridge from "./routes/bridge.tsx";
import * as $faucet from "./routes/faucet.tsx";
import * as $index from "./routes/index.tsx";
import * as $bridge_Form from "./islands/bridge/Form.tsx";
import * as $bridge_LegalsPopup from "./islands/bridge/LegalsPopup.tsx";
import * as $bridge_Toast from "./islands/bridge/Toast.tsx";
import * as $bridge_Toaster from "./islands/bridge/Toaster.tsx";
import * as $common_Balance from "./islands/common/Balance.tsx";
import * as $common_Connector from "./islands/common/Connector.tsx";
import * as $common_ListInput from "./islands/common/ListInput.tsx";
import * as $common_Navbar from "./islands/common/Navbar.tsx";
import * as $common_Receiver from "./islands/common/Receiver.tsx";
import * as $common_Web3Input from "./islands/common/Web3Input.tsx";
import * as $faucet_UI from "./islands/faucet/UI.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/bridge.tsx": $bridge,
    "./routes/faucet.tsx": $faucet,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/bridge/Form.tsx": $bridge_Form,
    "./islands/bridge/LegalsPopup.tsx": $bridge_LegalsPopup,
    "./islands/bridge/Toast.tsx": $bridge_Toast,
    "./islands/bridge/Toaster.tsx": $bridge_Toaster,
    "./islands/common/Balance.tsx": $common_Balance,
    "./islands/common/Connector.tsx": $common_Connector,
    "./islands/common/ListInput.tsx": $common_ListInput,
    "./islands/common/Navbar.tsx": $common_Navbar,
    "./islands/common/Receiver.tsx": $common_Receiver,
    "./islands/common/Web3Input.tsx": $common_Web3Input,
    "./islands/faucet/UI.tsx": $faucet_UI,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
