# react-native-svg-transforms

This is a rough and ready package that converts invalid SVG props from into valid ones.

For instance if you're using `react-native-svg` but wish your code to also render on web with `react-native-web` you will notice that the props on your SVG components in the DOM are wrong. Rather than

```javascript
<svg transform="translate(123, 456)" />
```

You'll get

```javascript
<svg tranlateX="123" translateY="123" />
```

Which won't work.

This package applies a naive transform that takes those props, converts them to a string for the `translate` DOM attribute and omits those that are invalid.

If this project becomes useful to more people I'll add tests, TypeScript, linting, docs etc but for now it does the job nicely and may well for you too.

I've put zero testing into things like refs so your mileage may very well vary.

# Usage

```
yarn add react-native-svg-transforms
# or
npm i react-native-svg-transforms 
```


In your WebPack config add the following module alias and you're good to go.

```javascript
{
  ...
  "react-native-svg": "react-native-svg-transforms"
}
```