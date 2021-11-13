const Btn = document.body.querySelector("button");
Btn.addEventListener("click", () => {
  alert("경고");
});

fetch("time.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const $p = document.body.querySelector(".title");
    data.map((item, idx) => {
      const new_element = document.createElement("div");
      new_element.innerHTML = `${idx}교시 : ${item}`;
      $p.insertAdjacentElement("afterend", new_element);
    });
  });
