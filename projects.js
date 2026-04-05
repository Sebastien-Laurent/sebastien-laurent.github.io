const projectsData = [
    {
        title: "Lusha",
        shortDescription: "Our game developed to help ADHD kids thrive, 200k+ downloads on iOS & Android",
        mediaType: "image", // 'image' or 'video'
        mediaSrc: "Media/LushaLandscapeWithLogo.png",
        mediaPoster: "", // Only for video
        projectLink: "https://Lusha.care",
        projectLinkText: "Visit Lusha WebPage", // This text will no longer be visible but kept for reference
        projectIcon: "fa-solid fa-globe", // Font Awesome class for a globe icon
        details: {
            description: "Lusha is an innovative game designed specifically to assist children with ADHD in helping them in their daily life and reinforcing their psycho socials skills (emotion management, social skills, organisation , ...). We collaborated with child psychologists and psychiatrists to deliver clinical support trough a fun and interactive experience.",
            sections: [
                {
                    heading: "Platform:",
                    items: ["Mobile (iOS, Android)"]
                },
                {
                    heading: "Technologies:",
                    items: ["Unity, C#", "Firebase, Python (for data analytics)","Revenue Cat"]
                },
                {
                    heading: "Key Features:",
                    items: ["3D Adventure game","Gamified CBT content", "Parental monitoring dashboard", "Reward system based on real life progress", ]
                }
            ]
        }
    },
    {
        title: "Batch text and audio AI generation tool",
        shortDescription: "A Unity app to perform batch audio and text translation AI generation using Eleven labs and Open AI APIs",
        mediaType: "image",
        mediaSrc: "Media/AudioTool.png",
        mediaPoster: "",
        projectLink: "https://github.com/Sebastien-Laurent/GenAITools",
        projectLinkText: "View Repository",
        projectIcon: "fa-brands fa-github", // Font Awesome class for a GitHub icon
        details: {
            description: "This Unity-based application streamlines the process of generating localized audio and text content using leading AI services. It integrates with Eleven Labs for high-quality text-to-speech synthesis and OpenAI's API for efficient text translation, allowing for batch processing of large datasets, ideal for game localization or content creation pipelines.",
            sections: [
                { heading: "Platform:", items: ["Desktop (Unity Editor)"] },
                { heading: "Technologies:", items: ["Unity, C#", "Eleven Labs API, OpenAI API"] },
                { heading: "Key Features:", items: ["Batch processing","Customizable context", "Customizable voice parameters"] }
            ]
        }
    },
    {
        title: "Survival simulation for AI agents",
        shortDescription: "A prototype Unity simulation where AI agents have to survive in a remote land by gathering ressource, crafting equipment and building a shelter. Agents are powered using the OpenAI API.",
        mediaType: "video",
        mediaSrc: "Media/BobGatheringCraftingAndBuilding.mp4",
        mediaPoster: "Media/BobGatheringCraftingAndBuildingPoster.jpg",
        projectLink: "https://github.com/yourusername/survival-simulation",
        projectLinkText: "More details",
        projectIcon: "fa-brands fa-github", // GitHub icon
        details: {
            description: "This Unity simulation explores advanced AI agent behavior in a dynamic survival environment. Agents, powered by the OpenAI API, demonstrate autonomous decision-making in resource gathering, crafting necessary tools, and constructing shelters. The project aims on creating complex emergent behaviors from simple rules and real-time AI interactions.",
            sections: [
                { heading: "Platform:", items: ["Unity Simulation"] },
                { heading: "Technologies:", items: ["Unity, C#", "OpenAI API"] },
                { heading: "Key Features:", items: ["AI-driven survival mechanics", "Dynamic environment interaction", "Resource management", "Emergent behavior"] }
            ]
        }
    },
    {
        title: "Animation generation using deep reinforcement learning",
        shortDescription: "An application of deep reinforcement learning to teach an humanoid agent how to walk in order to synthesize realistic and adaptive animations.",
        mediaType: "video",
        mediaSrc: "Media/LucyProgramSimulationExample.mp4",
        mediaPoster: "Media/LucyProgramSimulationExamplePoster.jpg",
        projectLink: "https://github.com/yourusername/drl-animation",
        projectLinkText: "More details",
        projectIcon: "fa-brands fa-github", // GitHub icon
        details: {
            description: "I investigate how deep reinforcement learning (DRL) can help us create adaptive animations. By training an agent within a simulated environment, it learns to walk, navigate obstacles, and adapt its gait to various terrains, offering an interesting approach to procedural animation generation for games and virtual realities.",
            sections: [
                { heading: "Platform:", items: ["Research/Simulation"] },
                { heading: "Technologies:", items: ["Python", "TensorFlow/PyTorch", "Unity ML-Agents"] },
                { heading: "Key Features:", items: ["DRL-driven animation", "Adaptive locomotion", "Physics-based character control", "Robust to environmental changes"] }
            ]
        }
    },
    {
        title: "In game behavior as a marker for ADHD",
        shortDescription: "A R&D initiative to evaluate the potential of using a series of gamified tests as marker for ADHD",
        mediaType: "image",
        mediaSrc: "Media/Trajectory.png",
        mediaPoster: "",
        projectLink: "https://github.com/yourusername/adhd-marker",
        projectLinkText: "More details",
        projectIcon: "fa-solid fa-chart-line", // Example: a line chart icon for data/research
        details: {
            description: "This (non-public) R&D project explores the potential of using in-game behavioral data as a non-invasive marker for assessing ADHD traits. Through carefully designed gamified tests, we analyze user interactions, response times, and decision-making patterns to identify correlations with ADHD-related cognitive functions. The goal is to develop a preliminary diagnostic tool or a supplementary assessment for clinical use.",
            sections: [
                { heading: "Domain:", items: ["Data Science", "Game Design", "Neuroscience"] },
                { heading: "Technologies:", items: ["Python (Pandas, NumPy, Scikit-learn)", "Unity (for game development and data capture)"] },
			{ heading: "Key Features:", items: ["DRL-driven animation", "Adaptive locomotion", "Physics-based character control", "Robust to environmental changes"] }
            ]
        }
    },
    {
        title: "PCA applied to an HPC simulation of counterflowing superfluids",
        shortDescription: "PCA unravels the complex dynamics at play when two superfluids are counterflowing at large velocity",
        mediaType: "image",
        mediaSrc: "Media/vapPCA.png",
        mediaPoster: "",
        projectLink: "https://github.com/yourusername/superfluid-pca",
        projectLinkText: "More details",
        projectIcon: "fa-solid fa-flask", // Example: a flask icon for physics/research
        details: {
            description: "This research project applies Principal Component Analysis (PCA) to large datasets generated from High-Performance Computing (HPC) simulations of counterflowing superfluids. PCA helps to reduce the dimensionality of complex simulation data, revealing underlying patterns and dominant modes of behavior in the turbulent interactions of the two superfluid components at high velocities, providing insights into fundamental quantum fluid dynamics.",
            sections: [
                { heading: "Domain:", items: ["Computational Physics", "Data Science", "Fluid Dynamics", "Quantum physics"] },
                { heading: "Technologies:", items: ["HPC environments", "C++ (for simulation code)", "Mathematica (analysis)] },
                { heading: "Key Features:", items: ["Dimensionality reduction", "Visualization of complex datasets", "Identification of key physical phenomena", "Analysis of quantum turbulence"] }
            ]
        }
    }
];