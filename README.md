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
 ### Simplifier la logique de code
 Si nous voulons facilter le code, de coder quelques lignes 
 de recuperer les elements sur HTML et de valider le button aussi
 avec le déclenchemenet d'evenement AddEventListener
 ```js
 document.body.style.backgroundColor = genererCouleurAleatoire();
  ```
 ```js
 document.getElementById('monElement').style.backgroundColor = genererCouleurAleatoire();
 ```
