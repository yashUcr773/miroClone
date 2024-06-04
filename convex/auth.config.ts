export default {
    providers: [
        {
            domain: process.env.NEXT_CLERK_JWT_ISSUER,
            applicationID: "convex",
        },
    ],
};
