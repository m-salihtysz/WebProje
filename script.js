function getTeamInfo() {
  const teamName = document.getElementById('teamName').value.trim();
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${encodeURIComponent(teamName)}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
      const teamInfoDiv = document.getElementById('teamInfo');

      if (data && data.teams && data.teams.length > 0) {
          const team = data.teams[0];
          teamInfoDiv.innerHTML = `
              <h2>${team.strTeam}</h2>
              <p>Ülke: ${team.strCountry}</p>
              <p>Kuruluş Yılı: ${team.intFormedYear || 'Bilgi Yok'}</p>
              <p>Stadyum: ${team.strStadium || 'Bilgi Yok'}</p>
          `;
      } else {
          teamInfoDiv.innerHTML = "<p>Böyle bir takım bulunamadı.</p>";
      }
  })
  .catch(error => {
      console.error('Hata:', error);
      document.getElementById('teamInfo').innerHTML = "<p>Veri alınamadı.</p>";
  });
}