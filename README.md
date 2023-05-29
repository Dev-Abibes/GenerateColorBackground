### GenerateColorBackground
Généerer la color aléatoire de background sur la page HTML
```js
function genererCouleurAleatoire() {
    const hex = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
        couleur += hex[Math.floor(Math.random() * hex.lenght)];
    }
    return couleur;
}
 ```
