let jobs = [
    {
        id: 1,
        company_name: "raximjon_pepsi",
        tax: 13,
        budget: 2_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 15000
            },
            {
                title: "salary",
                total: 500_000
            },
            {
                title: "rent",
                total: 200_000
            },
        ]
    },
    {
        id: 2,
        company_name: "amir_fanta_stick",
        tax: 12,
        budget: 1_800_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 20_000
            },
            {
                title: "salary",
                total: 700_000
            },
            {
                title: "rent",
                total: 100_000
            },
        ]
    },
    {
        id: 3,
        company_name: "frump_buildings",
        tax: 14,
        budget: 3_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 50_000
            },
            {
                title: "salary",
                total: 1_200_000
            },
            {
                title: "rent",
                total: 500_000
            },
        ]
    },
    {
        id: 4,
        company_name: "farrux_tube",
        tax: 12,
        budget: 10_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 4_000_000
            },
            {
                title: "rent",
                total: 300_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 6,
        company_name: "nosway_u_rustama",
        tax: 10,
        budget: 100_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 10_000
            },
            {
                title: "salary",
                total: 0
            },
            {
                title: "rent",
                total: 0
            },
        ]
    },
    {
        id: 6,
        company_name: "vinovodochnaya_u_timura",
        tax: 21,
        budget: 1_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 20_000
            },
            {
                title: "rent",
                total: 30_000
            },
        ]
    },
    {
        id: 7,
        company_name: "sokhib_books",
        tax: 10,
        budget: 400_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 12_000
            },
            {
                title: "rent",
                total: 15_000
            },
        ]
    }
]



let totalTax = 0;
let totalBudget = 0;

for (let i = 0; i < jobs.length; i++) {
    totalTax += jobs[i].tax;
    totalBudget += jobs[i].budget;
}

let taxPerYear = totalTax / 100 * totalBudget;
console.log(`Общий налог со всех компаний за год: ${taxPerYear}`);


let maxTax = 0;
let maxTaxCompanyName = '';

for (let i = 0; i < jobs.length; i++) {
    let taxPerYear = jobs[i].tax / 100 * jobs[i].budget;

    if (taxPerYear > maxTax) {
        maxTax = taxPerYear;
        maxTaxCompanyName = jobs[i].company_name;
    }
}

console.log(`Компания ${maxTaxCompanyName} платит больше всех налогов.`);



const sortedCompanies = jobs.sort((a, b) => a.tax - b.tax);
const companyWithLowestTax = sortedCompanies[0];
console.log(companyWithLowestTax.company_name);


let totalExpenses = jobs.reduce((acc, job) => {
    let sum = job.expensesPerYear.reduce((acc, expense) => {
        return acc + expense.total;
    }, 0);
    return acc + sum;
}, 0);

let averageExpenses = totalExpenses / jobs.length;
console.log("Средний расход всех компаний:", averageExpenses);

