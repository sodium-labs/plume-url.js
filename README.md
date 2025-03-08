<div align="center">
<br />
    <h1>Plume URL.js</h1>
    <br />
    <p>
        <a href="https://discord.gg/8PDXWSHH7k"><img src="https://img.shields.io/discord/1336303640725553213?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
        <a href="https://www.npmjs.com/package/@sodiumlabs/plume-url"><img src="https://img.shields.io/npm/v/@sodiumlabs/plume-url.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/@sodiumlabs/plume-url"><img src="https://img.shields.io/npm/dt/@sodiumlabs/plume-url.svg?maxAge=3600" alt="npm downloads" /></a>
        <a href="https://github.com/cbrra/plume-url.js/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/cbrra/plume-url.js?logo=github&logoColor=ffffff" /></a>
    </p>
</div>

# About

`@sodiumlabs/plume-url` is a module that allows you to easily use Plume URL.

# Installation

```sh
npm install @sodiumlabs/plume-url
```

# Links

- [Plume URL](https://url.ptarmigan.xyz)
- [Plume URL documentation](https://url.ptarmigan.xyz/docs)
- [Module references](#references)
- [Discord server](https://discord.gg/8PDXWSHH7k)
- [GitHub](https://github.com/cbrra/plume-url.js)
- [npm](https://npmjs.com/package/@sodiumlabs/plume-url)

# Examples

If you are developing a Discord bot using `discord.js`, here is how to use Plume URL:

```js
const { Client } = require("discord.js");
const { PlumeURL } = require("@sodiumlabs/plume-url");

// Your discord.js client
const client = new Client({
    /* ... */
});

// Attach PlumeURL to your client
client.plumeURL = new PlumeURL({ apiKey: "YOUR-API-KEY" });
```

You can now use Plume URL anywhere in your bot. <br/>For example, in a slash command:

```js
const userId = "619838036846575617";

// Create a new URL
const data = await client.plumeURL.createURL({
    url: "https://google.com",
    customId: userId, // The custom ID allows your users to retrieve their URLs later
});
console.log(data);

// Search for the URLs you created
// You can filter by custom ID if needed
const urls = await client.plumeURL.search({ limit: 5, customId: userId });
console.log(urls);
```

# References

PlumeURL class methods. <br/> You can find the types definitions on the [API documentation](https://url.ptarmigan.xyz/docs).

```js
createURL(options: CreateURLOptions): Promise<URLData>;
search({ customId, limit, page, expired }: SearchURLOptions): Promise<SearchURLResults>;
getURL(id: string): Promise<URLData>;
editURL(id: string, options: EditURLOptions): Promise<void>;
deleteURL(id: string): Promise<void>;
```

# Help

If you don't understand something in the documentation, are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [Discord Server](https://discord.gg/8PDXWSHH7k).
