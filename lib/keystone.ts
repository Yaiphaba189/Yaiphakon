const KEYSTONE_API_URL = 'http://localhost:4000/api/graphql';

export async function fetchGraphQL(query: string, variables: Record<string, any> = {}) {
    const response = await fetch(KEYSTONE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        cache: 'no-store', // Ensure fresh data
    });

    const { data, errors } = await response.json();

    if (errors) {
        console.error('GraphQL Errors:', JSON.stringify(errors, null, 2));
        throw new Error(`Failed to fetch data from Keystone: ${errors[0].message}`);
    }

    return data;
}
