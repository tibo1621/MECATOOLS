document.getElementById("btnCalcul").addEventListener("click", function () {
  // Récupérer les valeurs
  const vitesse = parseFloat(document.getElementById("vitesse").value);
  const rotation = parseFloat(document.getElementById("rotation").value);
  const diametre = parseFloat(document.getElementById("diametre").value);


  // Vérification des valeurs
  if (
    isNaN(vitesse) || isNaN(rotation) || isNaN(diametre)
  ) {
    alert("Veuillez remplir correctement tous les champs nécessaires.");
    return;
  }

  // Calculs intermédiaires
  const reduction = (rotation * Math.PI * (diametre/100)) / (60 * vitesse);
  const reductionRatio = Math.round(reduction);

  // Affichage résultats dans les inputs
  document.getElementById("reduction").value = `${reductionRatio}:1`;

  // Afficher la section résultats si cachée
  const sectionResu = document.getElementById("resu");
  if (sectionResu.style.display === "none" || sectionResu.style.display === "") {
    sectionResu.style.display = "flex";
  }
});

