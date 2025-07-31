document.getElementById("btnCalcul").addEventListener("click", function () {
  // Récupérer les valeurs
  const courant = parseFloat(document.getElementById("courant").value);
  const temps = parseFloat(document.getElementById("temps").value);


  // Vérification des valeurs
  if (
    isNaN(courant) || isNaN(temps)
  ) {
    alert("Veuillez remplir correctement tous les champs nécessaires.");
    return;
  }

  // Calculs intermédiaires
  const capacite = courant * (temps/60);

  // Affichage résultats dans les inputs
  document.getElementById("capacite").value = capacite.toFixed(2);

  // Afficher la section résultats si cachée
  const sectionResu = document.getElementById("resu");
  if (sectionResu.style.display === "none" || sectionResu.style.display === "") {
    sectionResu.style.display = "flex";
  }
});

