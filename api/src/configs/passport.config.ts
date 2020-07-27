export function configPassport() {
    return {
        module: {
            defaultStrategy: process.env.JWT_DEFAULT_STRATEGY,
        }
    }
}