// Генерация звёздочек из рейтинга
export function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars += "⭐";
  }
  if (hasHalfStar) {
    stars += "🌟";
  }

  return stars;
}
