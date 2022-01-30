import * as json from "../mock-data/companies.json";

export function getCompanyLogo(companyId){
    const companies = json.default;
    const companyLogo = companies.filter(el => el.id === companyId)[0].logo;
    // console.log("helper: ", companyLogo)
    return companyLogo? companyLogo : "";
}
