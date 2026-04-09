import { useDraggable } from "@dnd-kit/core";

const SortableItem = ({ id, data }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-gray-800 px-3 py-3 rounded-lg 
      cursor-grab active:cursor-grabbing 
      touch-none select-none 
      hover:bg-gray-700"
    >
      {data.name}
    </div>
  );
};

export default SortableItem;