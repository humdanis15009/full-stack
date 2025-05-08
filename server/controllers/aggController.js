import User from "../models/userModel.js";

export const aggController = async (req, res) => {
    const result = await User.aggregate([
        // {
        //     $group:
        //     {
        //         _id: "$role",
        //         count:
        //         {
        //             $sum: 1
        //         }
        //     }
        // },
        // { 
        //     $match: {
        //         $or: [
        //         //   { "profile.country": { $ne: null } },
        //           { "profile.country": "Australia" },
        //           { "profile.country": "Spain" },
        //           { "profile.country": "India" }
        //         ]
        //       }
               
        // },
        // { 
        //     $group: 
        //     { 
        //         _id: "$profile.country" 
        //     } 
        // }
        // {
        //     $match: {
        //         "profile.age": {
        //             $ne: null
        //         }
        //     }
        // },
        // }
        // { $match: {
        //     subscriptions: { $elemMatch: { status: "active" } }
        //   }},
        //   { $project: {
        //     name: 1,
        //     email: 1,
        //     activePlans: {
        //       $filter: {
        //         input: "$subscriptions",
        //         as: "sub",
        //         cond: { $eq: ["$$sub.status", "active"] }
        //       }
        //     }
        //   }}

    ]);
    res.json(result);
}