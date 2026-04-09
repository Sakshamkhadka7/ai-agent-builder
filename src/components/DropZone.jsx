import { useDroppable } from "@dnd-kit/core";

const DropZone = ({ id, title, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`border p-4 rounded-lg min-h-[200px] md:min-h-[300px] transition ${
        isOver ? "bg-gray-800 border-indigo-500" : "border-gray-700"
      }`}
    >
      <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default DropZone;