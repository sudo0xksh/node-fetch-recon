# 🌐 Node Fetch Recon

Node Fetch Recon is a simple Node.js CLI tool that fetches a URL
and prints basic response information for quick inspection.

It is useful for reconnaissance, debugging, and understanding
how servers respond to requests.

---

## Overview

During recon or debugging, it is often useful to quickly:
- Check HTTP status codes
- See response size
- Preview response content

This tool provides that information with a single command.

---

## Features

- Fetches any HTTP/HTTPS URL
- Displays response status code
- Prints response body length
- Shows a short preview of the response body
- Lightweight and fast
- No external dependencies

---

## Usage

Run the script like this  
```bash
node fetch_recon.js <url>
