

import {
    Chart,
    initTE,
  } from "tw-elements";
  
  initTE({ Chart });
  

// const graph = () => {

  const dataBarCustomTooltip = {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Traffic",
          data: [30, 15, 62, 65, 61, 65, 40],
        },
      ],
    },
  };
  
  const optionsBarCustomTooltip = {
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              label = `${label}: ${context.formattedValue} users`;
              return label;
            },
          },
        },
      },
    },
  };
  
  new Chart(
    document.getElementById("bar-chart-custom-tooltip"),
    dataBarCustomTooltip,
    optionsBarCustomTooltip
  );

  return { optionsBarCustomTooltip, dataBarCustomTooltip }
// }
