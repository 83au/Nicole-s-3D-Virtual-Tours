import { activateAccordion } from "./helpers";
import global from "./global";
import "./scss/pages/services.scss";

const services = () => {
  global();

  // Initialize accordion functionality
  $(".accordion").on("click", activateAccordion);
};

// Initialize
$(services);
