interface SwaggerInterface {
    readonly title: string;
    readonly description: string;
    readonly version: string;
}

export const swaggerConfig: SwaggerInterface = {
    title: 'Request Management',
    description: 'Request Management',
    version: 'v1',
};