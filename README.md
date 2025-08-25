<div align="center">
  <img src="client/images/logo.svg" alt="Ethos" height="72" />
  
  <h2>Ethos — Web3 Ethereum Transactions DApp</h2>
  
  <p>Send ETH, attach a message and gif, and browse on-chain transactions with animated GIFs.</p>

  <p>
    <a href="#-demo">Demo</a> •
    <a href="#-features">Features</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-notes">Notes</a>
  </p>

  <p>
    <a href="https://img.shields.io/badge/stack-React,_Vite,_Tailwind-blue"><img alt="stack" src="https://img.shields.io/badge/stack-React,_Vite,_Tailwind-blue"/></a>
    <a href="https://img.shields.io/badge/Ethers.js-v5-764abc"><img alt="ethers" src="https://img.shields.io/badge/Ethers.js-v5-764abc"/></a>
    <a href="https://img.shields.io/badge/Hardhat-2.x-yellow"><img alt="hardhat" src="https://img.shields.io/badge/Hardhat-2.x-yellow"/></a>
    <a href="https://img.shields.io/badge/license-MIT-green"><img alt="license" src="https://img.shields.io/badge/license-MIT-green"/></a>
  </p>
</div>

---

### 🎬 Demo

![Ethos demo](docs/demo.gif)

---

### ✨ Features

- **Send ETH transactions** with message and gifs to any address
- **On-chain history** displayed via the `Transactions` contract
- **GIF previews** using gifs via GIPHY API
- **Responsive UI** with Tailwind and glassmorphism styling

---

### 🗂 Project Structure

```
client/                 # React + Vite frontend (Tailwind, Ethers)
  src/
    context/TransactionContext.jsx   # Web3 connection + contract calls
    utils/constants.js               # contract ABI + address
    hooks/useFetch.jsx               # Giphy integration
    components/                      # UI components
smart_contract/         # Hardhat project for Solidity contracts
  contracts/Transactions.sol         # Core contract
  scripts/deploy.js                  # Deployment script
  hardhat.config.js                  # Hardhat config (update networks!)
```

---

### 📝 Notes

- Early project: built when I was just getting started on the web, mainly to tinker with Web3, smart contracts, and frontend integration.
- Originally targeted the Ropsten testnet (now deprecated). If you try it today, use Sepolia and update explorer links in `client/src/components/Transactions.jsx`.
- No secrets are committed in this repo; never commit private keys or RPC URLs.

### 📜 License

MIT


