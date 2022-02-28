## Fichier ts

```
console.log("Hello World!");

function sayHello(name: String) {
    console.log(`Hello ${name}`);
}

sayHello("Tom");
```

## Configuration de l'environement

Dans le terminal:
```
tsc --init
Created a new tsconfig.json with:
                                                                                            TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig.json
```

Ouvrir le fichier tsconfig.json afin de changer les valeurs de certains paramètres.

Find line starting with.. | Change to
--- | ---
"target": "es5" | "target": "es6"
// "outDir": "./",	| "outDir": "./dist",

Ensuite, dans la fenêtre Terminal de Visual Studio Code, exécuter la commande pour compiler tous vos fichiers typescript en fichiers javascript.

```
tsc
```

Enfin, exécuter l'exemple.

```
node dist/console.js
```