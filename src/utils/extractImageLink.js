function extractImageLink(imageString) {
  let cleanedString = imageString.replace(/[\[\]"]/g, "");

  const linksArray = cleanedString.split(",");

  // حذف "i." از ابتدای لینک
  let link = linksArray[0].trim();
  if (link.startsWith("https://i.")) {
    link = link.replace("https://i.", "https://");
  }

  return link;
}

export default extractImageLink;
