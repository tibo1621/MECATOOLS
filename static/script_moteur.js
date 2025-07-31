let monGraphique = null;

document.getElementById("btnCalcul").addEventListener("click", function () {
  // Récupérer les valeurs
  const masse = parseFloat(document.getElementById("masse").value);
  const penteDeg = parseFloat(document.getElementById("pente").value);
  const vitesse = parseFloat(document.getElementById("vitesse").value);
  const acc = parseFloat(document.getElementById("acc").value);
  const d = parseFloat(document.getElementById("diametre").value);
  const nb_moteur = parseFloat(document.getElementById("nb_moteur").value);
  const tension = parseFloat(document.getElementById("tension").value);
  const temps = parseFloat(document.getElementById("temps").value);
  const rend = parseFloat(document.getElementById("rendement").value);
  const reducteur = parseFloat(document.getElementById("reducteur").value);

  // Constantes fixes
  const sur = 0.1;
  const g = 9.81;
  const Den = 1.2;
  const Crr = 0.01;
  const C = 1;

  // Vérification des valeurs
  if (
    isNaN(masse) || isNaN(penteDeg) || isNaN(vitesse) || isNaN(acc) ||
    isNaN(d) || isNaN(nb_moteur) || isNaN(tension) || isNaN(temps) ||
    isNaN(rend) || isNaN(reducteur)
  ) {
    alert("Veuillez remplir correctement tous les champs nécessaires.");
    return;
  }

  // Calculs intermédiaires
  const penteRad = penteDeg * Math.PI / 180;
  const rayon = (d / 100) / 2;
  const v_ang = (vitesse / rayon) * reducteur;
  const tr_min = v_ang * 60 / (2 * Math.PI);
  const Fa = masse * acc;
  const Fs = masse * g * Math.sin(penteRad);
  const Fopp = (0.5 * Den * C * sur * vitesse * vitesse) + (masse * g * Crr);
  const Fn = Fa + Fs + Fopp;
  const cou_tot = (Fn * rayon) / reducteur;
  const cou = cou_tot / nb_moteur;
  const puissance_tot = cou_tot * v_ang;
  const puissance_elec_tot = puissance_tot / (rend / 100);
  const puissance = puissance_elec_tot / nb_moteur;
  const I = puissance / tension;
  const bat = I * (temps / 60);

  // Affichage résultats dans les inputs
  document.getElementById("resultat_puissance_tot").value = puissance_tot.toFixed(2);
  document.getElementById("resultat_puissance").value = puissance.toFixed(2);
  document.getElementById("resultat_couple_tot").value = cou_tot.toFixed(2);
  document.getElementById("resultat_couple").value = cou.toFixed(2);
  document.getElementById("resultat_vitesse_angulaire").value = v_ang.toFixed(2);
  document.getElementById("resultat_vitesse_angulaire_tr").value = tr_min.toFixed(2);
  document.getElementById("resultat_courant").value = I.toFixed(2);
  document.getElementById("resultat_batterie").value = bat.toFixed(2);

  // Afficher la section résultats si cachée
  const sectionResu = document.getElementById("resu");
  if (sectionResu.style.display === "none" || sectionResu.style.display === "") {
    sectionResu.style.display = "flex";
  }
});
