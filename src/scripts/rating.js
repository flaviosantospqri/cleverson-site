import axios from "axios";

async function fetchRatingData() {
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/details/json",
      {
        params: {
          place_id: "ChIJCQtJeB1_mAARoTM1rCabijk",
          fields: "rating,user_ratings_total",
          key: "AIzaSyDrCK2uGIUeMjdhkkYKG6cMsWL9Yq-2aGo",
        },
      }
    );

    const data = response.data.result;

    console.log("Dados da API:", data);

    // Preenche as estrelas e o texto de classificação
    const rating = data.rating;
    const userRatingsTotal = data.user_ratings_total;

    const starsFilled = "★".repeat(Math.round(rating));
    const starsEmpty = "☆".repeat(5 - Math.round(rating));

    document.getElementById(
      "rating-stars"
    ).innerHTML = `${starsFilled}${starsEmpty}`;
    document.getElementById(
      "rating-text"
    ).innerText = `${rating} de 5 estrelas (${userRatingsTotal} avaliações)`;
  } catch (error) {
    console.error("Erro ao pegar dados da API:", error);
  }
}

// Chama a função quando a página for carregada
fetchRatingData();
