# KURTOSYS Front-end test

# Initial Setup
- Clone the repository
- Navigate to the project root
- Run bower install
- Run npm install
- Run grunt serve to run the site
- Run grunt test to test the site

# The task
Create an angular application which shows the fund and *share class*es information on a page
The page should have a list of funds where each fund has a dropdown to change *share class* on that specific fund. By default, the first *share class* is selected.
Make sure the application has tests included.

## Requirements
Get the `funds.json` by an AJAX call. Show properties described below

When a *share class* is selected/changed, it should get the line chart data for that specific ISIN - however the data response would be the same, pass the following parameters to the chart call:
- `from` date (unix timestamp)
- `to` date (unix timestamp)
- `isin` (string)

Use any chart library to show chart data. (HighCharts preferred)

When making the AJAX call for the line chart, make sure a **valid** ISIN is passed (see `"ISIN Code": "GB00BGnotvalid"` in `funds.json`) - otherwise show an error message to the user

- The fund list should show data properties from the fund itself and data from *share class* (see `funds.json`'s structure). Show at least 5 fund-level property and 5 *share class*-level property beside the following ones
- If a property is empty: a dash should appear.
- Show `"Lauch Date"` property as `"MM/DD/YYYY"`, other dates should be formatted as `"DD MMM YYYY"`
- Show `"Compound Return 1 Year Annual"` and `"NAV Base"`. Should have 2 decimal places and thousand separators
- If the fund is older than 4 year (see `"Lauch Date"` property), show the *share class* properties as a list (`<ul>`) instead of a table

See a working example here: http://fe2.jpmorgan.com

# Data to be used
- `funds.json`: contains the fund and *share class* data
- `chart.json`: contains data for line chart

# Project structure
The project structure should follow the angular team's recommendation, dividing the functionality into "modules"
You can use any kind of `yeoman` generator to create the structure, like:
- https://github.com/codigo-pl/generator-angular-feature
- https://github.com/DaftMonk/generator-angular-fullstack
- https://github.com/cgross/generator-cg-angular

# Development
- Don't make any design, or keep it minimal, we're interested in how you code :)
- Feel free to use any library which makes the development easier and faster
- Make sure the project can be easily extended. Write clean, easily understandable code. Make sure your code is consistent along the whole project
- Keep in mind others might have to read, learn and change your code in the future
- Create tests for directives, controllers and services. E2E test is optional


# How to send the test?
- Fork this repository and make the changes on it
- Commit as many states as you can while developing
- Send only the link to your repository. **DON'T CREATE A PULL-REQUEST!**

### gl;hf :)

