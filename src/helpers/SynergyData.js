import { readFile, utils } from "xlsx";

let workbook = readFile("../csv/synergy.xlsx");
let columns = utils.sheet_to_json(workbook.Sheets.Sheet1)

console.log("hey", columns);

console.log(workbook);

/*
    This function grabs the names of the Milestones and Awards from
    the big column on the the Excel spreadsheet and creates a single 
    entry in the milestones_awards table for each name
*/
export const CreateMilestoneAwardIds = (csvFileName) => {
    // Empty Milestone/Award array

    // Read appropriate column

    // Create object for Milesstone/Award and push to Milestone/Award array

    // POST all objects in Milestone/Award array
}

/*
    This function grabs every pair of milestones and awards from the Excel 
    file and creates corresponding entries in the synergy_values tables for
    each pair with their corresponding synergy value

    IMPORTANT NOTE:
        You need to have run CreateMilestoneAwardIds before running this 
        function otherwise it won't work.
*/
export const SaveSynergyValuesInDatabase = (csvFileName) => {
    // Get csv file

    // Parse data into pairs with values

    // Create POST request for each pair
}