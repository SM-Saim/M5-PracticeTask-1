document.getElementById("buttonId").addEventListener("click", function () {
  // const priceTag = document.getElementById("priceTag");
  // const priceTagString = priceTag.innerText;
  // const priceTagFloat = parseFloat(priceTagString);
  const valueOfInput = inputValueToFloat("priceTag");

  const price = valueOfInput;
  const discount = 30 / 100;
  const discountAmount = price * discount;
  const priceAfterdiscount = price - discountAmount;

  // const discountPrice = document.getElementById("discountPrice");
  // discountPrice.innerText = priceAfterdiscount;
  getTheId("discountPrice", priceAfterdiscount);
});
