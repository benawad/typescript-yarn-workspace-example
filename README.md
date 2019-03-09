# typescript-yarn-workspace-example

## Watch how this was made:

This branch: https://youtu.be/EoqzOEZIzhg

Entire playlist: https://www.youtube.com/playlist?list=PLN3n1USn4xll1d97ZtIk2t7UpSxWGdIn5

## Running

```
git clone https://github.com/benawad/typescript-yarn-workspace-example.git
cd typescript-yarn-workspace-example
yarn install
cd packages/common
yarn build
cd ../server
yarn add express
yarn add -D @types/express
yarn build
```
