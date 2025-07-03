document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (remains the same)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const projectsContainer = document.getElementById('projects-container');

    // Function to create a project card from data
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Project Media
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('project-media');
        if (project.mediaType === 'image') {
            const img = document.createElement('img');
            img.src = project.mediaSrc;
            img.alt = project.title + " Screenshot";
            mediaDiv.appendChild(img);
        } else if (project.mediaType === 'video') {
            const video = document.createElement('video');
            video.controls = true;
            video.muted = true;
            video.loop = true;
            video.preload = "metadata";
            if (project.mediaPoster) {
                video.poster = project.mediaPoster;
            }
            const source = document.createElement('source');
            source.src = project.mediaSrc;
            source.type = "video/mp4";
            video.appendChild(source);
            mediaDiv.appendChild(video);
        }
        card.appendChild(mediaDiv);

        // Project Content
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('project-content');

        const title = document.createElement('h3');
        title.textContent = project.title;
        contentDiv.appendChild(title);

        const shortDesc = document.createElement('p');
        shortDesc.textContent = project.shortDescription;
        contentDiv.appendChild(shortDesc);

        // Project Details (initially hidden)
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('project-details');
        detailsDiv.style.display = 'none'; // Ensure it's hidden by default

        const fullDescription = document.createElement('p');
        fullDescription.textContent = project.details.description;
        detailsDiv.appendChild(fullDescription);

        project.details.sections.forEach(section => {
            const heading = document.createElement('h4');
            heading.textContent = section.heading;
            detailsDiv.appendChild(heading);

            const ul = document.createElement('ul');
            section.items.forEach(itemText => {
                const li = document.createElement('li');
                li.textContent = itemText;
                ul.appendChild(li);
            });
            detailsDiv.appendChild(ul);
        });
        contentDiv.appendChild(detailsDiv);

        //Toggle Caret Icon
        const toggleCaretDiv = document.createElement('div');
        toggleCaretDiv.classList.add('toggle-caret');
        const caretIcon = document.createElement('i');
        caretIcon.classList.add('fa-solid', 'fa-chevron-down'); // Default down arrow
        toggleCaretDiv.appendChild(caretIcon);
        card.appendChild(toggleCaretDiv);

        // Project Icon Link Button
        const iconLink = document.createElement('a');
        iconLink.href = project.projectLink;
        iconLink.target = "_blank"; // Open in new tab
        iconLink.classList.add('project-icon-link');
        const icon = document.createElement('i');
        icon.classList.add(...project.projectIcon.split(' ')); // Split the icon class string into individual classes
        iconLink.appendChild(icon);
        card.appendChild(iconLink); // Append to the card, not contentDiv for absolute positioning relative to card

        card.appendChild(contentDiv); // Append contentDiv to card last to maintain flow

        return card;
    }

    // Populate the grid with projects
    projectsData.forEach(project => {
        projectsContainer.appendChild(createProjectCard(project));
    });

    // Toggle project details when clicking on the project card (excluding the icon link)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function (event) {
            // Prevent toggling if the click originated from the external link icon
            if (event.target.closest('.project-icon-link')) {
                return;
            }

            const projectDetails = this.querySelector('.project-details');

            // Toggle display and the 'is-expanded' class
            if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
                projectDetails.style.display = 'block';
                this.classList.add('is-expanded');
            } else {
                projectDetails.style.display = 'none';
                this.classList.remove('is-expanded');
            }
        });
    });
});