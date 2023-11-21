const accordionItems = document.querySelector(".accordion-items");


const productsAPI = "https://fakestoreapi.com/products";

const productArray = [];

const fetchProducts = async () => {
  try {
    const response = await fetch(productsAPI);
    const data = await response.json();
   return data
  } catch (error) {
    console.log(error);
  }
};

const getSpecificData = async () => {
  try {
    const products = await fetchProducts();
    const specificProducts = products.slice(0,5).map((product) => ({
      title: product.title,
      productDescription: product.description,
    }));
    productArray.push(specificProducts);

    return specificProducts;
  } catch (error) {
    console.log(error);
  }
};

getSpecificData();

const createAccordionItems = async () => {
    const datas = await getSpecificData();
  
    datas.forEach((data) => {
      const acTitle = document.createElement("div");
      const acDesc = document.createElement("div");
      const acTitleP = document.createElement("p");
      const acDescP = document.createElement("p");
      const i = document.createElement("i");
  
      acTitleP.textContent = data.title;
      acDescP.textContent = data.productDescription;
  
      acTitle.classList.add("accordion-title");
      acDesc.classList.add("accordion-description");
  
      // İkonu başlangıçta fa-plus olarak ayarla
      i.classList.add("fa-solid", "fa-plus");
  
      acTitle.appendChild(acTitleP);
      acTitle.appendChild(i);
      acDesc.appendChild(acDescP);
      accordionItems.appendChild(acTitle);
      accordionItems.appendChild(acDesc);
  
      acTitle.addEventListener("click", () => {
        if (acDesc.classList.contains("active")) {
          acDesc.classList.remove("active");
          i.classList.remove("fa-minus");
          i.classList.add("fa-plus");

        } else {
          accordionItems
            .querySelectorAll(".accordion-description")
            .forEach((desc) => {
              desc.classList.remove("active");
              const icon = desc.previousSibling.querySelector("i");
              icon.classList.remove("fa-minus");
              icon.classList.add("fa-plus");
            });
  
          acDesc.classList.add("active");
          i.classList.remove("fa-plus");
          i.classList.add("fa-minus");
        }
      });
    });
  };
  
  
createAccordionItems();
