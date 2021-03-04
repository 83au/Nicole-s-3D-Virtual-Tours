import { activateAccordion } from "./helpers";
import "./scss/main.scss";

const main = () => {
  // Initialize accordion functionality
  $(".accordion").on("click", activateAccordion);
};

// Initialize
$(main);
