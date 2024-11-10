# IPFS File Upload with React

This project is a React-based application that enables users to upload files to the InterPlanetary File System (IPFS), a decentralized storage solution. By leveraging IPFS, users can store files in a distributed manner, ensuring security, accessibility, and tamper-proof storage. The app connects to an IPFS node through `ipfs-http-client` and allows users to upload, view, and retrieve files directly from IPFS.

## Features

- **File Upload**: Allows users to upload files to IPFS by selecting them from their device.
- **Decentralized Storage**: Stores files on IPFS, eliminating reliance on centralized storage providers.
- **File Retrieval**: Displays uploaded files along with their unique Content Identifier (CID) for easy retrieval and sharing.
- **Progress Indicators**: Shows a loading indicator during the file upload process.

## Prerequisites

Before running the project, make sure you have:

- [Node.js](https://nodejs.org/) and npm installed
- An IPFS node, or access to a public IPFS gateway (e.g., Infura)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ipfs-file-upload.git
   cd ipfs-file-upload

