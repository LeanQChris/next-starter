import React from 'react'

export default function DashboardLayout({ children, users, blogs }:
    { children: React.ReactNode, users: React.ReactNode, blogs: React.ReactNode }
) {
    return (
        <div>
            <div>{children}</div>
            <div>{users}</div>
            <div>{blogs}</div>
        </div>
    )
}
