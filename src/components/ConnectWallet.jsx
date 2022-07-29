import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export function ConnectWallet({ connectWallet, networkError, dismiss, connectToIoPayWallet }) {
    return (
        <MDBContainer align="center">
            <br/>
            <MDBRow align="center">
                {networkError && (
                    <NetworkErrorMessage
                        message={networkError}
                        dismiss={dismiss}
                    />
                )}
                <p>Please connect to your wallet.</p>
            </MDBRow>
            <button
                className="btn btn-warning"
                type="button"
                onClick={connectWallet}
            >
                Connect Metamask Wallet
            </button>
            <br/>
            <br/>
            <button
                className="btn btn-warning"
                type="button"
                onClick={connectToIoPayWallet}
            >
                Connect To IoPay Mobile
            </button>
        </MDBContainer>
  );
}
