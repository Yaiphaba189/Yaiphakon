import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    sessionData: 'name createdAt',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
    },
});

const session = statelessSessions({
    maxAge: 60 * 60 * 24 * 30,
    secret: process.env.SESSION_SECRET!,
});

export { withAuth, session };
