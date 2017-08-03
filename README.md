# Index mixer

Given a MongoDB query, index mixer will return an array of all possible indexes that could potentially serve that query.

## Installation

```sh
npm install --save index-mixer
```

## Usage

```js
const indexMixer = require('index-mixer');

indexMixer({ 'name.first': 'Richard', 'vegan': true });

/* [{ 'name.first': 1 },
    { vegan: 1 },
    { 'name.first': 1, vegan: 1 },
    { vegan: 1, 'name.first': 1 }] */
```

## Note

`index-mixer` currently only returns ascending indexes (e.g. `{ name: 1 }`). Open a PR if you'd like to return descending indexes (e.g. `{ name: -1 }`) too.

## License

MIT
