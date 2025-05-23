import React, { useState } from 'react';

const TutorialsPage = () => {
  const [activeContent, setActiveContent] = useState(null);

  const tutorials = [
    {
      id: 'opengl-basics',
      title: "Getting Started with OpenGL",
      description: "A beginner-friendly guide to setting up and understanding the OpenGL graphics pipeline.",
      difficulty: "Beginner",
      estimatedTime: "30 min read",
      topics: ["OpenGL Setup", "Rendering Pipeline", "Vertex Buffers", "Shaders"],
      content: `
## Introduction to OpenGL

OpenGL (Open Graphics Library) is a cross-platform API for rendering 2D and 3D graphics. This tutorial will guide you through setting up your first OpenGL project and understanding the basics of the rendering pipeline.

### Setting Up Your Environment

Before we dive into OpenGL programming, we need to set up our development environment. We'll need:

1. A C++ compiler (GCC, Clang, or MSVC)
2. GLFW for window creation and input handling
3. GLAD for loading OpenGL functions
4. GLM for mathematics operations

Let's start by creating a basic CMake project structure...

### Understanding the Graphics Pipeline

The OpenGL graphics pipeline consists of several stages that transform your 3D data into pixels on the screen:

1. Vertex Specification
2. Vertex Shader
3. Tessellation (optional)
4. Geometry Shader (optional)
5. Rasterization
6. Fragment Shader
7. Output Merger

Each stage has a specific purpose and understanding how they work together is crucial for efficient rendering...

### Creating Your First Triangle

Now let's put theory into practice by rendering a simple triangle on the screen...
      `
    },
    {
      id: 'game-architecture',
      title: "Low-Level Game Architecture",
      description: "Exploring efficient architecture patterns for performance-critical game systems.",
      difficulty: "Intermediate",
      estimatedTime: "45 min read",
      topics: ["Entity Component System", "Memory Management", "Data-Oriented Design", "Cache Optimization"],
      content: `
## Low-Level Game Architecture

Creating efficient game architecture is crucial for performance-critical applications. This tutorial explores patterns and techniques that focus on optimizing memory access patterns and CPU cache utilization.

### Entity Component System (ECS)

Traditional object-oriented approaches to game development often lead to deep inheritance hierarchies that can be difficult to maintain and inefficient in terms of memory access patterns. Entity Component System (ECS) is an architectural pattern that addresses these issues by separating:

- Entities (unique identifiers)
- Components (pure data)
- Systems (logic that operates on components)

This separation allows for more efficient memory layouts and better cache utilization...

### Memory Management Strategies

Games require efficient memory management to maintain performance. Here are some strategies to consider:

1. Custom allocators for different subsystems
2. Object pools for frequently created/destroyed objects
3. Memory arenas for frame-based allocations
4. Alignment considerations for SIMD operations

Let's implement a simple object pool to demonstrate these concepts...

### Data-Oriented Design Principles

Data-Oriented Design (DOD) focuses on organizing your data for optimal processing rather than organizing your code around objects. Key principles include:

1. Structure of Arrays vs. Array of Structures
2. Minimizing cache misses
3. Predictable memory access patterns
4. Batch processing similar operations

Let's refactor a traditional game object system to follow DOD principles...
      `
    },
    {
      id: 'vulkan-techniques',
      title: "Vulkan Rendering Techniques",
      description: "Advanced rendering techniques and optimizations using the Vulkan API.",
      difficulty: "Advanced",
      estimatedTime: "60 min read",
      topics: ["Vulkan Setup", "Command Buffers", "Descriptor Sets", "Compute Shaders"],
      content: `
## Advanced Vulkan Rendering Techniques

Vulkan provides low-level control over the GPU, enabling advanced rendering techniques and optimizations. This tutorial explores some of these techniques and how to implement them efficiently.

### Vulkan Pipeline Optimization

Creating Vulkan pipelines is expensive, so it's important to optimize how and when you create them:

1. Pipeline derivatives
2. Pipeline caching
3. Specialized vs. general-purpose pipelines
4. Dynamic state to reduce pipeline count

Let's implement a pipeline cache system that efficiently manages pipeline creation and reuse...

### Efficient Command Buffer Usage

Command buffers are at the heart of Vulkan's design. Using them efficiently is crucial for performance:

1. Command buffer recording strategies
2. Secondary command buffers for reuse
3. Multi-threaded command generation
4. One-time vs. reusable command buffers

We'll implement a command buffer manager that supports multi-threaded recording...

### Compute Shader Techniques

Compute shaders allow for general-purpose GPU programming within the Vulkan API:

1. Workgroup optimization
2. Memory barriers and synchronization
3. Shared memory usage
4. Interleaving compute and graphics work

Let's implement a particle system that uses compute shaders for simulation and graphics pipelines for rendering...
      `
    },
    {
      id: 'custom-engine',
      title: "Building a Custom Game Engine",
      description: "Step-by-step guide to creating your own lightweight game engine for 2D and 3D games.",
      difficulty: "Intermediate",
      estimatedTime: "Series (5 parts)",
      topics: ["Engine Architecture", "Rendering System", "Input Handling", "Physics Integration"],
      content: `
## Building a Custom Game Engine

This multi-part tutorial series will guide you through creating your own lightweight game engine from scratch. We'll focus on creating a flexible architecture that's easy to understand and extend.

### Part 1: Engine Architecture

The foundation of any game engine is its architecture. We'll design a modular system that separates concerns while maintaining performance:

1. Core engine loop
2. Subsystem management
3. Event system for communication
4. Resource management

Let's start by setting up the basic structure and implementing the core loop...

### Part 2: Rendering System

The rendering system is responsible for displaying graphics on screen:

1. Abstraction layer over graphics APIs
2. Material system
3. Scene graph and culling
4. Render queue management

We'll implement a flexible rendering system that can support multiple backends...

### Part 3: Input Handling

A robust input system is crucial for any interactive application:

1. Device abstraction (keyboard, mouse, gamepad)
2. Input mapping and contexts
3. Event-based and polling interfaces
4. Input recording and playback for testing

Let's create an input system that's both flexible and easy to use...

### Part 4: Physics Integration

Games need physics for realistic movement and interactions:

1. Collision detection systems
2. Rigid body dynamics
3. Constraints and joints
4. Physics world management

We'll implement a simple physics system and show how to integrate with existing physics libraries...
      `
    }
  ];

  const toggleContent = (index) => {
    setActiveContent(activeContent === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-autumn-50 via-white to-forest-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-forest-800 inline-block relative">
          <span className="relative z-10">Tutorials & Guides</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-autumn-200 opacity-50 -z-10 transform -rotate-1"></span>
        </h1>
        
        <p className="text-lg text-forest-700 mb-12 max-w-3xl">
          Sharing knowledge and experiences in low-level game development through detailed, text-based tutorials.
          These guides focus on practical implementation and understanding core concepts.
        </p>
        
        <div className="space-y-16">
          {tutorials.map((tutorial, index) => (
            <div key={tutorial.id} id={tutorial.id} className="group">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-autumn-100 to-forest-50' : 'from-forest-50 to-autumn-100'} rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full overflow-hidden`}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-forest-800 overflow-hidden text-ellipsis">{tutorial.title}</h2>
                  <p className="text-forest-700 mb-6 overflow-hidden">{tutorial.description}</p>
                  
                  <div className="mb-6 overflow-hidden">
                    <h3 className="text-lg font-medium text-autumn-700 mb-2">Topics Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex} 
                          className="px-3 py-1 bg-white bg-opacity-50 rounded-full text-sm text-forest-700 overflow-hidden text-ellipsis"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        tutorial.difficulty === 'Beginner' ? 'bg-forest-100 text-forest-700' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-autumn-100 text-autumn-700' :
                        'bg-sky-100 text-sky-700'
                      }`}>
                        {tutorial.difficulty}
                      </span>
                      <span className="text-sm text-forest-600">{tutorial.estimatedTime}</span>
                    </div>
                    <button 
                      onClick={() => toggleContent(index)}
                      className="inline-flex items-center px-4 py-2 bg-forest-600 text-white rounded-md hover:bg-forest-700 transition-colors shadow-sm"
                    >
                      {activeContent === index ? 'Hide Content' : 'Read Tutorial'}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-6 shadow-md h-64 flex items-center justify-center">
                  <div className="text-center text-forest-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p>Tutorial Guide</p>
                    <p className="text-sm text-forest-500">Click 'Read Tutorial' to expand</p>
                  </div>
                </div>
              </div>
              
              {/* Expanded Tutorial Content */}
              {activeContent === index && (
                <div className="mt-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md p-8 transition-all duration-300">
                  <div className="prose prose-lg max-w-none prose-headings:text-forest-800 prose-a:text-autumn-600 prose-strong:text-forest-700 overflow-hidden">
                    <div className="whitespace-pre-wrap break-words overflow-auto">
                      {tutorial.content}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-forest-100 flex justify-end">
                    <button 
                      onClick={() => toggleContent(index)}
                      className="inline-block px-4 py-2 border border-forest-600 text-forest-700 rounded-md hover:bg-forest-50 transition-colors"
                    >
                      Hide Tutorial
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
