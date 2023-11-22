export let grantList = [
    { role: 'admin', resource: 'video', action: 'create:any', attributes: '*, !views' },
    { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },
    { role: 'admin', resource: 'video', action: 'update:any', attributes: '*, !views' },
    { role: 'admin', resource: 'video', action: 'delete:any', attributes: '*' },

    { role: 'user', resource: 'video', action: 'create:own', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'video', action: 'read:any', attributes: '*' },
    { role: 'user', resource: 'video', action: 'update:own', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'video', action: 'delete:own', attributes: '*' },

    { role: 'user', resource: 'posts', action: 'create:own', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'posts', action: 'read:any', attributes: '*' },
    { role: 'user', resource: 'posts', action: 'update:own', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'posts', action: 'delete:own', attributes: '*' }
];
