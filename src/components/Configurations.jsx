import React, { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import SortableItem from "./SortableItem";
import DropZone from "./DropZone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImCross } from "react-icons/im";

const Configurations = () => {
  const [data, setData] = useState({
    agentProfiles: [],
    skills: [],
    layers: [],
    providers: [],
  });

  const [selected, setSelected] = useState({
    profile: null,
    skills: [],
    layers: [],
    provider: null,
  });

  const [savedAgents, setSavedAgents] = useState([]);

  // Fetch data + default providers
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const json = await res.json();

      const defaultProviders = [
        { id: "p1", name: "ChatGPT" },
        { id: "p2", name: "Gemini" },
        { id: "p3", name: "Claude" },
        { id: "p4", name: "Kimi" },
        { id: "p5", name: "DeepSeek" },
      ];

      setData({
        agentProfiles: json.agentProfiles || [],
        skills: json.skills || [],
        layers: json.layers || [],
        providers:
          json.providers && json.providers.length > 0
            ? json.providers
            : defaultProviders,
      });
    };

    fetchData();

    const saved = JSON.parse(localStorage.getItem("agents")) || [];
    setSavedAgents(saved);
  }, []);

  // Find item by id
  const findItem = (id) => {
    return [
      ...data.agentProfiles.map((i) => ({ ...i, type: "profile" })),
      ...data.skills.map((i) => ({ ...i, type: "skill" })),
      ...data.layers.map((i) => ({ ...i, type: "layer" })),
      ...data.providers.map((i) => ({ ...i, type: "provider" })),
    ].find((i) => i.id === id);
  };

  // Drag End with type check & wrong drop restriction
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const item = findItem(active.id);
    if (!item) return;

    const dropZone = over.id;

    let validDrop = false;

    setSelected((prev) => {
      const updated = { ...prev };

      if (dropZone === "profile-drop" && item.type === "profile") {
        updated.profile = item;
        validDrop = true;
      }

      if (dropZone === "skills-drop" && item.type === "skill") {
        if (!prev.skills.find((i) => i.id === item.id)) updated.skills = [...prev.skills, item];
        validDrop = true;
      }

      if (dropZone === "layers-drop" && item.type === "layer") {
        if (!prev.layers.find((i) => i.id === item.id)) updated.layers = [...prev.layers, item];
        validDrop = true;
      }

      if (dropZone === "provider-drop" && item.type === "provider") {
        updated.provider = item;
        validDrop = true;
      }

      if (!validDrop) {
        toast.error("Wrong drop! Please drag the item to the correct section.");
      }

      return updated;
    });
  };
   
  // Remove selected item
  const removeItem = (type, id) => {  
    setSelected((prev) => {
      const updated = { ...prev };
      if (type === "profile") updated.profile = null;
      if (type === "provider") updated.provider = null;
      if (type === "skills") updated.skills = prev.skills.filter((i) => i.id !== id);
      if (type === "layers") updated.layers = prev.layers.filter((i) => i.id !== id);
      return updated;
    });
  };

  // Save configuration with empty field check
  const saveConfiguration = () => {
    const { profile, skills, layers, provider } = selected;

    if (!profile || !provider || skills.length === 0 || layers.length === 0) {
      toast.error("Please fill all fields before saving!");
      return;
    }

    const newAgent = { id: Date.now(), ...selected };
    const updated = [...savedAgents, newAgent];
    setSavedAgents(updated);
    localStorage.setItem("agents", JSON.stringify(updated));

    toast.success("Agent saved successfully!");
    setSelected({ profile: null, skills: [], layers: [], provider: null });
  };

  // Delete saved agent
  const deleteSavedAgent = (id) => {
    const updated = savedAgents.filter((agent) => agent.id !== id);
    setSavedAgents(updated);
    localStorage.setItem("agents", JSON.stringify(updated));
    toast.info("Agent deleted!");
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <section className="min-h-screen bg-gray-950 text-white p-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <Category title="Base Profile">
              {data.agentProfiles.map((item) => (
                <SortableItem key={item.id} id={item.id} data={{ ...item, type: "profile" }} />
              ))}
            </Category>

            <Category title="Add Skill">
              {data.skills.map((item) => (
                <SortableItem key={item.id} id={item.id} data={{ ...item, type: "skill" }} />
              ))}
            </Category>

            <Category title="Personality Layer">
              {data.layers.map((item) => (
                <SortableItem key={item.id} id={item.id} data={{ ...item, type: "layer" }} />
              ))}
            </Category>

            <Category title="AI Provider">
              {data.providers.map((item) => (
                <SortableItem key={item.id} id={item.id} data={{ ...item, type: "provider" }} />
              ))}
            </Category>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gray-900 p-6 rounded-xl space-y-6">
            <DropZone id="profile-drop" title="Base Profile">
              {selected.profile && <Item item={selected.profile} onDelete={() => removeItem("profile")} />}
            </DropZone>

            <DropZone id="skills-drop" title="Skills">
              {selected.skills.map((item) => (
                <Item key={item.id} item={item} onDelete={() => removeItem("skills", item.id)} />
              ))}
            </DropZone>

            <DropZone id="layers-drop" title="Layers">
              {selected.layers.map((item) => (
                <Item key={item.id} item={item} onDelete={() => removeItem("layers", item.id)} />
              ))}
            </DropZone>

            <DropZone id="provider-drop" title="AI Provider">
              {selected.provider && <Item item={selected.provider} onDelete={() => removeItem("provider")} />}
            </DropZone>

            <button
              onClick={saveConfiguration}
              className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Save Configuration
            </button>
          </div>
        </div>

        {/* SAVED AGENTS */}
        <div className="mt-16">
          <h2 className="text-xl mb-4">Saved Agents</h2>

          {savedAgents.length === 0 ? (
            <p className="text-gray-400">No agents saved yet.</p>
          ) : (
            savedAgents.map((agent) => (
              <div
                key={agent.id}
                className="bg-gray-900 p-4 rounded mb-3 flex justify-between items-start"
              >
                <div>
                  <p>
                    <b>Profile:</b> {agent.profile?.name}
                  </p>
                  <p>
                    <b>Skills:</b> {agent.skills.map((s) => s.name).join(", ")}
                  </p>
                  <p>
                    <b>Layers:</b> {agent.layers.map((l) => l.name).join(", ")}
                  </p>
                  <p>
                    <b>Provider:</b> {agent.provider?.name}
                  </p>
                </div>
                <button
                  onClick={() => deleteSavedAgent(agent.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <ToastContainer position="top-right" autoClose={2000} />
      </section>
    </DndContext>
  );
};

export default Configurations;

//  SMALL COMPONENTS
const Category = ({ title, children }) => (
  <div>
    <h2 className="text-lg mb-2 text-gray-300">{title}</h2>
    <div className="space-y-2 grid grid-cols-3 gap-3 p-3">{children}</div>
  </div>
);

const Item = ({ item, onDelete }) => (
  <div className="flex justify-between bg-gray-800 px-3 py-2 rounded">
    <span>{item.name}</span>
    <button onClick={onDelete} className="text-red-400 hover:text-red-600">
     <ImCross />
    </button>
  </div>
);