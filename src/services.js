import { activateAccordion } from "./helpers";
import global from "./global";

const services = () => {
  global();

  // Initialize accordion functionality
  $(".accordion").on("click", activateAccordion);
};

// Initialize
$(services);
