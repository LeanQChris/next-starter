import React from 'react'

export default function DashboardLayout({ children, users }:
    { children: React.ReactNode, users: React.ReactNode }
) {
    return (
        <div>
            <div>{children}</div>
            <div>{users}</div>
        </div>
    )
}
