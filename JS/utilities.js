// const priceTag = document.getElementById("priceTag");
//   const priceTagString = priceTag.innerText;
//   const priceTagFloat = parseFloat(priceTagString);

function inputValueToFloat(inputId) {
  const priceTag = document.getElementById(inputId);
  const priceTagString = priceTag.innerText;
  const priceTagFloat = parseFloat(priceTagString);
  return priceTagFloat;
}
// const discountPrice = document.getElementById("discountPrice");
// discountPrice.innerText = priceAfterdiscount;
function getTheId(id, value) {
  const discountPrice = document.getElementById(id);
  discountPrice.innerText = value;
}
