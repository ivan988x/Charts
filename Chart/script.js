// LINECHART

const lineChart = document.getElementById("lineChart");

const labels = [
  "22 Maj",
  "23 Maj",
  "24 Maj",
  "25 Maj",
  "26 Maj",
  "27 Maj",
  "28 Maj",
  "29 Maj",
  "30 Maj",
  "01 Jun",
  "02 Jun",
  "03 Jun",
  "04 Jun",
  "05 Jun",
  "06 Jun",
  "07 Jun",
  "08 Jun",
  "09 Jun",
];

new Chart(lineChart, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Povratni pregledi",
        data: [
          1844, 1554, 1273, 1284, 1126, 946, 964, 1793, 1432, 1130, 1074, 954,
          856, 833, 1536, 1416, 1248, 1226,
        ],
        borderColor: "rgba(66, 138, 245, 1)",
      },
      {
        label: "Novi pregledi",
        data: [
          1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 712,
          610, 585, 847, 744, 756, 781,
        ],
        borderColor: "rgba(235, 134, 52, 1)",
      },
    ],
  },
});

// PIE CHART

const pieChart = document.getElementById("pieChart");

new Chart(pieChart, {
  type: "pie",
  data: {
    labels: ["Srbija", "BiH", "Hrvatska", "S. Makedonija", "CG", "Ostali"],
    datasets: [
      {
        label: "Države",
        data: [49.6, 20.3, 9.5, 3.6, 2.6, 14.4],
        backgroundColor: [
          "rgba(52, 235, 143, 1)",
          "rgba(235, 201, 52, 1)",
          "rgba(52, 153, 235, 1)",
          "rgba(235, 52, 119, 1)",
          "rgba(186, 52, 235, 1)",
          "rgba(52, 153, 170, 1)",
        ],
      },
    ],
  },
});

// BAR CHART

const barChart = document.getElementById("barChart");

new Chart(barChart, {
  type: "bar",
  data: {
    labels: [
      "13 - 17",
      "18 - 24",
      "25 - 34",
      "35 – 44",
      "45 – 54",
      "55 – 64",
      "65+",
    ],
    datasets: [
      {
        label: "Publika po godinama",
        data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(155, 159, 64, 1)",
        ],
      },
    ],
  },
});

// RADAR CHART

const radarChart = document.getElementById("radarChart");

new Chart(radarChart, {
  type: "radar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Publika po godinama",
        data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
      {
        label: "Publika po mjesecu rođenja",
        data: [6, 7, 3, 7, 5, 6, 7],
        backgroundColor: ["rgba(75, 192, 192, 1)"],
      },
    ],
  },
});

// DROP CHART

const dropChart = document.getElementById("dropChart");

new Chart(dropChart, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Isplata",
        animations: {
          y: {
            duration: 2000,
            delay: 500,
          },
        },
        data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
        borderColor: ["rgba(255, 99, 132, 1)"],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        fill: 1,
        tension: 0.5,
      },
      {
        label: "Uplata",
        data: [6, 7, 3, 7, 25, 6, 7],
        borderColor: ["rgba(75, 192, 192, 1)"],
        backgroundColor: ["rgba(75, 192, 192, 1)"],
      },
    ],
  },
  options: {
    animations: {
      y: {
        easing: "easeInOutElastic",
        from: (ctx) => {
          if (ctx.type === "data") {
            if (ctx.mode === "default" && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
        },
      },
    },
  },
});

// DELAY CHART

const delayChart = document.getElementById("delayChart");
let delayed;
const label = [
  "1 January",
  "1 February",
  "1 March",
  "1 May",
  "1 June",
  "1 July",
  "1 August",
  "1 September",
  "1 October",
  "1 November",
  "1 December",
];
new Chart(delayChart, {
  type: "bar",
  data: {
    labels: label,
    datasets: [
      {
        label: "Ivan",
        data: [
          25.7, 43.3, 34.4, 13.6, 78.6, 1.2, 25.3, 45, 56.7, 23.5, 12.6, 5.6,
        ],
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Ivana",
        data: [
          37.7, 25.3, 45, 56.7, 12.6, 5.6, 28.2, 0.3, 13.6, 78.6, 1.2, 1.7,
          23.3,
        ],
        backgroundColor: "rgba(255, 206, 86, 1)",
      },
      {
        label: "Marko",
        data: [1.7, 23.3, 54.4, 65, 89.6, 45.2, 25.3, 25.3, 45, 56.7, 25.3, 45],
        backgroundColor: "rgba(255, 159, 64, 1)",
      },
    ],
  },
  options: {
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});
