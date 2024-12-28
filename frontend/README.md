# LMS Frontend

### Setup instruction

1. Clone the project

```
   
```

2. Move into the directory

```
   
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```

### Setup instructions for tailwind 

[tailwind official instruction doc] (https://tailwindcss.com/docs/installation)

1. install tailwind
```
   npm install -D tailwindcss
```

2. create tailwind config file
```
   npx tailwindcss init
```

3. Add file extensions to tailwind config file in the content file
```
   "./src/**/*.{html,js,jsx,ts,tsx}"
``` 

4. Add the tailwind directives at the top of the "index.css" file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add the following details in the plugin property of tainwind config
```
   [require("daisyui"), require("@tailwindcss/line-clamp")]
```


 ### Adding plugins and dependencies

```
npm install react-router-dom react-icons daisyui axios 

```