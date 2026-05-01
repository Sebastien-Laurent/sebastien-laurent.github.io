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
    let activeCard = null;

    // Function to create a project card from data
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('project-media');
        if (project.mediaType === 'image') {
            const img = document.createElement('img');
            img.src = project.mediaSrc;
            img.alt = project.title + " Screenshot";
            img.loading = "lazy";
            mediaDiv.appendChild(img);
        } else if (project.mediaType === 'video') {
            const video = document.createElement('video');
            video.controls = true;
            video.muted = true;
            video.loop = true;
            video.preload = "metadata";
            video.playsInline = true;
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

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('project-content');

        const metaDiv = document.createElement('div');
        metaDiv.classList.add('project-meta');

        const status = document.createElement('span');
        status.textContent = project.status;
        metaDiv.appendChild(status);

        const metric = document.createElement('span');
        metric.textContent = project.metric;
        metaDiv.appendChild(metric);

        contentDiv.appendChild(metaDiv);

        const title = document.createElement('h3');
        title.textContent = project.title;
        contentDiv.appendChild(title);

        const shortDesc = document.createElement('p');
        shortDesc.textContent = project.shortDescription;
        contentDiv.appendChild(shortDesc);

        const tagsDiv = document.createElement('div');
        tagsDiv.classList.add('project-tags');
        project.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.textContent = tagText;
            tagsDiv.appendChild(tag);
        });
        contentDiv.appendChild(tagsDiv);

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

        const toggleCaretDiv = document.createElement('button');
        toggleCaretDiv.type = 'button';
        toggleCaretDiv.classList.add('toggle-caret');
        toggleCaretDiv.setAttribute('aria-label', `Show details for ${project.title}`);
        toggleCaretDiv.setAttribute('aria-expanded', 'false');
        const caretIcon = document.createElement('i');
        caretIcon.classList.add('fa-solid', 'fa-chevron-down'); // Default down arrow
        toggleCaretDiv.appendChild(caretIcon);
        toggleCaretDiv.addEventListener('click', event => {
            event.stopPropagation();
            toggleProjectDetails(card);
        });
        card.appendChild(toggleCaretDiv);

        const iconLink = document.createElement('a');
        iconLink.href = project.projectLink;
        iconLink.target = "_blank"; // Open in new tab
        iconLink.rel = "noopener";
        iconLink.setAttribute('aria-label', `Open ${project.title}`);
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

    function setCardExpanded(card, isExpanded) {
        const projectDetails = card.querySelector('.project-details');
        const toggleButton = card.querySelector('.toggle-caret');

        card.classList.toggle('is-expanded', isExpanded);
        projectDetails.style.display = isExpanded ? 'block' : 'none';
        toggleButton.setAttribute('aria-expanded', String(isExpanded));
        toggleButton.setAttribute('aria-label', `${isExpanded ? 'Hide' : 'Show'} details for ${card.querySelector('h3').textContent}`);
    }

    function toggleProjectDetails(card) {
        const shouldClose = activeCard === card;

        if (activeCard) {
            setCardExpanded(activeCard, false);
            if (shouldClose) {
                requestAnimationFrame(() => {
                    card.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                });
            }
            activeCard = null;
        }

        if (shouldClose) {
            return;
        }

        setCardExpanded(card, true);
        activeCard = card;
        requestAnimationFrame(() => {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    }

    // Toggle project details when clicking on the project card.
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function (event) {
            if (event.target.closest('a, video, button')) {
                return;
            }

            toggleProjectDetails(this);
        });
    });
});
