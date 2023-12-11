"use client"
import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import { useDroppable } from '@dnd-kit/core';

function Home() {
  const draggableFruits = ["Banana", "Apple", "Orange", "Grapes"]
  const [cartItems, setCartItems] = useState<string[]>([]);

  // handle Drag Event
  function handleDragEnd(event: DragEndEvent) {
    const newItem: any = event.active.data.current;
    if (!cartItems.includes(newItem.title)) {
      setCartItems((prev) => [...prev, newItem.title])
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className='max-w-7xl mx-auto h-screen gap-10 flex flex-col items-center justify-center'>
        <div className='flex gap-3 '>
          {draggableFruits.map((fruit: string, index: number) => {
            return <DragableContent items={cartItems} key={index}>{fruit}</DragableContent>
          })}
        </div>
        <DropableContainer items={cartItems} />
      </main>
    </DndContext>
  );
}
export default Home;


// Dropable Container where dragable items can be dropped
const DropableContainer = ({ items }: { items: string[] }) => {
  const { setNodeRef, } = useDroppable({ id: 'dropable-cart' })
  return <div className='border w-full h-40 ' ref={setNodeRef}>
    <ul className='flex h-full gap-4 items-center justify-center'>
      {items.map((item: string, index: number) => {
        return <li key={index} className='border rounded p-3 hover:bg-gray-500 hover:text-white'> {item}</li>
      })}
    </ul>
  </div >
}

// Dragable Content which can be dragged and dropped in dropable zone
const DragableContent = (props: any) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: props.children,
    data: { title: props.children }
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return <div ref={setNodeRef} className={`border rounded cursor-pointer p-3 hover:bg-gray-500 hover:text-white ${props.items.includes(props.children) && "line-through"}`} style={style} {...attributes}{...listeners}>
    {props.children}
  </div>
}