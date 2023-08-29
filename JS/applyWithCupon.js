document.getElementById("buttonId").addEventListener("click", function () {
  const priceTag = document.getElementById("priceTag");
  const priceTagString = priceTag.innerText;
  const priceTagFloat = parseFloat(priceTagString);

  const valueInput = document.getElementById("cupon");
  const valueInputString = valueInput.value;

  if (valueInputString === "disc123") {
    const price = priceTagFloat;
    const discount = 30 / 100;
    const discountAmount = price * discount;
    const priceAfterdiscount = price - discountAmount;

    const discountPrice = document.getElementById("discountPrice");
    discountPrice.innerText = priceAfterdiscount;
  } else {
    discountPrice.innerText = priceTagFloat;
  }
});
