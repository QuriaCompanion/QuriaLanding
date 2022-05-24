function changeFeature(id) {
  var text = document.getElementById("feature-text");
  var img = document.getElementById("feature-img");
  var title = document.getElementById("feature-title");
  switch (id) {
    case "1":
      title.innerText = "Personnage";
      text.innerText =
        "En arrivant sur notre application, vous aurez accès à l'ensemble de l'équipement présent sur votre personnage avec la possibilité de le changer ou bien d'en voir toutes les possibilités.";
      img.src = "assets/img/profile.png";
      break;
    case "2":
      title.innerText = "Création d'équipements";
      text.innerText =
        "À l'aide de notre créateur d'équipements, vous allez pouvoir créer un équipement qui vous correspond en choisissant l'éxotique de votre choix, les statistiques qui sont les plus importantes pour vous ainsi que de nombreux autres paramètres. Après avoir choisi ces paramètres, nous vous soumettrons les différents équipements qui correspondent à vos précédents choix afin que vous choisissiez les équipements qui VOUS correspondent.";
      img.src = "assets/img/builder.png";
      break;
    case "3":
      title.innerText = "Coffre";
      text.innerText =
        "Vous retrouverez l'ensemble de vos armes et armures dans la catégorie coffre de notre application. Vous pourrez y accéder selon le type d'armes ou d'armures présent. En cliquant sur l'un de vos items, vous aurez le choix de directement le transférer sur votre personnage actuellement sélectionné en cliquant sur le bouton TRANSFÉRER ou en voir les spécificités en cliquant sur le bouton DETAILS.";
      img.src = "assets/img/vault.png";
      break;
    case "4":
      title.innerText = "Collection";
      text.innerText =
        "Vous pourrez retrouver l'ensemble des armes et armures présents dans Destiny 2 dans l'onglet Collection. Vous y trouverez les statistiques de l'item ainsi que tous ses attributs et son origine.";
      img.src = "assets/img/collection.png";
      break;
  }
}
