
document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. GRAPHIQUE DU CHIFFRE D'AFFAIRES
    // ==========================================

    const chart = document.getElementById("revenue-chart");

    if (chart) {
        const values = [35, 55, 42, 75, 60, 90, 68];
        const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

        const width = 700;
        const height = 250;
        const padding = 30;
        const max = 100;

        const points = values.map((value, index) => {
            const x = padding + index * ((width - padding * 2) / 6);
            const y = height - padding - (value / max) * (height - padding * 2);
            return `${x},${y}`;
        });

        const pointsString = points.join(" ");
        const firstPoint = points[0].split(",");
        const lastPoint = points[points.length - 1].split(",");

        chart.innerHTML = `
            <svg viewBox="0 0 ${width} ${height}"
                 width="100%"
                 role="img"
                 aria-label="Évolution du chiffre d'affaires sur sept jours">

                <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#2563EB" stop-opacity="0.25"/>
                        <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
                    </linearGradient>
                </defs>

                ${[0, 1, 2, 3].map(i => {
                    const y = padding + i * ((height - padding * 2) / 3);
                    return `<line x1="${padding}" y1="${y}"
                                  x2="${width - padding}" y2="${y}"
                                  stroke="#E9EDF5" stroke-dasharray="4 4"/>`;
                }).join("")}

                <polygon
                    points="${firstPoint[0]},${height - padding} ${pointsString} ${lastPoint[0]},${height - padding}"
                    fill="url(#chartGradient)"
                />

                <polyline
                    points="${pointsString}"
                    fill="none"
                    stroke="#2563EB"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />

                ${points.map(point => {
                    const [x, y] = point.split(",");
                    return `
                        <circle cx="${x}" cy="${y}" r="5"
                                fill="#FFFFFF"
                                stroke="#2563EB"
                                stroke-width="3"/>
                    `;
                }).join("")}

                ${days.map((day, index) => {
                    const x = padding + index * ((width - padding * 2) / 6);
                    return `
                        <text x="${x}" y="${height - 5}"
                              text-anchor="middle"
                              fill="#8A94A6"
                              font-size="12">${day}</text>
                    `;
                }).join("")}
            </svg>
        `;
    }


    // ==========================================
    // 2. MENU LATÉRAL RESPONSIVE
    // ==========================================

    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebarClose = document.querySelector(".sidebar__close");
    const overlay = document.querySelector(".sidebar-overlay");

    function openSidebar() {
        if (!sidebar) return;

        sidebar.classList.add("is-open");
        document.body.classList.add("is-menu-open");

        if (overlay) overlay.hidden = false;

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "true");
        }
    }

    function closeSidebar() {
        if (!sidebar) return;

        sidebar.classList.remove("is-open");
        document.body.classList.remove("is-menu-open");

        if (overlay) overlay.hidden = true;

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", openSidebar);
    }

    if (sidebarClose) {
        sidebarClose.addEventListener("click", closeSidebar);
    }

    if (overlay) {
        overlay.addEventListener("click", closeSidebar);
    }


    // ==========================================
    // 3. RECHERCHE
    // ==========================================

    const search = document.querySelector(".search");
    const searchToggle = document.querySelector(".search-toggle");
    const searchInput = document.querySelector(".search__input");

    if (searchToggle && search) {
        searchToggle.addEventListener("click", () => {
            search.classList.toggle("is-open");

            if (search.classList.contains("is-open") && searchInput) {
                searchInput.focus();
            }
        });
    }

    // Raccourci clavier Ctrl + K ou Cmd + K
    document.addEventListener("keydown", event => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
            event.preventDefault();

            if (search) search.classList.add("is-open");
            if (searchInput) searchInput.focus();
        }
    });


    // ==========================================
    // 4. FILTRAGE DU TABLEAU
    // ==========================================

    const table = document.querySelector(".table");

    if (searchInput && table) {
        searchInput.addEventListener("input", () => {
            const searchValue = searchInput.value
                .toLowerCase()
                .trim();

            const rows = table.querySelectorAll("tbody tr");
            let visibleCount = 0;

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                const matches = text.includes(searchValue);

                row.hidden = !matches;

                if (matches) visibleCount++;
            });

            const emptyState = document.querySelector(".empty-state");

            if (emptyState) {
                emptyState.hidden = visibleCount !== 0;
            }
        });
    }


    // ==========================================
    // 5. NOTIFICATIONS
    // ==========================================

    const notificationButton = document.querySelector(".notif");
    const notificationDropdown = document.querySelector(".dropdown");

    if (notificationButton && notificationDropdown) {
        notificationButton.addEventListener("click", event => {
            event.stopPropagation();

            const isOpen = !notificationDropdown.hidden;

            notificationDropdown.hidden = isOpen;
            notificationButton.setAttribute("aria-expanded", String(!isOpen));
        });

        notificationDropdown.addEventListener("click", event => {
            event.stopPropagation();
        });

        document.addEventListener("click", () => {
            notificationDropdown.hidden = true;
            notificationButton.setAttribute("aria-expanded", "false");
        });
    }


    // ==========================================
    // 6. FILTRE PAR PÉRIODE
    // ==========================================

    const period = document.querySelector(".period");
    const periodButton = document.querySelector(".period__btn");
    const periodMenu = document.querySelector(".period__menu");

    if (periodButton && periodMenu) {
        periodButton.addEventListener("click", event => {
            event.stopPropagation();

            const isOpen = !periodMenu.hidden;

            periodMenu.hidden = isOpen;
            periodButton.setAttribute("aria-expanded", String(!isOpen));
        });

        periodMenu.addEventListener("click", event => {
            const option = event.target.closest("li, button, [role='option']");

            if (!option) return;

            const selectedText = option.textContent.trim();

            if (selectedText && periodButton) {
                const label = periodButton.querySelector("span");

                if (label) {
                    label.textContent = selectedText;
                } else {
                    periodButton.textContent = selectedText;
                }
            }

            periodMenu.hidden = true;
            periodButton.setAttribute("aria-expanded", "false");
        });

        document.addEventListener("click", event => {
            if (period && !period.contains(event.target)) {
                periodMenu.hidden = true;
                periodButton.setAttribute("aria-expanded", "false");
            }
        });
    }


    // ==========================================
    // 7. FERMETURE AVEC LA TOUCHE ÉCHAP
    // ==========================================

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeSidebar();

            if (notificationDropdown) {
                notificationDropdown.hidden = true;
            }

            if (periodMenu) {
                periodMenu.hidden = true;
            }

            if (search) {
                search.classList.remove("is-open");
            }
        }
    });

});
