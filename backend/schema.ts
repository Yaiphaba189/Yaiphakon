import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
    text,
    relationship,
    password,
    timestamp,
    select,
    image,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export const lists = {
    User: list({
        access: allowAll,
        fields: {
            name: text({ validation: { isRequired: true } }),
            email: text({
                validation: { isRequired: true },
                isIndexed: 'unique',
            }),
            password: password({ validation: { isRequired: true } }),
            createdAt: timestamp({
                defaultValue: { kind: 'now' },
            }),
        },
    }),

    Job: list({
        access: allowAll,
        fields: {
            title: text({ validation: { isRequired: true } }),
            description: document({
                formatting: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                ],
                links: true,
                dividers: true,
            }),
            location: text({ validation: { isRequired: true } }),
            type: select({
                type: 'enum',
                options: [
                    { label: 'Full Time', value: 'full_time' },
                    { label: 'Part Time', value: 'part_time' },
                    { label: 'Contract', value: 'contract' },
                    { label: 'Internship', value: 'internship' },
                ],
                defaultValue: 'full_time',
                ui: { displayMode: 'segmented-control' },
            }),
            department: text(),
            postedDate: timestamp({
                defaultValue: { kind: 'now' },
            }),
        },
    }),

    Post: list({
        access: allowAll,
        fields: {
            title: text({ validation: { isRequired: true } }),
            content: document({
                formatting: true,
                dividers: true,
                links: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                ],
            }),
            publishDate: timestamp({
                defaultValue: { kind: 'now' },
            }),
            status: select({
                type: 'enum',
                options: [
                    { label: 'Draft', value: 'draft' },
                    { label: 'Published', value: 'published' },
                ],
                defaultValue: 'draft',
                ui: { displayMode: 'segmented-control' },
            }),
            image: image({ storage: 'local_images' }),
        },
    }),

    SocialSupport: list({
        access: allowAll,
        fields: {
            title: text({ validation: { isRequired: true } }),
            description: text({ ui: { displayMode: 'textarea' } }),
            impact: text(),
            link: text(),
            image: image({ storage: 'local_images' }),
        },
    }),
};
