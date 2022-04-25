import { read, utils} from "xlsx"

export const Home = () => {
    console.log("ehhlo");
    let workbook = read("../csv/synergy.xlsx")
    console.log(workbook);

    let tmp = utils.sheet_to_json(workbook.Sheets.Sheet1)
    console.log(tmp);

    return (
        <>
            <h1>Hello World!</h1>
        </>
    )
}