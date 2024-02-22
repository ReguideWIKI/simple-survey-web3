import { useEffect, useState } from "react";
import { Button } from "@mui/material";
// import "./styles/App.css";

const WalletConnection = (): React.ReactElement =>  {
  const [isMetamaskInstalled, setIsMetamaskInstalled] =
    useState<boolean>(false);
  const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

  useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  }, []);

  //Does the User have an Ethereum wallet/account?
  async function connectMetamaskWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: string[]) => {
        setEthereumAccount(accounts[0]);
      })
      .catch((error: any) => {
        alert(`Something went wrong: ${error}`);
      });
  }

  return (
    <div>
      {ethereumAccount !== null && !!isMetamaskInstalled ? (
        <Button
          variant="outlined"
          aria-disabled={true}
          sx={{
            backgroundColor: "black",
            textTransform: "unset",
            ":hover": {
              bgcolor: "#222629",
              color: "white",
            },
          }}
          onClick={connectMetamaskWallet}
        >
          {ethereumAccount.slice(0, 6) + ".." + ethereumAccount.slice(38, 42)}
        </Button>
      ) : isMetamaskInstalled && ethereumAccount === null ? (
        <Button
          variant="outlined"
          aria-disabled={true}
          sx={{
            backgroundColor: "black",
            color: "white",
            ":hover": {
              bgcolor: "#222629",
              color: "white",
            },
          }}
          onClick={connectMetamaskWallet}
        >
          Connect Wallet
        </Button>
      ) : (
        <p>Please install wallet</p>
      )}
    </div>
  );
}

export default WalletConnection;
