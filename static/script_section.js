document.getElementById("btnCalcul").addEventListener("click", function () {
  // Récupérer les valeurs
  const nb_courant = parseFloat(document.getElementById("nb_courant").value);
  const tension = parseFloat(document.getElementById("tension").value);
  const longueur = parseFloat(document.getElementById("longueur").value);


  // Vérification des valeurs
  if (
    isNaN(nb_courant) || isNaN(tension) || isNaN(longueur)
  ) {
    alert("Veuillez remplir correctement tous les champs nécessaires.");
    return;
  }

  // Calculs intermédiaires
  const section = (2 * longueur * nb_courant * resistivite) / chute_tension;

  // Affichage résultats dans les inputs
  document.getElementById("section").value = section.toFixed(2);

  // Afficher la section résultats si cachée
  const sectionResu = document.getElementById("resu");
  if (sectionResu.style.display === "none" || sectionResu.style.display === "") {
    sectionResu.style.display = "flex";
  }
});

