import "../css/home.css";

import refs from "../js/refs.js";

const { home } = refs;
const homeTitle = document.createElement("h2");
homeTitle.textContent = "House";

const homeContent = document.createElement("p");
let content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deleniti molestiae odit quasi corrupti doloribus repellendus, natus perferendis adipisci, exercitationem distinctio explicabo eveniet maiores! Voluptatem sunt esse, unde officia exercitationem, autem eaque porro voluptas excepturi tenetur ratione perferendis veritatis dolores illo impedit temporibus mollitia voluptatum maiores. Facere aut, a similique adipisci qui excepturi expedita perspiciatis natus harum corrupti quia dicta sequi ratione rerum amet illo sint ipsum vel fugit fuga nulla eius odio inventore. Quaerat id nihil rem aliquam est."
homeContent.textContent = content;
home.append(homeTitle, homeContent);