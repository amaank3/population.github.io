let currentYearIndex = 0;
const years = ['1970 Population', '1980 Population', '1990 Population', '2000 Population', '2010 Population', '2015 Population', '2020 Population', '2022 Population'];
const dataUrl = 'https://raw.githubusercontent.com/amaank3/amaank3.github.io/main/world_population.csv';
document.getElementById('refreshButton').addEventListener('click', function() {
    updateVisualization();
});
function updateVisualization() {
    const year = years[currentYearIndex];
    currentYearIndex = (currentYearIndex + 1) % years.length; // Cycle through the years
    const spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
        description: 'Population data by country for ' + year,
        data: { url: dataUrl },
        mark: 'bar',
        encoding: {
            x: { field: 'Country/Territory', type: 'nominal', axis: { labelAngle: -45 } },
            y: { field: year, type: 'quantitative' },
            color: { field: 'Continent', type: 'nominal' }
        }
    };
    vegaEmbed('#vis', spec);
}
updateVisualization();

