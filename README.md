# MomentReplacement

Example of how to analyze your Angular bundle

[ngx-builders](https://github.com/ngx-builders/source-map-analyzer#setting-up-this-builder) is a great library to make this process easy:

1. Install `ngx-builders`
```cmd
ng add @ngx-builders/analyze
```

2. Install `source-map-explorer`
```cmd
npm i -D source-map-explorer
```

3. Update `package.json` to have an analyze npm script:

```json
{
  "name": "[YOUR_PROJECT_NAME]",// Likely will be your project name, but doesn't have to be
  "scripts": {
    "ng": "ng",
    // ...
    "analyze": "ng run [YOUR_PROJECT_NAME]:analyze",// You can find your project name in angular.json under the projects property
  },
}
```

4. Run analyze npm script

```cmd
npm run analyze
```

You should see your application build and your browser should open the results
