/*
=========================================
Node Fetch Recon
=========================================

A simple Node.js CLI tool to fetch a URL
and inspect response status and body.

Developed by sudo_0xksh
=========================================
*/

const url = process.argv[2];

if (!url) {
  console.log("Usage: node fetch_recon.js <url>");
  process.exit(1);
}

fetch(url)
  .then(res => {
    console.log("Status:", res.status);
    return res.text();
  })
  .then(body => {
    console.log("Body length:", body.length);
    console.log("Preview:\n", body.slice(0, 300));
  })
  .catch(err => {
    console.log("Error:", err.message);
  });

console.log("=========================================");
console.log("Developed by sudo_0xksh");
console.log("=========================================");
