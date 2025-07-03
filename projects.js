const projectsData = [
    {
        title: "Lusha",
        shortDescription: "Our game developed to help ADHD kids thrive",
        mediaType: "image", // 'image' or 'video'
        mediaSrc: "Media/LushaLandscapeWithLogo.png",
        mediaPoster: "", // Only for video
        projectLink: "https://Lusha.care",
        projectLinkText: "Visit Lusha WebPage", // This text will no longer be visible but kept for reference
        projectIcon: "fa-solid fa-globe", // Font Awesome class for a globe icon
        details: {
            description: "Lusha is an innovative game designed specifically to assist children with ADHD in developing essential cognitive skills and improving focus through engaging gameplay. We collaborated with child psychologists and game designers to create a fun, interactive experience that adapts to individual user needs, offering personalized challenges and progress tracking.",
            sections: [
                {
                    heading: "Platform:",
                    items: ["Mobile (iOS, Android)"]
                },
                {
                    heading: "Technologies:",
                    items: ["Unity, C#", "Firebase, Python (for data analytics)"]
                },
                {
                    heading: "Key Features:",
                    items: ["Adaptive difficulty", "Gamified cognitive exercises", "Parental monitoring dashboard", "Reward system"]
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
                { heading: "Key Features:", items: ["Batch processing", "Customizable voice parameters", "Language translation", "Intuitive user interface for content managers"] }
            ]
        }
    },
    {
        title: "Survival simulation for AI agents",
        shortDescription: "A prototype unity simulation where AI agents have to survive in a remote land by gathering ressource, crafting equipment and building a shelter. Agents are powered using the OpenAI API.",
        mediaType: "video",
        mediaSrc: "Media/BobGatheringCraftingAndBuilding.mp4",
        mediaPoster: "Media/BobGatheringCraftingAndBuildingPoster.jpg",
        projectLink: "https://github.com/yourusername/survival-simulation",
        projectLinkText: "More details",
        projectIcon: "fa-brands fa-github", // GitHub icon
        details: {
            description: "This Unity simulation explores advanced AI agent behavior in a dynamic survival environment. Agents, powered by the OpenAI API, demonstrate autonomous decision-making in resource gathering, crafting necessary tools, and constructing shelters. The project focuses on creating complex emergent behaviors from simple rules and real-time AI interactions.",
            sections: [
                { heading: "Platform:", items: ["Unity Simulation"] },
                { heading: "Technologies:", items: ["Unity, C#", "OpenAI API (GPT-3/4 for decision making)"] },
                { heading: "Key Features:", items: ["AI-driven survival mechanics", "Dynamic environment interaction", "Resource management", "Emergent behavior"] }
            ]
        }
    },
    {
        title: "Animation generation using deep reinforcement learning",
        shortDescription: "An application of deep reinforcement learning to teach an humanoid agent how to walk in order to generate animations adapted to the environment.",
        mediaType: "video",
        mediaSrc: "Media/LucyProgramSimulationExample.mp4",
        mediaPoster: "Media/LucyProgramSimulationExamplePoster.jpg",
        projectLink: "https://github.com/yourusername/drl-animation",
        projectLinkText: "More details",
        projectIcon: "fa-brands fa-github", // GitHub icon
        details: {
            description: "This project leverages deep reinforcement learning (DRL) to synthesize realistic and adaptive humanoid animations. By training an agent within a simulated environment, it learns to walk, navigate obstacles, and adapt its gait to various terrains, offering a novel approach to procedural animation generation for games and virtual realities.",
            sections: [
                { heading: "Platform:", items: ["Research/Simulation"] },
                { heading: "Technologies:", items: ["Python", "TensorFlow/PyTorch", "OpenAI Gym", "Unity ML-Agents"] },
                { heading: "Key Features:", items: ["DRL-driven animation", "Adaptive locomotion", "Physics-based character control", "Robust to environmental changes"] }
            ]
        }
    },
    {
        title: "In game behavior as a marker for ADHD",
        shortDescription: "A R&D initiative to evaluate the feasibility of designing a serie of gamified tests as a tool to assess the ADHD 'level' of the user",
        mediaType: "image",
        mediaSrc: "Media/Trajectory.png",
        mediaPoster: "",
        projectLink: "https://github.com/yourusername/adhd-marker",
        projectLinkText: "More details",
        projectIcon: "fa-solid fa-chart-line", // Example: a line chart icon for data/research
        details: {
            description: "This R&D project explores the potential of using in-game behavioral data as a non-invasive marker for assessing ADHD traits. Through carefully designed gamified tests, we analyze user interactions, response times, and decision-making patterns to identify correlations with ADHD-related cognitive functions. The goal is to develop a preliminary diagnostic tool or a supplementary assessment for clinical use.",
            sections: [
                { heading: "Domain:", items: ["Data Science", "Game Design", "Psychology"] },
                { heading: "Technologies:", items: ["Python (Pandas, NumPy, Scikit-learn)", "Unity (for game development and data capture)", "Statistical analysis"] },
                { heading: "Key Features:", items: ["Behavioral data collection", "Machine learning for pattern recognition", "Gamified assessment modules", "Ethical data handling"] }
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
                { heading: "Domain:", items: ["Computational Physics", "Data Science", "Fluid Dynamics"] },
                { heading: "Technologies:", items: ["Python (NumPy, SciPy, Matplotlib, Scikit-learn)", "HPC environments (e.g., Slurm, MPI)", "Fortran/C++ (for simulation code)"] },
                { heading: "Key Features:", items: ["Dimensionality reduction", "Visualization of complex datasets", "Identification of key physical phenomena", "Analysis of quantum turbulence"] }
            ]
        }
    }
];