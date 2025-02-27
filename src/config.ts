import { createConfig } from "@0xsequence/kit";

// Get your own keys on sequence.build
const projectAccessKey = import.meta.env.VITE_PROJECT_ACCESS_KEY;
const waasConfigKey = import.meta.env.VITE_WAAS_CONFIG_KEY;
const chainId = Number(import.meta.env.VITE_CHAIN_ID);
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const appleClientId = import.meta.env.VITE_APPLE_CLIENT_ID;
const appleRedirectURI = window.location.origin + window.location.pathname;
const walletConnectId = import.meta.env.VITE_WALLET_CONNECT_ID;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const universalConfig: any = createConfig("universal", {
  projectAccessKey: projectAccessKey,
  chainIds: [chainId],
  defaultChainId: chainId,
  appName: "Kit Starter",
  google: true,
  apple: true,
  walletConnect: {
    projectId: walletConnectId,
  },
  metaMask: true,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const embeddedConfig: any = createConfig("waas", {
  projectAccessKey: projectAccessKey,
  chainIds: [chainId],
  defaultChainId: chainId,
  appName: "Allowlist Embedded Wallet Boilerplate",
  waasConfigKey: waasConfigKey,
  google: false,
  apple: false,
  walletConnect: false,
  coinbase: false,
  googleClientId: googleClientId,
  appleClientId: appleClientId,
  appleRedirectURI: appleRedirectURI,
  wagmiConfig: {
    multiInjectedProviderDiscovery: false,
  },
  metaMask: false,
});
