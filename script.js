function convert() {
    const input = document.getElementById("input").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    let result;

          if (from == "tex" && to == "tex") {
        result = input * 1;
        document.getElementById("output").innerHTML = input + " Tex Count = " + result.toFixed(2) + " Tex Count";
    } else if (from == "tex" && to == "denier") {
        result = input * 9;
        document.getElementById("output").innerHTML = input + " Tex Count = " + result.toFixed(2) + " Denier Count";
    } else if (from == "tex" && to == "grist") {
        result = input * 0.029;
        document.getElementById("output").innerHTML = input + " Tex Count = " + result.toFixed(2) + " Jute Count or Grist";
    } else if (from == "tex" && to == "cotton") {
        result = 590.5 / input;
        document.getElementById("output").innerHTML = input + " Tex Count = " + result.toFixed(2) + " English Cotton Count";
    } else if (from == "tex" && to == "worsted") {
        result = 886 / input;
        document.getElementById("output").innerHTML = input + " Tex Count = " + result.toFixed(2) + " Worsted Count";
    } else if (from == "tex" && to == "metric") {
        result = 1000 / input;
        document.getElementById("output").innerHTML = input + " Tex Count = " + result.toFixed(2) + " Metric Count";
    } else if (from == "tex" && to == "linen") {
        result = 1654 / input;
        document.getElementById("output").innerHTML = input + " Tex Count = " + result.toFixed(2) + " Linen Count";
    } else if (from == "tex" && to == "woollen") {
        result = 1938 / input;
        document.getElementById("output").innerHTML = input + " Tex Count = " + result.toFixed(2) + " Woollen Count";
    }
 
  else if (from == "denier" && to == "tex") {
        result = input * 0.111;
        document.getElementById("output").innerHTML = input + " Denier Count = " + result.toFixed(2) + " Tex Count";
    } else if (from == "denier" && to == "denier") {
        result = input * 1;
        document.getElementById("output").innerHTML = input + " Denier Count = " + result.toFixed(2) + " Denier Count";
    } else if (from == "denier" && to == "grist") {
        result = input*0.003;
        document.getElementById("output").innerHTML = input + " Denier Count = " + result.toFixed(2) + " Jute Count or Grist";
    } else if (from == "denier" && to == "cotton") {
        result = 5315 / input;
        document.getElementById("output").innerHTML = input + " Denier Count = " + result.toFixed(2) + " English Cotton Count";
    } else if (from == "denier" && to == "worsted") {
        result = 7972 / input;
        document.getElementById("output").innerHTML = input + " Denier Count = " + result.toFixed(2) + " Worsted Count";
    } else if (from == "denier" && to == "metric") {
        result = 9000 / input;
        document.getElementById("output").innerHTML = input + " Denier Count = " + result.toFixed(2) + " Metric Count";
    } else if (from == "denier" && to == "linen") {
        result = 14880 / input;
        document.getElementById("output").innerHTML = input + " Denier Count = " + result.toFixed(2) + " Linen Count";
    } else if (from == "denier" && to == "woollen") {
        result = 17440 / input;
        document.getElementById("output").innerHTML = input + " Denier Count = " + result.toFixed(2) + " Woollen Count";
    }
 
  else if (from == "grist" && to == "tex") {
        result = input * 34.45;
        document.getElementById("output").innerHTML = input + " Jute Count or Grist = " + result.toFixed(2) + " Tex Count";
    } else if (from == "grist" && to == "denier") {
        result = input * 310;
        document.getElementById("output").innerHTML = input + " Jute Count or Grist = " + result.toFixed(2) + " Denier Count";
    } else if (from == "grist" && to == "grist") {
        result = input * 1;
        document.getElementById("output").innerHTML = input + " Jute Count or Grist = " + result.toFixed(2) + " Jute Count or Grist";
    } else if (from == "grist" && to == "cotton") {
        result = 17.14 / input;
        document.getElementById("output").innerHTML = input + " Jute Count or Grist = " + result.toFixed(2) + " English Cotton Count";
    } else if (from == "grist" && to == "worsted") {
        result = 25.71 / input;
        document.getElementById("output").innerHTML = input + " Jute Count or Grist = " + result.toFixed(2) + " Worsted Count";
    } else if (from == "grist" && to == "metric") {
        result = 29.02 / input;
        document.getElementById("output").innerHTML = input + " Jute Count or Grist = " + result.toFixed(2) + " Metric Count";
    } else if (from == "grist" && to == "linen") {
        result = 48 / input;
        document.getElementById("output").innerHTML = input + " Jute Count or Grist = " + result.toFixed(2) + " Linen Count";
    } else if (from == "grist" && to == "woollen") {
        result = 56.25 / input;
        document.getElementById("output").innerHTML = input + " Jute Count or Grist = " + result.toFixed(2) + " Woollen Count";
    }

  else if (from == "cotton" && to == "tex") {
        result = 590.5 / input;
        document.getElementById("output").innerHTML = input + " English Cotton Count = " + result.toFixed(2) + " Tex Count";
    } else if (from == "cotton" && to == "denier") {
        result = 5315 / input;
        document.getElementById("output").innerHTML = input + " English Cotton Count = " + result.toFixed(2) + " Denier Count";
    } else if (from == "cotton" && to == "grist") {
        result = 17.14 / input;
        document.getElementById("output").innerHTML = input + " English Cotton Count = " + result.toFixed(2) + " Jute Count or Grist";
    } else if (from == "cotton" && to == "cotton") {
        result = input * 1;
        document.getElementById("output").innerHTML = input + " English Cotton Count = " + result.toFixed(2) + " English Cotton Count";
    } else if (from == "cotton" && to == "worsted") {
        result = input * 1.5;
        document.getElementById("output").innerHTML = input + " English Cotton Count = " + result.toFixed(2) + " Worsted Count";
    } else if (from == "cotton" && to == "metric") {
        result = input * 1.693;
        document.getElementById("output").innerHTML = input + " English Cotton Count = " + result.toFixed(2) + " Metric Count";
    } else if (from == "cotton" && to == "linen") {
        result = input * 2.8;
        document.getElementById("output").innerHTML = input + " English Cotton Count = " + result.toFixed(2) + " Linen Count";
    } else if (from == "cotton" && to == "woollen") {
        result = input * 3.28;
        document.getElementById("output").innerHTML = input + " English Cotton Count = " + result.toFixed(2) + " Woollen Count";
    }

  else if (from == "metric" && to == "tex") {
        result = 1000 / input;
        document.getElementById("output").innerHTML = input + " Metric Count = " + result.toFixed(2) + " Tex Count";
    } else if (from == "metric" && to == "denier") {
        result = 9000 / input;
        document.getElementById("output").innerHTML = input + " Metric Count = " + result.toFixed(2) + " Denier Count";
    } else if (from == "metric" && to == "grist") {
        result = 29.02 / input;
        document.getElementById("output").innerHTML = input + " Metric Count = " + result.toFixed(2) + " Jute Count or Grist";
    } else if (from == "metric" && to == "cotton") {
        result = input * 0.59;
        document.getElementById("output").innerHTML = input + " Metric Count = " + result.toFixed(2) + " English Cotton Count";
    } else if (from == "metric" && to == "worsted") {
        result = input * 0.886;
        document.getElementById("output").innerHTML = input + " Metric Count = " + result.toFixed(2) + " Worsted Count";
    } else if (from == "metric" && to == "metric") {
        result = input * 1;
        document.getElementById("output").innerHTML = input + " Metric Count = " + result.toFixed(2) + " Metric Count";
    } else if (from == "metric" && to == "linen") {
        result = input * 1.654;
        document.getElementById("output").innerHTML = input + " Metric Count = " + result.toFixed(2) + " Linen Count";
    } else if (from == "metric" && to == "woollen") {
        result = input * 1.938;
        document.getElementById("output").innerHTML = input + " Metric Count = " + result.toFixed(2) + " Woollen Count";
    }

  else if (from == "woollen" && to == "tex") {
        result = 1938 / input;
        document.getElementById("output").innerHTML = input + " Woollen Count = " + result.toFixed(2) + " Tex Count";
    } else if (from == "woollen" && to == "denier") {
        result = 17440 / input;
        document.getElementById("output").innerHTML = input + " Woollen Count = " + result.toFixed(2) + " Denier Count";
    } else if (from == "woollen" && to == "grist") {
        result = 56.25 / input;
        document.getElementById("output").innerHTML = input + " Woollen Count = " + result.toFixed(2) + " Jute Count or Grist";
    } else if (from == "woollen" && to == "cotton") {
        result = input * 0.305;
        document.getElementById("output").innerHTML = input + " Woollen Count = " + result.toFixed(2) + " English Cotton Count";
    } else if (from == "woollen" && to == "worsted") {
        result = input * 0.457;
        document.getElementById("output").innerHTML = input + " Woollen Count = " + result.toFixed(2) + " Worsted Count";
    } else if (from == "woollen" && to == "metric") {
        result = input * 0.516;
        document.getElementById("output").innerHTML = input + " Woollen Count = " + result.toFixed(2) + " Metric Count";
    } else if (from == "woollen" && to == "linen") {
        result = input * 0.853;
        document.getElementById("output").innerHTML = input + " Woollen Count = " + result.toFixed(2) + " Linen Count";
    } else if (from == "woollen" && to == "woollen") {
        result = input * 1;
        document.getElementById("output").innerHTML = input + " Woollen Count = " + result.toFixed(2) + " Woollen Count";
    }

  else if (from == "worsted" && to == "tex") {
        result = 886 / input;
        document.getElementById("output").innerHTML = input + " Worsted Count = " + result.toFixed(2) + " Tex Count";
    } else if (from == "worsted" && to == "denier") {
        result = 7972 / input;
        document.getElementById("output").innerHTML = input + " Worsted Count = " + result.toFixed(2) + " Denier Count";
    } else if (from == "worsted" && to == "grist") {
        result = 25.71 / input;
        document.getElementById("output").innerHTML = input + " Worsted Count = " + result.toFixed(2) + " Jute Count or Grist";
    } else if (from == "worsted" && to == "cotton") {
        result = input * 0.667;
        document.getElementById("output").innerHTML = input + " Worsted Count = " + result.toFixed(2) + " English Cotton Count";
    } else if (from == "worsted" && to == "worsted") {
        result = input * 1;
        document.getElementById("output").innerHTML = input + " Worsted Count = " + result.toFixed(2) + " Worsted Count";
    } else if (from == "worsted" && to == "metric") {
        result = input * 1.129;
        document.getElementById("output").innerHTML = input + " Worsted Count = " + result.toFixed(2) + " Metric Count";
    } else if (from == "worsted" && to == "linen") {
        result = input / 1.867;
        document.getElementById("output").innerHTML = input + " Worsted Count = " + result.toFixed(2) + " Linen Count";
    } else if (from == "worsted" && to == "woollen") {
        result = input / 2.188;
        document.getElementById("output").innerHTML = input + " Worsted Count = " + result.toFixed(2) + " Woollen Count";
    }

  else if (from == "linen" && to == "tex") {
        result = 1654 / input;
        document.getElementById("output").innerHTML = input + " Linen Count = " + result.toFixed(2) + " Tex Count";
    } else if (from == "linen" && to == "denier") {
        result = 14880 / input;
        document.getElementById("output").innerHTML = input + " Linen Count = " + result.toFixed(2) + " Denier Count";
    } else if (from == "linen" && to == "grist") {
        result = 48 / input;
        document.getElementById("output").innerHTML = input + " Linen Count = " + result.toFixed(2) + " Jute Count or Grist";
    } else if (from == "linen" && to == "cotton") {
        result = input * 0.357;
        document.getElementById("output").innerHTML = input + " Linen Count = " + result.toFixed(2) + " English Cotton Count";
    } else if (from == "linen" && to == "worsted") {
        result = input * 0.536;
        document.getElementById("output").innerHTML = input + " Linen Count = " + result.toFixed(2) + " Worsted Count";
    } else if (from == "linen" && to == "metric") {
        result = input * 0.605;
        document.getElementById("output").innerHTML = input + " Linen Count = " + result.toFixed(2) + " Metric Count";
    } else if (from == "linen" && to == "linen") {
        result = input * 1;
        document.getElementById("output").innerHTML = input + " Linen Count = " + result.toFixed(2) + " Linen Count";
    } else if (from == "linen" && to == "woollen") {
        result = input / 1.172;
        document.getElementById("output").innerHTML = input + " Linen Count = " + result.toFixed(2) + " Woollen Count";
    }

 else {
        document.getElementById("output").innerHTML = "Invalid input. Please try again.";
    }
}

    document.getElementById("output").innerHTML = generateOutput(input, from, to, result);
}

function generateOutput(input, from, to, result) {
    if (result !== undefined) {
        return `${input} ${from} = ${result.toFixed(2)} ${to}`;
    } else {
        return "Invalid input. Please try again.";
    }
}

document.getElementById("toggleButton").addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    const contentWrapper = document.querySelector(".content-wrapper");

    body.classList.toggle("dark-mode");
    contentWrapper.classList.toggle("dark-mode");
}
