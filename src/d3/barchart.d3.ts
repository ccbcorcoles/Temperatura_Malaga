import { select} from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { malagaStats, avg_Temp, min_Temp, max_Temp } from "./barchart.data";
import { extent} from "d3-array";
import { axisBottom, axisLeft } from "d3-axis";


const d3 = {
    select,
    scaleBand,
    scaleLinear,
    extent,
    axisBottom,
    axisLeft
}

// Fijamos las dimensiones

const width = 500;
const height = 300;
const padding = 50;

// Creamos la tarjeta

const card = d3
    .select("#root")
    .append("div")
    .attr("class", "card");

// Creamos el lienzo SVG

const svg = card
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `${-padding} ${-padding} ${width + 2 * padding} ${height + 2 * padding}`);


// Creamos las escalas

const ScaleX = d3
    .scaleBand<number>()
    .domain(avg_Temp.map((d, i) => i))
    .range([0, width]) // Use RangeRound to get pixel perfect layout
    .paddingInner(0.1); // Space between bars, wathout! pecentages values, ranger number

const ScaleY = d3
    .scaleLinear()
    .domain(d3.extent(malagaStats.reduce((acc, s) => acc.concat(s.values), [])))
    .range([height, 0]);



// Añadimos gráfico de barras con las temperaturas máximas

const barGroup_max = svg
    .append("g");

barGroup_max
    .selectAll("rect")
    .data(max_Temp)
    .enter()
    .append("rect")
    .attr("x", (d, i) => ScaleX(i))
    .attr("y", (d) => ScaleY(d))
    .attr("width", ScaleX.bandwidth())
    .attr("height", d => height - ScaleY(d))
    .attr("fill", "url(#barGradient)")
    .style("stroke", "black")
    .style("stroke-width", "1px")


// Añadimos gráfico de barras con las temperaturas medias

const barGroup_avg = svg
    .append("g");

barGroup_avg
    .selectAll("rect")
    .data(avg_Temp)
    .enter()
    .append("rect")
    .attr("x", (d, i) => ScaleX(i))
    .attr("y", (d) => ScaleY(d))
    .attr("width", ScaleX.bandwidth())
    .attr("height", d => height - ScaleY(d))
    .attr("fill", "url(#barGradient)")
    .style("stroke", "black")
    .style("stroke-width", "1px")


// Añadimos gráfico de barras con las temperaturas minímas

const barGroup_min= svg
    .append("g");

barGroup_min
    .selectAll("rect")
    .data(min_Temp)
    .enter()
    .append("rect")
    .attr("x", (d,i) => ScaleX(i))
    .attr("y", (d) => ScaleY(d))
    .attr("width", ScaleX.bandwidth())
    .attr("height", d => height - ScaleY(d))
    .attr("fill", "url(#barGradient)")
    .style("stroke", "black")
    .style("stroke-width", "1px")
 


//Añadimos los ejes

const meses = ["J", "F", "M", "A", "M", "J", "JL", "A", "S", "O", "N", "D"]

const axisGroup = svg
    .append("g")

axisGroup
    .append("g")
    .call(d3.axisLeft(ScaleY));

axisGroup
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(ScaleX).tickFormat((i) => meses[i]));

// Etiquetas para el eje X
svg
    .append("text")
    .attr("transform", "rotate(0)")
    .attr("x",260)
    .attr("y",340)
    .style("text-anchor", "middle")
    .text("Meses");

// Etiquetas para el eje Y
svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x",-100)
    .attr("y", -30)
    .style("text-anchor", "end")
    .text("Temperaturas");

//Añadimos el gradiente

const gradient = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", "barGradient")
    .attr("gradientUnits", "userSpaceOnUse")
    .attr("x1", "0")
    .attr("y1", height)
    .attr("x2", "0")
    .attr("y2", "0");

gradient
    .append("stop")
    .attr("offset", "0")
    .attr("stop-color", "blue");

gradient
    .append("stop")
    .attr("offset", "50%")
    .attr("stop-color", "purple");

gradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "red");


