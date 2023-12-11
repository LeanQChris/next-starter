"use client"
import React, { useState } from 'react'
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useDraggable, useDroppable } from '@dnd-kit/core';

export default function DragableColumnsPage() {
    const draggableFruits = ["Banana", "Apple", "Orange", "Grapes"];

    const [columnOne, setColumnOne] = useState<string[]>([]);
    const [columnTwo, setColumnTwo] = useState<string[]>([]);

    console.log(columnOne);
    console.log(columnTwo);

    const handleDragEnd = (e: DragEndEvent) => {
        const draggedColumnId = e.collisions != null ? e.collisions[0]?.id : e.collisions;
        const newItem: any = e.active.data.current;
        switch (draggedColumnId) {
            case "one":
                setColumnOne((prev) => [...prev, newItem])
                break;
            case "two":
                setColumnTwo((prev) => [...prev, newItem])
                break;
            default:
                break;
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className='max-w-7xl m-auto flex flex-col gap-5 justify-center items-center h-screen '>
                <div className='flex gap-3 justify-center items-center'>
                    {draggableFruits.map((fruit: string, index: number) => {
                        return <DragabeItems key={index}>{fruit}</DragabeItems>
                    })}
                </div>
                <main className="flex gap-8 w-full">
                    <DropableColumn1 items={columnOne} />
                    <DropableColumn2 items={columnTwo} />
                </main>
            </div>
        </DndContext>
    )
}

const DropableColumn1 = ({ items }: { items: string[] }) => {
    const { setNodeRef, } = useDroppable({ id: 'one' })

    return <div className='border h-80 w-full p-5' ref={setNodeRef}>
        <p className='text-center'>1</p>
        <div>
            <ul>
                {items.map((item: string, index: number) => {
                    return <div className={`border rounded cursor-pointer p-3 hover:bg-gray-500 hover:text-white`} key={index}>{item}</div>
                })}
            </ul>
        </div>
    </div>
}

const DropableColumn2 = ({ items }: { items: string[] }) => {
    const { setNodeRef, } = useDroppable({ id: 'two' })
    return <div className='border h-80 w-full p-5' ref={setNodeRef}>
        <p className='text-center'>2</p>
        <div>
            <ul>
                {items.map((item: string, index: number) => {
                    return <div className={`border rounded cursor-pointer p-3 hover:bg-gray-500 hover:text-white`} key={index}>{item}</div>
                })}
            </ul>
        </div>
    </div>
}

const DragabeItems = (props: any) => {
    const { setNodeRef, attributes, listeners, transform } = useDraggable({
        id: props.children,
        data: props.children
    })
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return <div ref={setNodeRef} className={`border rounded cursor-pointer p-3 hover:bg-gray-500 hover:text-white`} style={style} {...attributes}{...listeners}>
        {props.children}
    </div>
}