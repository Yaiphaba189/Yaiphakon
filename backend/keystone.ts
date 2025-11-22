import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';

export default withAuth(
    config({
        db: {
            provider: 'postgresql',
            url: process.env.DATABASE_URL || 'postgres://yaiphaba@localhost:5432/keystone',
        },
        server: {
            port: 4000,
            cors: { origin: ['http://localhost:3000'], credentials: true },
        },
        storage: {
            local_images: {
                kind: 'local',
                type: 'image',
                generateUrl: path => `http://localhost:4000/images/${path}`,
                serverRoute: {
                    path: '/images',
                },
                storagePath: 'public/images',
            },
        },
        lists,
        session,
    })
);
