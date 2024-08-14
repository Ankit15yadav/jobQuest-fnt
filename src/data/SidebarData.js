import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarData = [
    {
        id: 1,
        name: "My Profile",
        path: "/dashboard/my-profile",
        // icon:"VscAccount",
    },
    {
        id: 2,
        name: "Dashboard",
        path: "/dashboard/Employer",
        type: ACCOUNT_TYPE.EMPLOYER
    },
    {
        id: 3,
        name: "My Companies",
        type: ACCOUNT_TYPE.EMPLOYER,
        path: "/dashboard/myCompany",
    },
    {
        id: 4,
        name: "Add Company",
        type: ACCOUNT_TYPE.EMPLOYER,
        path: "/createCompany",
    },
    {
        id: 5,
        name: "Check Applications",
        type: ACCOUNT_TYPE.EMPLOYER,
        path: "/dashboard/check-applications",
    },
    {
        id: 6,
        name: "Jobs Created",
        type: ACCOUNT_TYPE.EMPLOYER,
        path: "/dashboard/jobsCreated",
    },
    {
        id: 7,
        name: "Candidates Selected",
        type: ACCOUNT_TYPE.EMPLOYER,
        path: "/dashboard/selected",
    },
    {
        id: 8,
        name: "Jobs Applied",
        type: ACCOUNT_TYPE.JOBSEEKER,
        path: "/dashboard/jobs-applied",
    },
    {
        id: 9,
        name: "Jobs Selected",
        type: ACCOUNT_TYPE.JOBSEEKER,
        path: "/dashboard/Resume",
    },
    {
        id: 10,
        name: "BookMarks",
        type: ACCOUNT_TYPE.JOBSEEKER,
        path: "/dashboard/wishlist",
    }
]