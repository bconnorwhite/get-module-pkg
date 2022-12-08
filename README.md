<div align="center">
  <h1>get-module-pkg</h1>
  <a href="https://npmjs.com/package/get-module-pkg">
    <img alt="npm" src="https://img.shields.io/npm/v/get-module-pkg.svg">
  </a>
  <a href="https://github.com/bconnorwhite/get-module-pkg">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/get-module-pkg.svg">
  </a>
</div>

<br />

> Get your module's `package.json` without importing it

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/get-module-pkg">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/get-module-pkg?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---

Rather than hardcoding your module's version number (and then forgetting to update it when you release a new version), you can read it from your `package.json` file. This is useful for things like outputting the version for your CLI application.

Why not just import your `package.json`? Importing your `package.json` can break your project's structure when using TypeScript if `package.json` is outside of your source folder.

## Installation

```sh
npm install get-module-pkg
```

```sh
yarn add get-module-pkg
```

## Usage

### PackageJSON

Each function takes a single string argument, which is the path to any file in the module you want to get the `package.json` for. This is usually `import.meta.url` or `__filename` for CommonJS.

```ts
import { getModulePkg, getModulePkgSync } from "get-module-pkg";

// Async
const pkg = await getModulePkg(import.meta.url);
console.log(pkg.name);

// Sync
const pkg = getModulePkgSync(import.meta.url);
console.log(pkg.name);
```

### Version
You can also get the version directly:
```ts
import { getModuleVersion, getModuleVersionSync } from "get-module-pkg";

// Async
const version = await getModuleVersion(import.meta.url);
console.log(version);

// Sync
const version = getModuleVersionSync(import.meta.url);
console.log(version);
```

### Types

```ts
import { PackageJSON } from "get-module-pkg";
```

<br />

<h2>Dependencies<a href="https://www.npmjs.com/package/get-module-pkg?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/hackage-deps/v/get-module-pkg.svg"></a></h2>

- [find-up](https://npmjs.com/package/find-up): Find a file or directory by walking up parent directories
- [read-json-safe](https://www.npmjs.com/package/read-json-safe): Read objects from JSON files without try catch.
- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json

<br />

<h2>Dev Dependencies</h2>

- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [eslint](https://www.npmjs.com/package/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-bob](https://www.npmjs.com/package/eslint-config-bob): ESLint configuration for packages built with @bconnorwhite/bob
- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application scale JavaScript development

<br />

<h2>License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/get-module-pkg.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)

