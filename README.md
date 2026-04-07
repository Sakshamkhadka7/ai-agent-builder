# AI Agent Profile Builder

1)**State Mutations Causing Re-Renders**
selectedLayers.push(layerId)
Fix: Always create a new array when updating state
setSelectedLayers([...selectedLayers, layerId])

2)**Unneccessary API calling on every selection**
fetchApi()
Each time user selects a skill or layer then the data were re-fetching that cause re-rendering even though it was not needed
Fix: Fetch the data once on mount useEffect(()=> {fetchApi()},[]) which only call once because it has epmty dependency array

3)**Analytics heartbeat interval**
   useEffect(() => {
    const analyticsInterval = setInterval(() => { ... }, 8000)
}, [])

If accidentally depend upon state inside interval like agentName without proper dependency it might log states value also , if interval was recreated unnecessarily could cause memory leaks 

Fix: Keep the interval once on mount , used functional updates which avoids repeated intervals and unnecessary re-renders

Reduces inline styles to Modern Frameworks Tailwind Css

4) **Structures of Project**
   Intially it was all in one file app.tsx which looks so many messy of code that leads to difficult to debug the code or any    issues that aries during coding

   Divided a folder structures into a components and made a reusable components like Category and SortableItem which improve     readabilty and maintainability 
 
   Configurations
   DropZone
   SortableItem
   Custom css for styling 


  **AI Usage:**

  To use a Drag and Drop Components Initially I learned from youtube for dnd-kit and implement in this project using a CHAT     GPT because I recently learn this library so I took a help from AI

  Built a modern AI Agent Builder with an drag and drop interface using a dnd-kit replacing the original drop-down based UX 
  fixed key performance issues like state mutation and unnecessary API re-fetching improving overall responsiveness

  # Components

  **Configuration** 
  This is the main builder 
  Displays all available data 
  Users Drag and Drop into right side selected area


  **DropZone Components** 
  This is the right side selection panel 
  Users selected Drop items here
  It dynamically updates the current agent configurations

  **SortableItems**
  It makes items Draggable , Reorderable and Interactive built using dnd-kit

  **Saved agent Section**

  This is the bottom panel 
  Load saved agent 
  Delete individual agent

  **Toast notifications**

  Shows error if fields are empty
  Confirms when agent is saved
  Improves overall UX instead of using alerts
  

